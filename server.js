const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const port = process.env.PORT || 3201;
const adminPassword = process.env.ADMIN_PASSWORD || "Olona1995@";
const dataPath = path.join(root, "data-store.json");
const sessions = new Set();
const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const useSupabase = Boolean(supabaseUrl && supabaseKey);

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

const defaultDeliveryFee = 60;
const deliveryZones = [
  { code: "A", label: "Zone A - Alexandra", fee: 0, areas: ["Alexandra", "East Bank", "Far East Bank", "River Park", "Beirut", "Tsutsumani", "Setswetla", "Marlboro Gardens"] },
  { code: "B", label: "Zone B - Nearby Areas", fee: 50, areas: ["Marlboro", "Wynberg", "Bramley", "Kew", "Lombardy East", "Buccleuch", "Kelvin", "Linbro Park", "Greenstone", "Modderfontein"] },
  { code: "C", label: "Zone C - Sandton Region", fee: 70, areas: ["Sandton", "Bryanston", "Fourways", "Rivonia", "Morningside", "Sunninghill", "Lonehill", "Douglasdale", "Paulshof", "Woodmead", "Rosebank", "Illovo", "Hyde Park", "Melrose"] },
  { code: "D", label: "Zone D - Midrand Region", fee: 80, areas: ["Midrand", "Halfway House", "Noordwyk", "Vorna Valley", "Carlswald", "Kyalami", "Blue Hills", "Waterfall", "Glen Austin", "Randjespark"] },
  { code: "E", label: "Zone E - Johannesburg Central", fee: 90, areas: ["Johannesburg CBD", "Braamfontein", "Newtown", "Parktown", "Hillbrow", "Berea", "Yeoville", "Troyeville", "Houghton", "Observatory", "Fordsburg", "Mayfair"] },
  { code: "F", label: "Zone F - East Rand", fee: 100, areas: ["Kempton Park", "Edenvale", "Bedfordview", "Germiston", "Alberton", "Boksburg", "Isando", "Jet Park", "Primrose", "Lambton", "Elsburg", "Wadeville"] },
  { code: "G", label: "Zone G - Far East Rand", fee: 120, areas: ["Benoni", "Springs", "Brakpan", "Nigel", "Heidelberg", "Crystal Park", "Daveyton", "Etwatwa", "Tsakane", "KwaThema", "Duduza"] },
  { code: "H", label: "Zone H - West Rand", fee: 120, areas: ["Roodepoort", "Florida", "Horizon", "Ruimsig", "Krugersdorp", "Kagiso", "Randfontein", "Westonaria", "Dobsonville", "Protea Glen"] },
  { code: "I", label: "Zone I - Soweto", fee: 130, areas: ["Soweto", "Diepkloof", "Orlando", "Meadowlands", "Pimville", "Naledi", "Zola", "Jabulani", "Protea", "Dlamini", "Chiawelo", "Moletsane"] },
  { code: "J", label: "Zone J - Pretoria & Tshwane", fee: 150, areas: ["Centurion", "Pretoria CBD", "Hatfield", "Arcadia", "Sunnyside", "Pretoria North", "Akasia", "Wonderboom", "Mamelodi", "Soshanguve", "Atteridgeville", "Ga-Rankuwa", "Hammanskraal", "Temba"] },
  { code: "K", label: "Zone K - Vaal Region", fee: 150, areas: ["Vereeniging", "Vanderbijlpark", "Meyerton", "Sebokeng", "Evaton", "Sharpeville", "Orange Farm"] }
];

function normalizeAddress(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function deliveryZoneForAddress(address) {
  const normalizedAddress = normalizeAddress(address);
  if (!normalizedAddress) return { code: "", label: "Delivery area", fee: 0, area: "" };

  for (const zone of deliveryZones) {
    const area = zone.areas.find((name) => {
      const normalizedArea = normalizeAddress(name);
      return new RegExp(`\\b${normalizedArea.replaceAll(" ", "\\s+")}\\b`, "i").test(normalizedAddress);
    });
    if (area) return { ...zone, area };
  }

  return { code: "Outside", label: "Area to be confirmed", fee: defaultDeliveryFee, area: "" };
}

function defaultData() {
  return {
    orders: [],
    funds: [],
    stock: { ...initialStock },
    outOfStock: {}
  };
}

function localReadData() {
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
    localWriteData(data);
    return data;
  }
}

function localWriteData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

