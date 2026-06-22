const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const port = process.env.PORT || 3201;
const adminPassword = process.env.ADMIN_PASSWORD || "Olona1995@";
const dataPath = path.join(root, "data-store.json");
const sessions = new Set();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

const initialStock = {
  "four-pack": 80,
  "200-2ply-9-pack": 60,
  "sixteen-pack": 60,
  "200-2ply-24-pack": 40,
  "200-2ply-48-pack": 25,
  "350-2ply-4-pack": 80,
  "350-2ply-9-pack": 60,
  "350-2ply-16-pack": 50,
  "350-2ply-24-pack": 35,
  "350-2ply-48-pack": 20,
  "virgin-300-1ply-4-pack": 80,
  "virgin-300-1ply-9-pack": 60,
  "virgin-300-1ply-16-pack": 50,
  "virgin-300-1ply-24-pack": 35,
  "virgin-300-1ply-48-pack": 20,
  "recycled-300-1ply-4-pack": 80,
  "recycled-300-1ply-9-pack": 60,
  "recycled-300-1ply-16-pack": 50,
  "recycled-300-1ply-24-pack": 35,
  "recycled-300-1ply-48-pack": 20
};

const productLabels = {
  "four-pack": "LONAR'S 200 Sheet 2 Ply - 4 Pack",
  "200-2ply-9-pack": "LONAR'S 200 Sheet 2 Ply - 9 Pack",
  "sixteen-pack": "LONAR'S 200 Sheet 2 Ply - 16 Pack",
  "200-2ply-24-pack": "LONAR'S 200 Sheet 2 Ply - 24 Pack",
  "200-2ply-48-pack": "LONAR'S 200 Sheet 2 Ply - 48 Pack",
  "350-2ply-4-pack": "LONAR'S 350 Sheet 2 Ply - 4 Pack",
  "350-2ply-9-pack": "LONAR'S 350 Sheet 2 Ply - 9 Pack",
  "350-2ply-16-pack": "LONAR'S 350 Sheet 2 Ply - 16 Pack",
  "350-2ply-24-pack": "LONAR'S 350 Sheet 2 Ply - 24 Pack",
  "350-2ply-48-pack": "LONAR'S 350 Sheet 2 Ply - 48 Pack",
  "virgin-300-1ply-4-pack": "LONAR'S Virgin Paper 300 Sheet 1 Ply - 4 Pack",
  "virgin-300-1ply-9-pack": "LONAR'S Virgin Paper 300 Sheet 1 Ply - 9 Pack",
  "virgin-300-1ply-16-pack": "LONAR'S Virgin Paper 300 Sheet 1 Ply - 16 Pack",
  "virgin-300-1ply-24-pack": "LONAR'S Virgin Paper 300 Sheet 1 Ply - 24 Pack",
  "virgin-300-1ply-48-pack": "LONAR'S Virgin Paper 300 Sheet 1 Ply - 48 Pack",
  "recycled-300-1ply-4-pack": "LONAR'S Recycled Paper 300 Sheet 1 Ply - 4 Pack",
  "recycled-300-1ply-9-pack": "LONAR'S Recycled Paper 300 Sheet 1 Ply - 9 Pack",
  "recycled-300-1ply-16-pack": "LONAR'S Recycled Paper 300 Sheet 1 Ply - 16 Pack",
  "recycled-300-1ply-24-pack": "LONAR'S Recycled Paper 300 Sheet 1 Ply - 24 Pack",
  "recycled-300-1ply-48-pack": "LONAR'S Recycled Paper 300 Sheet 1 Ply - 48 Pack"
};

function defaultData() {
  return {
    orders: [],
    funds: [],
    stock: { ...initialStock },
    outOfStock: {}
  };
}

function readData() {
  try {
    const saved = JSON.parse(fs.readFileSync(dataPath, "utf8"));
    return {
      orders: Array.isArray(saved.orders) ? saved.orders : [],
      funds: Array.isArray(saved.funds) ? saved.funds : [],
      stock: { ...initialStock, ...(saved.stock || {}) },
      outOfStock: saved.outOfStock || {}
    };
  } catch {
    const data = defaultData();
    writeData(data);
    return data;
  }
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

function publicData(data) {
  return {
    stock: data.stock,
    outOfStock: data.outOfStock
  };
}

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) req.destroy();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function isAdmin(req) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  return Boolean(token && sessions.has(token));
}