async function supabaseRequest(table, options = {}) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    ...options,
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase ${table} error: ${message}`);
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function orderFromRow(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    customerName: row.customer_name,
    phone: row.phone,
    address: row.address,
    paymentType: row.payment_type,
    deliveryDate: row.delivery_date,
    items: row.items || [],
    subtotal: Number(row.subtotal || 0),
    deliveryFee: Number(row.delivery_fee || 0),
    total: Number(row.total || 0),
    rolls: Number(row.rolls || 0),
    status: row.status
  };
}

function orderToRow(order) {
  return {
    id: order.id,
    created_at: order.createdAt,
    customer_name: order.customerName,
    phone: order.phone,
    address: order.address,
    payment_type: order.paymentType,
    delivery_date: order.deliveryDate || null,
    items: order.items || [],
    subtotal: Number(order.subtotal || 0),
    delivery_fee: Number(order.deliveryFee || 0),
    total: Number(order.total || 0),
    rolls: Number(order.rolls || 0),
    status: order.status || "New"
  };
}

function fundFromRow(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    type: row.type,
    amount: Number(row.amount || 0),
    note: row.note || ""
  };
}

function fundToRow(fund) {
  return {
    id: fund.id,
    created_at: fund.createdAt,
    type: fund.type,
    amount: Number(fund.amount || 0),
    note: fund.note || ""
  };
}

async function readData() {
  if (!useSupabase) return localReadData();

  const [stockRows, orderRows, fundRows] = await Promise.all([
    supabaseRequest("stock?select=*"),
    supabaseRequest("orders?select=*&order=created_at.desc"),
    supabaseRequest("funds?select=*&order=created_at.desc")
  ]);

  const stock = { ...initialStock };
  const outOfStock = {};
  stockRows.forEach((row) => {
    stock[row.product_id] = Number(row.quantity || 0);
    outOfStock[row.product_id] = Boolean(row.out_of_stock);
  });

  return {
    orders: orderRows.map(orderFromRow),
    funds: fundRows.map(fundFromRow),
    stock,
    outOfStock
  };
}

async function writeData(data) {
  if (!useSupabase) {
    localWriteData(data);
    return;
  }

  await Promise.all([
    supabaseRequest("orders?id=not.is.null", { method: "DELETE" }),
    supabaseRequest("funds?id=not.is.null", { method: "DELETE" }),
    supabaseRequest("stock?product_id=not.is.null", { method: "DELETE" })
  ]);

  const stockRows = Object.entries({ ...initialStock, ...data.stock }).map(([productId, quantity]) => ({
    product_id: productId,
    quantity: Number(quantity || 0),
    out_of_stock: Boolean(data.outOfStock?.[productId]) || Number(quantity || 0) <= 0,
    updated_at: new Date().toISOString()
  }));

  await supabaseRequest("stock", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(stockRows)
  });

  if (data.orders.length) {
    await supabaseRequest("orders", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(data.orders.map(orderToRow))
    });
  }

  if (data.funds.length) {
    await supabaseRequest("funds", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(data.funds.map(fundToRow))
    });
  }
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
  if (req.method === "GET" && pathname === "/api/health") {
    try {
      const data = await readData();
      sendJson(res, 200, {
        ok: true,
        database: useSupabase ? "supabase" : "local-file",
        stockItems: Object.keys(data.stock || {}).length,
        orders: data.orders.length
      });
    } catch (error) {
      sendJson(res, 500, {
        ok: false,
        database: useSupabase ? "supabase" : "local-file",
        error: error.message
      });
    }
    return true;
  }

  const data = await readData();

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

    const deliveryZone = deliveryZoneForAddress(order.address);
    const subtotal = Number(order.subtotal || 0);
    const savedOrder = {
      ...order,
      id: `LSC-${1000 + data.orders.length + 1}`,
      createdAt: new Date().toISOString(),
      items: safeItems,
      subtotal,
      deliveryFee: deliveryZone.fee,
      total: subtotal + deliveryZone.fee,
      deliveryDate: "",
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
    await writeData(data);
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
    await writeData(data);
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
    await writeData(data);
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
    await writeData(data);
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-order-delivery-date") {
    const body = await readBody(req);
    const order = data.orders.find((item) => item.id === body.orderId);
    if (!order) {
      sendJson(res, 404, { error: "Order not found" });
      return true;
    }
    order.deliveryDate = body.deliveryDate || "";
    await writeData(data);
    sendJson(res, 200, data);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/admin-clear") {
    const clean = { ...data, orders: [], funds: [] };
    await writeData(clean);
    sendJson(res, 200, clean);
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  const requestPath = decodeURIComponent(req.url.split("?")[0]);

  try {
    if (requestPath.startsWith("/api/") && await handleApi(req, res, requestPath)) return;
  } catch (error) {
    console.error("Server error:", error);
    sendJson(res, 500, { error: error.message || "Server error" });
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

  console.log(`LONAR'S site running at http://localhost:${port}`);
});