function orderNotificationText(order) {
  const itemText = order.items.map((item) => `${item.quantity} x ${productLabels[item.productId] || item.productId}`).join(", ");
  return [
    `New LONAR'S order: ${order.id}`,
    `Customer: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
    `Payment: ${order.paymentType}`,
    `Items: ${itemText}`,
    `Delivery fee: R${Number(order.deliveryFee || 0)}`,
    `Total: R${Number(order.total || 0)}`
  ].join("\n");
}

async function sendTwilioMessage(to, from, body) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token || !to || !from) return;

  const params = new URLSearchParams({ To: to, From: from, Body: body });
  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });
}

async function sendResendEmail(subject, text) {
  if (!process.env.RESEND_API_KEY || !process.env.ORDER_EMAIL_TO || !process.env.ORDER_EMAIL_FROM) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.ORDER_EMAIL_FROM,
      to: process.env.ORDER_EMAIL_TO,
      subject,
      text
    })
  });
}

async function notifyNewOrder(order) {
  const text = orderNotificationText(order);
  const jobs = [];
  console.log(text);

  if (process.env.ORDER_WEBHOOK_URL) {
    jobs.push(fetch(process.env.ORDER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "new_order", order, message: text })
    }));
  }

  jobs.push(sendTwilioMessage(process.env.TWILIO_TO_SMS, process.env.TWILIO_FROM_SMS, text));
  jobs.push(sendTwilioMessage(process.env.TWILIO_TO_WHATSAPP, process.env.TWILIO_FROM_WHATSAPP, text));
  jobs.push(sendResendEmail(`New LONAR'S order ${order.id}`, text));

  const results = await Promise.allSettled(jobs);
  results.filter((result) => result.status === "rejected").forEach((result) => {
    console.error("Order notification failed:", result.reason?.message || result.reason);
  });
}

async function handleApi(req, res, pathname) {
  const data = readData();

  if (req.method === "GET" && pathname === "/api/public-state") {
    sendJson(res, 200, publicData(data));
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-login") {
    const body = await readBody(req);
    if (body.password !== adminPassword) {
      sendJson(res, 401, { error: "Incorrect password" });
      return true;
    }

    const token = crypto.randomUUID();
    sessions.add(token);
    sendJson(res, 200, { token, state: data });
    return true;
  }

  if (req.method === "POST" && pathname === "/api/order") {
    const order = await readBody(req);
    const items = Array.isArray(order.items) ? order.items : [];
    const safeItems = items.map((item) => ({
      productId: String(item.productId || ""),
      quantity: Math.max(0, Number(item.quantity || 0))
    })).filter((item) => initialStock[item.productId] !== undefined && item.quantity > 0);

    const unavailable = safeItems.find((item) => Number(data.stock[item.productId] || 0) < item.quantity || data.outOfStock[item.productId]);
    if (unavailable) {
      sendJson(res, 409, { error: "One or more selected products are sold out.", publicState: publicData(data) });
      return true;
    }

    const savedOrder = {
      ...order,
      id: `LSC-${1000 + data.orders.length + 1}`,
      createdAt: new Date().toISOString(),
      items: safeItems,
      status: "New"
    };

    safeItems.forEach((item) => {
      data.stock[item.productId] = Math.max(0, Number(data.stock[item.productId] || 0) - item.quantity);
      if (data.stock[item.productId] <= 0) data.outOfStock[item.productId] = true;
    });

    data.orders.unshift(savedOrder);
    data.funds.unshift({
      id: crypto.randomUUID(),
      type: "income",
      amount: Number(savedOrder.total || 0),
      note: `Order ${savedOrder.id} - ${savedOrder.paymentType}`,
      createdAt: new Date().toISOString()
    });
    writeData(data);
    notifyNewOrder(savedOrder);
    sendJson(res, 200, { order: savedOrder, publicState: publicData(data) });
    return true;
  }

  if (pathname.startsWith("/api/admin-") && !isAdmin(req)) {
    sendJson(res, 401, { error: "Admin login required" });
    return true;
  }

  if (req.method === "GET" && pathname === "/api/admin-state") {
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-stock") {
    const body = await readBody(req);
    if (initialStock[body.productId] === undefined) {
      sendJson(res, 400, { error: "Unknown product" });
      return true;
    }
    data.stock[body.productId] = Math.max(0, Number(body.stock || 0));
    data.outOfStock[body.productId] = Boolean(body.outOfStock) || data.stock[body.productId] <= 0;
    writeData(data);
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-fund") {
    const body = await readBody(req);
    data.funds.unshift({
      id: crypto.randomUUID(),
      type: "expense",
      amount: Number(body.amount || 0),
      note: String(body.note || "").trim(),
      createdAt: new Date().toISOString()
    });
    writeData(data);
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-order-status") {
    const body = await readBody(req);
    const order = data.orders.find((item) => item.id === body.orderId);
    if (!order) {
      sendJson(res, 404, { error: "Order not found" });
      return true;
    }
    order.status = String(body.status || order.status);
    writeData(data);
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-clear") {
    const clean = defaultData();
    writeData(clean);
    sendJson(res, 200, clean);
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  const requestPath = decodeURIComponent(req.url.split("?")[0]);

  try {
    if (requestPath.startsWith("/api/") && await handleApi(req, res, requestPath)) return;
  } catch {
    sendJson(res, 500, { error: "Server error" });
    return;
  }

  const filePath = path.join(root, requestPath === "/" ? "index.html" : requestPath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`LONAR'S site running at http://localhost:${port}`);
});
