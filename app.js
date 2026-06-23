const ADMIN_PASSWORD = "Olona1995@";
const STORAGE_KEY = "lornasSoftComfortData";
const BASKET_KEY = "lornasBasket";
const ADMIN_TOKEN_KEY = "lornasAdminToken";

const products = [
  {
    id: "four-pack",
    name: "LONAR'S 200 Sheet 2 Ply - 4 Pack",
    category: "200 Sheet - 2 Ply",
    type: "200 sheet toilet tissue",
    sheets: 200,
    ply: "2 Ply",
    rolls: 4,
    price: 25,
    startingStock: 80,
    description: "200 sheet, 2 ply tissue pack for small households and top-up orders."
  },
  {
    id: "200-2ply-9-pack",
    name: "LONAR'S 200 Sheet 2 Ply - 9 Pack",
    category: "200 Sheet - 2 Ply",
    type: "200 sheet toilet tissue",
    sheets: 200,
    ply: "2 Ply",
    rolls: 9,
    price: 55,
    startingStock: 60,
    description: "A convenient 9-pack for regular home use."
  },
  {
    id: "sixteen-pack",
    name: "LONAR'S 200 Sheet 2 Ply - 16 Pack",
    category: "200 Sheet - 2 Ply",
    type: "200 sheet toilet tissue",
    sheets: 200,
    ply: "2 Ply",
    rolls: 16,
    price: 100,
    startingStock: 60,
    description: "Family value 16-pack for weekly household supply."
  },
  {
    id: "200-2ply-24-pack",
    name: "LONAR'S 200 Sheet 2 Ply - 24 Pack",
    category: "200 Sheet - 2 Ply",
    type: "200 sheet toilet tissue",
    sheets: 200,
    ply: "2 Ply",
    rolls: 24,
    price: 150,
    startingStock: 40,
    description: "Larger 24-pack for families, offices and shared spaces."
  },
  {
    id: "200-2ply-48-pack",
    name: "LONAR'S 200 Sheet 2 Ply - 48 Pack",
    category: "200 Sheet - 2 Ply",
    type: "200 sheet toilet tissue",
    sheets: 200,
    ply: "2 Ply",
    rolls: 48,
    price: 280,
    startingStock: 25,
    description: "Bulk 48-pack for businesses and high-use households."
  },
  {
    id: "350-2ply-4-pack",
    name: "LONAR'S 350 Sheet 2 Ply - 4 Pack",
    category: "350 Sheet - 2 Ply",
    type: "350 sheet toilet tissue",
    sheets: 350,
    ply: "2 Ply",
    rolls: 4,
    price: 35,
    startingStock: 80,
    description: "Longer-lasting 350 sheet, 2 ply 4-pack."
  },
  {
    id: "350-2ply-9-pack",
    name: "LONAR'S 350 Sheet 2 Ply - 9 Pack",
    category: "350 Sheet - 2 Ply",
    type: "350 sheet toilet tissue",
    sheets: 350,
    ply: "2 Ply",
    rolls: 9,
    price: 75,
    startingStock: 60,
    description: "Value 9-pack with 350 sheets per roll."
  },
  {
    id: "350-2ply-16-pack",
    name: "LONAR'S 350 Sheet 2 Ply - 16 Pack",
    category: "350 Sheet - 2 Ply",
    type: "350 sheet toilet tissue",
    sheets: 350,
    ply: "2 Ply",
    rolls: 16,
    price: 140,
    startingStock: 50,
    description: "Family 16-pack with extra sheets per roll."
  },
  {
    id: "350-2ply-24-pack",
    name: "LONAR'S 350 Sheet 2 Ply - 24 Pack",
    category: "350 Sheet - 2 Ply",
    type: "350 sheet toilet tissue",
    sheets: 350,
    ply: "2 Ply",
    rolls: 24,
    price: 210,
    startingStock: 35,
    description: "Bulk 24-pack for bigger households and business use."
  },
  {
    id: "350-2ply-48-pack",
    name: "LONAR'S 350 Sheet 2 Ply - 48 Pack",
    category: "350 Sheet - 2 Ply",
    type: "350 sheet toilet tissue",
    sheets: 350,
    ply: "2 Ply",
    rolls: 48,
    price: 380,
    startingStock: 20,
    description: "High-volume 48-pack with 350 sheets per roll."
  },
  {
    id: "virgin-300-1ply-4-pack",
    name: "LONAR'S Virgin Paper 300 Sheet 1 Ply - 4 Pack",
    category: "Virgin Paper 300 Sheet - 1 Ply",
    type: "Virgin paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 4,
    price: 20,
    startingStock: 80,
    description: "Virgin paper 300 sheet, 1 ply 4-pack."
  },
  {
    id: "virgin-300-1ply-9-pack",
    name: "LONAR'S Virgin Paper 300 Sheet 1 Ply - 9 Pack",
    category: "Virgin Paper 300 Sheet - 1 Ply",
    type: "Virgin paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 9,
    price: 45,
    startingStock: 60,
    description: "Virgin paper 9-pack for daily household use."
  },
  {
    id: "virgin-300-1ply-16-pack",
    name: "LONAR'S Virgin Paper 300 Sheet 1 Ply - 16 Pack",
    category: "Virgin Paper 300 Sheet - 1 Ply",
    type: "Virgin paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 16,
    price: 80,
    startingStock: 50,
    description: "Virgin paper 16-pack for family value."
  },
  {
    id: "virgin-300-1ply-24-pack",
    name: "LONAR'S Virgin Paper 300 Sheet 1 Ply - 24 Pack",
    category: "Virgin Paper 300 Sheet - 1 Ply",
    type: "Virgin paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 24,
    price: 120,
    startingStock: 35,
    description: "Virgin paper 24-pack for larger orders."
  },
  {
    id: "virgin-300-1ply-48-pack",
    name: "LONAR'S Virgin Paper 300 Sheet 1 Ply - 48 Pack",
    category: "Virgin Paper 300 Sheet - 1 Ply",
    type: "Virgin paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 48,
    price: 240,
    startingStock: 20,
    description: "Virgin paper bulk 48-pack."
  },
  {
    id: "recycled-300-1ply-4-pack",
    name: "LONAR'S Recycled Paper 300 Sheet 1 Ply - 4 Pack",
    category: "Recycled Paper 300 Sheet - 1 Ply",
    type: "Recycled paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 4,
    price: 10,
    startingStock: 80,
    description: "Budget recycled paper 4-pack."
  },
  {
    id: "recycled-300-1ply-9-pack",
    name: "LONAR'S Recycled Paper 300 Sheet 1 Ply - 9 Pack",
    category: "Recycled Paper 300 Sheet - 1 Ply",
    type: "Recycled paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 9,
    price: 25,
    startingStock: 60,
    description: "Budget recycled paper 9-pack."
  },
  {
    id: "recycled-300-1ply-16-pack",
    name: "LONAR'S Recycled Paper 300 Sheet 1 Ply - 16 Pack",
    category: "Recycled Paper 300 Sheet - 1 Ply",
    type: "Recycled paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 16,
    price: 40,
    startingStock: 50,
    description: "Budget recycled paper 16-pack."
  },
  {
    id: "recycled-300-1ply-24-pack",
    name: "LONAR'S Recycled Paper 300 Sheet 1 Ply - 24 Pack",
    category: "Recycled Paper 300 Sheet - 1 Ply",
    type: "Recycled paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 24,
    price: 60,
    startingStock: 35,
    description: "Budget recycled paper 24-pack."
  },
  {
    id: "recycled-300-1ply-48-pack",
    name: "LONAR'S Recycled Paper 300 Sheet 1 Ply - 48 Pack",
    category: "Recycled Paper 300 Sheet - 1 Ply",
    type: "Recycled paper toilet tissue",
    sheets: 300,
    ply: "1 Ply",
    rolls: 48,
    price: 120,
    startingStock: 20,
    description: "Budget recycled paper bulk 48-pack."
  }
];

const paymentTypes = ["EFT", "Card Payment", "Cash on Delivery"];
const DEFAULT_DELIVERY_FEE = 60;
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

const money = (value) => `R${Number(value || 0).toLocaleString("en-ZA")}`;

const defaultData = () => ({
  orders: [
    {
      id: "LSC-1001",
      createdAt: new Date().toISOString(),
      customerName: "Sample customer",
      phone: "071 000 0000",
      address: "Alexandra, Johannesburg",
      paymentType: "Cash on Delivery",
      deliveryDate: new Date().toISOString().slice(0, 10),
      items: [{ productId: "four-pack", quantity: 2 }],
      total: 50,
      rolls: 8,
      status: "New"
    }
  ],
  funds: [
    {
      id: crypto.randomUUID(),
      type: "income",
      amount: 50,
      note: "Order LSC-1001 - Cash on Delivery",
      createdAt: new Date().toISOString()
    }
  ],
  stock: Object.fromEntries(products.map((product) => [product.id, product.startingStock])),
  outOfStock: {}
});

let state = loadState();
let basket = loadBasket();
let adminUnlocked = false;
let adminToken = sessionStorage.getItem(ADMIN_TOKEN_KEY) || "";
let serverMode = false;
let adminRefreshTimer = null;
let lastKnownOrderIds = new Set();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultData();

  try {
    const parsed = JSON.parse(saved);
    const data = {
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      funds: Array.isArray(parsed.funds) ? parsed.funds : [],
      stock: { ...Object.fromEntries(products.map((product) => [product.id, product.startingStock])), ...(parsed.stock || {}) },
      outOfStock: parsed.outOfStock || {}
    };
    data.funds = data.funds.map((fund) => (
      fund.type === "income" && fund.note === "Sample cash sale"
        ? { ...fund, note: "Order LSC-1001 - Cash on Delivery" }
        : fund
    ));
    return data;
  } catch {
    return defaultData();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function apiRequest(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (adminToken) headers.Authorization = `Bearer ${adminToken}`;

  const response = await fetch(path, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

function mergeSharedState(shared) {
  if (!shared) return;
  state = {
    ...state,
    orders: Array.isArray(shared.orders) ? shared.orders : state.orders,
    funds: Array.isArray(shared.funds) ? shared.funds : state.funds,
    stock: { ...state.stock, ...(shared.stock || {}) },
    outOfStock: shared.outOfStock || state.outOfStock || {}
  };
  saveState();
}

async function loadSharedPublicState() {
  if (window.location.protocol === "file:") return;

  try {
    const shared = await apiRequest("/api/public-state");
    serverMode = true;
    mergeSharedState(shared);
  } catch {
    serverMode = false;
  }
}

function loadBasket() {
  const saved = localStorage.getItem(BASKET_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter((item) => productById(item.productId)) : [];
  } catch {
    return [];
  }
}

function saveBasket() {
  localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
  updateBasketCount();
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function stockCount(productId) {
  return Number(state.stock?.[productId] || 0);
}

function isSoldOut(productId) {
  return Boolean(state.outOfStock?.[productId]) || stockCount(productId) <= 0;
}

function basketItemCount() {
  return basket.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}

function updateBasketCount() {
  document.querySelectorAll("[data-basket-count]").forEach((count) => {
    count.textContent = basketItemCount();
  });
}

function productImage(product) {
  if (product.rolls === 4) return "assets/pack-4.png";
  if (product.rolls === 9) return "assets/pack-9.png";
  if (product.rolls === 16) return "assets/pack-16.png";
  if (product.rolls === 24) return "assets/pack-24.png";
  if (product.rolls === 48) return "assets/pack-48.png";
  return "assets/lorna-product-stack.jpeg";
}

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  if (!grid) return;

  const renderCard = (product, index) => {
    const soldOut = isSoldOut(product.id);
    return `
      <article class="product-card ${soldOut ? "sold-out-card" : ""}" style="--pack-bg: url('${index % 2 === 0 ? "assets/lorna-product-stack.jpeg" : "assets/lorna-deals.jpeg"}')">
        ${soldOut ? `<span class="sold-out-badge">Sold out</span>` : ""}
        <div class="product-image">
          <img src="${productImage(product)}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <p class="price">${money(product.price)}</p>
        <p>${product.description}</p>
        <div class="public-stock ${soldOut ? "public-stock-out" : "public-stock-in"}">
          ${soldOut ? "Sold out" : `${stockCount(product.id)} pack(s) available`}
        </div>
        <div class="tag-row">
          <span class="tag">${product.type}</span>
          <span class="tag">${product.sheets} sheets</span>
          <span class="tag">${product.ply}</span>
          <span class="tag">${product.rolls} pack</span>
          <span class="tag">${money(product.price / product.rolls)} per roll</span>
        </div>
        <button class="btn btn-primary add-basket-btn" type="button" data-add-basket="${product.id}" ${soldOut ? "disabled" : ""}>${soldOut ? "Sold out" : "Add to basket"}</button>
      </article>
    `;
  };

  const twoPlyProducts = products.filter((product) => product.ply === "2 Ply");
  const onePlyProducts = products.filter((product) => product.ply === "1 Ply");

  grid.innerHTML = `
    <section class="product-group">
      <div class="product-group-heading">
        <span>2 Ply</span>
        <h3>Soft comfort 2 ply packs</h3>
      </div>
      <div class="product-card-grid">
        ${twoPlyProducts.map(renderCard).join("")}
      </div>
    </section>
    <section class="product-group">
      <div class="product-group-heading">
        <span>1 Ply</span>
        <h3>Virgin and recycled 1 ply packs</h3>
      </div>
      <div class="product-card-grid">
        ${onePlyProducts.map(renderCard).join("")}
      </div>
    </section>
  `;

  grid.querySelectorAll("[data-add-basket]").forEach((button) => {
    button.addEventListener("click", () => addToBasket(button.dataset.addBasket));
  });
}

function addToBasket(productId) {
  const message = document.querySelector("#basketMessage");

  if (isSoldOut(productId)) {
    if (message) message.textContent = `${productById(productId).name} is sold out.`;
    return;
  }

  const existing = basket.find((item) => item.productId === productId);
  if (existing) {
    if (existing.quantity >= stockCount(productId)) {
      if (message) message.textContent = `Only ${stockCount(productId)} pack(s) available for ${productById(productId).name}.`;
      return;
    }
    existing.quantity += 1;
  } else {
    basket.push({ productId, quantity: 1 });
  }

  saveBasket();
  renderBasket();
  updateOrderTotal();
  updateBasketCount();
  if (message) {
    message.innerHTML = `<strong>Added to basket.</strong> ${productById(productId).name} is now selected. <a href="basket.html">View basket (${basketItemCount()})</a>`;
  }
}

function renderBasket() {
  const wrap = document.querySelector("#basketItems");
  if (!wrap) return;

  if (!basket.length) {
    wrap.innerHTML = `<div class="empty-basket">Your basket is empty. Add tissue packs from the products above.</div>`;
  } else {
    wrap.innerHTML = basket.map((item) => {
      const product = productById(item.productId);
      return `
        <div class="basket-line">
          <div>
            <strong>${product.name}</strong>
            <span>${product.category} | ${product.rolls} pack | ${product.sheets} sheets | ${product.ply}</span>
            ${isSoldOut(product.id) ? `<span class="sold-out-text">Sold out</span>` : ""}
          </div>
          <label>
            Quantity
            <input class="basket-quantity" type="number" min="1" max="${stockCount(product.id)}" value="${item.quantity}" data-basket-quantity="${product.id}">
          </label>
          <div class="basket-price">
            <span>Pack price</span>
            <strong>${money(product.price)}</strong>
          </div>
          <div class="basket-price">
            <span>Line total</span>
            <strong>${money(product.price * item.quantity)}</strong>
          </div>
          <button class="btn btn-secondary" type="button" data-remove-basket="${product.id}">Remove</button>
        </div>
      `;
    }).join("");
  }

  wrap.querySelectorAll("[data-basket-quantity]").forEach((input) => {
    input.addEventListener("input", () => updateBasketQuantity(input.dataset.basketQuantity, input.value));
  });

  wrap.querySelectorAll("[data-remove-basket]").forEach((button) => {
    button.addEventListener("click", () => removeFromBasket(button.dataset.removeBasket));
  });

  updateBasketTotals();
  renderCheckoutReview();
}

function updateBasketQuantity(productId, value) {
  const item = basket.find((basketItem) => basketItem.productId === productId);
  if (!item) return;

  item.quantity = Math.min(stockCount(productId), Math.max(1, Number(value || 1)));
  saveBasket();
  renderBasket();
  updateOrderTotal();
  updateBasketCount();
}

function removeFromBasket(productId) {
  basket = basket.filter((item) => item.productId !== productId);
  saveBasket();
  renderBasket();
  updateOrderTotal();
  updateBasketCount();
}

function updateBasketTotals() {
  const totalEl = document.querySelector("#basketTotal");
  const rollsEl = document.querySelector("#basketRolls");
  const checkoutBtn = document.querySelector("#checkoutBtn");
  if (!totalEl || !rollsEl) return;

  const { total, rolls } = calculateItems(basket);
  totalEl.textContent = money(total);
  rollsEl.textContent = `${rolls} rolls selected`;
  if (checkoutBtn) checkoutBtn.classList.toggle("disabled", basket.length === 0 || basket.some((item) => isSoldOut(item.productId)));
}

function renderCheckoutReview() {
  const review = document.querySelector("#checkoutReview");
  if (!review) return;

  if (!basket.length) {
    review.innerHTML = `<strong>Your basket is empty.</strong><span>Add items before checkout.</span>`;
    return;
  }

  const { total, rolls } = calculateItems(basket);
  review.innerHTML = `
    <strong>Checkout basket</strong>
    <span>${basket.map((item) => `${item.quantity} x ${productById(item.productId)?.name || "Removed product"}`).join(" | ")}</span>
    <span>${rolls} rolls | ${money(total)}</span>
  `;
}

function renderLegacyOrderItems() {
  const wrap = document.querySelector("#orderItems");
  if (!wrap) return;
  wrap.innerHTML = products.map((product) => `
    <div class="order-line">
      <div>
        <strong>${product.name}</strong>
        <span>${product.type} | ${product.rolls} rolls | ${money(product.price)}</span>
      </div>
      <label>
        Quantity
        <input class="quantity-input" type="number" min="0" value="0" data-product-id="${product.id}">
      </label>
      <strong class="line-total" data-product-total="${product.id}">R0</strong>
    </div>
  `).join("");

  wrap.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("input", updateOrderTotal);
  });
}

function getSelectedItems() {
  if (basket.length) return basket.map((item) => ({ ...item }));

  return [...document.querySelectorAll(".quantity-input")]
    .map((input) => ({
      productId: input.dataset.productId,
      quantity: Math.max(0, Number(input.value || 0))
    }))
    .filter((item) => item.quantity > 0);
}

function calculateItems(items) {
  return items.reduce((summary, item) => {
    const product = productById(item.productId);
    if (!product) return summary;
    summary.total += product.price * item.quantity;
    summary.rolls += product.rolls * item.quantity;
    return summary;
  }, { total: 0, rolls: 0 });
}

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

  return { code: "Outside", label: "Area to be confirmed", fee: DEFAULT_DELIVERY_FEE, area: "" };
}

function deliveryFeeForAddress(address) {
  return deliveryZoneForAddress(address).fee;
}

function currentDeliveryFee() {
  const address = document.querySelector('[name="address"]')?.value || "";
  return deliveryFeeForAddress(address);
}

function updateDeliveryFeeDisplay() {
  const feeEl = document.querySelector("#deliveryFee");
  const noteEl = document.querySelector("#deliveryFeeNote");
  if (!feeEl || !noteEl) return;

  const address = document.querySelector('[name="address"]')?.value || "";
  const zone = deliveryZoneForAddress(address);
  const fee = zone.fee;
  feeEl.textContent = money(fee);
  noteEl.textContent = !address.trim()
    ? "Type your delivery area and the correct delivery zone fee will be added automatically."
    : zone.code === "Outside"
      ? "Delivery area not found in the zone list. R60 delivery fee added for now; admin can confirm before delivery."
      : `${zone.label}${zone.area ? ` (${zone.area})` : ""} selected. ${fee === 0 ? "Delivery is free." : `${money(fee)} delivery fee added.`}`;
}

function updateOrderTotal() {
  const totalEl = document.querySelector("#orderTotal");
  const rollsEl = document.querySelector("#orderRolls");
  if (!totalEl || !rollsEl) return;

  const items = getSelectedItems();
  const { total, rolls } = calculateItems(items);
  const deliveryFee = currentDeliveryFee();

  products.forEach((product) => {
    const item = items.find((selected) => selected.productId === product.id);
    const quantity = item ? item.quantity : 0;
    const lineTotal = document.querySelector(`[data-product-total="${product.id}"]`);
    if (lineTotal) lineTotal.textContent = money(product.price * quantity);
  });

  totalEl.textContent = money(total + deliveryFee);
  rollsEl.textContent = `${rolls} rolls selected`;
  updateDeliveryFeeDisplay();
}

async function handleOrderSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const items = getSelectedItems();
  const message = document.querySelector("#orderMessage");

  if (!items.length) {
    message.textContent = "Please choose at least one tissue pack.";
    return;
  }

  const soldOutItem = items.find((item) => isSoldOut(item.productId));
  if (soldOutItem) {
    message.textContent = `${productById(soldOutItem.productId).name} is sold out. Please remove it from your basket.`;
    return;
  }

  const overStockItem = items.find((item) => item.quantity > stockCount(item.productId));
  if (overStockItem) {
    message.textContent = `Only ${stockCount(overStockItem.productId)} pack(s) available for ${productById(overStockItem.productId).name}.`;
    return;
  }

  const paymentType = formData.get("paymentType");
  if (!paymentTypes.includes(paymentType)) {
    message.textContent = "Please choose EFT, Card Payment or Cash on Delivery.";
    return;
  }

  const { total, rolls } = calculateItems(items);
  const address = formData.get("address").trim();
  const deliveryFee = deliveryFeeForAddress(address);
  const finalTotal = total + deliveryFee;
  const order = {
    id: `LSC-${1000 + state.orders.length + 1}`,
    createdAt: new Date().toISOString(),
    customerName: formData.get("customerName").trim(),
    phone: formData.get("phone").trim(),
    address,
    paymentType,
    deliveryDate: "",
    items,
    subtotal: total,
    deliveryFee,
    total: finalTotal,
    rolls,
    status: "New"
  };

  if (serverMode) {
    try {
      const result = await apiRequest("/api/order", {
        method: "POST",
        body: JSON.stringify(order)
      });
      mergeSharedState(result.publicState);
      basket = [];
      saveBasket();
      form.reset();
      document.querySelectorAll(".quantity-input").forEach((input) => {
        input.value = 0;
      });
      updateOrderTotal();
      renderBasket();
      renderProducts();
      message.textContent = `Order ${result.order.id} saved. Total ${money(result.order.total)} for ${result.order.rolls} rolls.`;
      return;
    } catch (error) {
      message.textContent = error.message;
      return;
    }
  }

  state.orders.unshift(order);
  items.forEach((item) => {
    state.stock[item.productId] = Math.max(0, Number(state.stock[item.productId] || 0) - item.quantity);
    if (state.stock[item.productId] <= 0) {
      state.outOfStock[item.productId] = true;
    }
  });
  state.funds.unshift({
    id: crypto.randomUUID(),
    type: "income",
    amount: finalTotal,
    note: `Order ${order.id} - ${paymentType}`,
    createdAt: new Date().toISOString()
  });

  saveState();
  basket = [];
  saveBasket();
  form.reset();
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.value = 0;
  });
  updateOrderTotal();
  renderBasket();
  message.textContent = `Order ${order.id} saved. Total ${money(finalTotal)} for ${rolls} rolls.`;
  if (adminUnlocked) renderDashboard();
}

async function loginAdmin() {
  const password = document.querySelector("#adminPassword").value;
  const message = document.querySelector("#loginMessage");

  if (serverMode) {
    try {
      const result = await apiRequest("/api/admin-login", {
        method: "POST",
        body: JSON.stringify({ password })
      });
      adminToken = result.token;
      sessionStorage.setItem(ADMIN_TOKEN_KEY, adminToken);
      mergeSharedState(result.state);
      adminUnlocked = true;
      document.querySelector("#adminLogin").classList.add("hidden");
      document.querySelector("#dashboard").classList.remove("hidden");
      renderDashboard();
      startAdminRefresh();
      return;
    } catch (error) {
      message.textContent = error.message;
      return;
    }
  }

  if (password !== ADMIN_PASSWORD) {
    message.textContent = "Incorrect password.";
    return;
  }

  adminUnlocked = true;
  document.querySelector("#adminLogin").classList.add("hidden");
  document.querySelector("#dashboard").classList.remove("hidden");
  renderDashboard();
  startAdminRefresh();
}

function renderDashboard() {
  renderMetrics();
  renderFunds();
  renderStock();
  renderOrders();
  renderPerformance();
  renderMonthlyChart();
}

async function refreshAdminState(showNewOrderMessage = false) {
  if (!serverMode || !adminUnlocked) return;

  try {
    const shared = await apiRequest("/api/admin-state");
    const incomingIds = new Set(shared.orders.map((order) => order.id));
    const newOrders = shared.orders.filter((order) => !lastKnownOrderIds.has(order.id));
    mergeSharedState(shared);
    renderDashboard();
    lastKnownOrderIds = incomingIds;

    if (showNewOrderMessage && newOrders.length) {
      const statusMessage = document.querySelector("#orderStatusMessage");
      if (statusMessage) {
        statusMessage.textContent = `${newOrders.length} new public order(s) received. Latest: ${newOrders[0].id} from ${newOrders[0].customerName}.`;
      }
    }
  } catch (error) {
    const statusMessage = document.querySelector("#orderStatusMessage");
    if (statusMessage) statusMessage.textContent = error.message;
  }
}

function startAdminRefresh() {
  if (!serverMode || adminRefreshTimer) return;
  lastKnownOrderIds = new Set(state.orders.map((order) => order.id));
  adminRefreshTimer = setInterval(() => refreshAdminState(true), 15000);
}

async function unlockAdminFromSavedSession() {
  if (!serverMode || !adminToken || !document.querySelector("#adminLogin")) return;

  try {
    const shared = await apiRequest("/api/admin-state");
    mergeSharedState(shared);
    adminUnlocked = true;
    document.querySelector("#adminLogin").classList.add("hidden");
    document.querySelector("#dashboard").classList.remove("hidden");
    renderDashboard();
    startAdminRefresh();
  } catch {
    adminToken = "";
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  }
}

function renderMetrics() {
  const income = state.funds.filter((fund) => fund.type === "income").reduce((sum, fund) => sum + Number(fund.amount), 0);
  const expenses = state.funds.filter((fund) => fund.type === "expense").reduce((sum, fund) => sum + Number(fund.amount), 0);
  const rolls = state.orders.reduce((sum, order) => sum + Number(order.rolls || 0), 0);

  document.querySelector("#metricIncome").textContent = money(income);
  document.querySelector("#metricExpenses").textContent = money(expenses);
  document.querySelector("#metricNet").textContent = money(income - expenses);
  document.querySelector("#metricRolls").textContent = `${rolls} rolls`;
}

function renderFunds() {
  const list = document.querySelector("#fundList");
  list.innerHTML = state.funds.slice(0, 6).map((fund) => {
    const orderId = fund.note?.match(/Order (LSC-\d+)/)?.[1];
    const order = orderId ? state.orders.find((item) => item.id === orderId) : null;
    const orderDetails = order ? `
      <div class="fund-order-details hidden" id="fund-order-${order.id}">
        <strong>Order information</strong>
        <span>Customer: ${order.customerName}</span>
        <span>Phone: ${order.phone}</span>
        <span>Payment: ${order.paymentType}</span>
        <span>Delivery date: ${order.deliveryDate || "Not set"}</span>
        <span>Address: ${order.address}</span>
        <span>Items: ${formatOrderItems(order.items).replaceAll("<br>", " | ")}</span>
        <span>Rolls: ${order.rolls}</span>
        <span>Delivery fee: ${money(order.deliveryFee || 0)}</span>
        <span>Total: ${money(order.total)}</span>
      </div>
    ` : "";

    return `
      <article class="${order ? "clickable-fund" : ""}" ${order ? `data-fund-order="${order.id}"` : ""}>
        <strong>${fund.type === "income" ? "Income" : "Expense"}: ${money(fund.amount)}</strong>
        <span>${fund.note || "No note"} | ${new Date(fund.createdAt).toLocaleDateString("en-ZA")}</span>
        ${order ? `<button class="text-link" type="button">View order information</button>` : fund.type === "income" ? `<span class="no-order-note">No linked order information for this income record.</span>` : ""}
        ${orderDetails}
      </article>
    `;
  }).join("") || "<p>No fund records yet.</p>";

  list.querySelectorAll("[data-fund-order]").forEach((card) => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".fund-order-details");
      details.classList.toggle("hidden");
    });
  });
}

function renderStock() {
  const list = document.querySelector("#stockList");
  list.innerHTML = products.map((product) => `
    <div class="stock-item">
      <div>
        <strong>${product.name}</strong>
        <span>${product.rolls} rolls per pack</span>
        <span class="${isSoldOut(product.id) ? "sold-out-text" : "in-stock-text"}">${isSoldOut(product.id) ? "Sold out" : "In stock"}</span>
      </div>
      <label>
        Total stock
        <input type="number" min="0" value="${stockCount(product.id)}" data-stock-id="${product.id}" aria-label="${product.name} stock">
      </label>
      <label class="stock-toggle">
        <input type="checkbox" data-stock-out="${product.id}" ${isSoldOut(product.id) ? "checked" : ""}>
        Out of stock
      </label>
      <button class="btn btn-secondary" type="button" data-stock-save="${product.id}">Save</button>
    </div>
  `).join("");

  list.querySelectorAll("[data-stock-save]").forEach((button) => {
    button.addEventListener("click", async () => {
      const productId = button.dataset.stockSave;
      const input = list.querySelector(`[data-stock-id="${productId}"]`);
      const outOfStock = list.querySelector(`[data-stock-out="${productId}"]`);
      state.stock[productId] = Math.max(0, Number(input.value || 0));
      state.outOfStock[productId] = Boolean(outOfStock.checked) || state.stock[productId] <= 0;
      if (serverMode) {
        try {
          const shared = await apiRequest("/api/admin-stock", {
            method: "POST",
            body: JSON.stringify({
              productId,
              stock: state.stock[productId],
              outOfStock: state.outOfStock[productId]
            })
          });
          mergeSharedState(shared);
        } catch (error) {
          const stockMessage = document.querySelector("#stockMessage");
          if (stockMessage) stockMessage.textContent = error.message;
          return;
        }
      }
      saveState();
      renderStock();
      renderProducts();
      const stockMessage = document.querySelector("#stockMessage");
      if (stockMessage) {
        stockMessage.textContent = `${productById(productId).name} stock saved: ${stockCount(productId)} pack(s), ${isSoldOut(productId) ? "Sold out" : "In stock"}.`;
      }
    });
  });
}

function renderOrders() {
  const table = document.querySelector("#ordersTable");
  table.innerHTML = state.orders.map((order) => `
    <tr>
      <td>
        <strong>${order.id}</strong><br>${new Date(order.createdAt).toLocaleDateString("en-ZA")}
        <label class="inline-date-label">
          Delivery date
          <input type="date" value="${order.deliveryDate || ""}" data-order-date="${order.id}">
        </label>
      </td>
      <td><strong>${order.customerName}</strong><br>${order.phone}</td>
      <td>${order.address}</td>
      <td>${order.paymentType}</td>
      <td>${formatOrderItems(order.items)}<br><strong>${order.rolls} rolls taken</strong></td>
      <td><strong>${money(order.total)}</strong><br><span>Delivery: ${money(order.deliveryFee || 0)}</span></td>
      <td>
        <select class="status-select" data-order-status="${order.id}">
          ${["New", "Packed", "Ready for Delivery", "Out for Delivery", "Delivered", "Paid", "Cancelled"].map((status) => `<option ${status === order.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td>
        <div class="receipt-actions">
          <button class="btn btn-secondary" type="button" data-receipt-download="${order.id}">Download PDF</button>
          <button class="btn btn-primary" type="button" data-receipt-send="${order.id}">Send PDF</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="8">No orders recorded yet.</td></tr>`;

  table.querySelectorAll("[data-order-status]").forEach((select) => {
    select.addEventListener("change", async () => {
      const order = state.orders.find((item) => item.id === select.dataset.orderStatus);
      order.status = select.value;
      if (serverMode) {
        try {
          const shared = await apiRequest("/api/admin-order-status", {
            method: "POST",
            body: JSON.stringify({ orderId: order.id, status: select.value })
          });
          mergeSharedState(shared);
        } catch (error) {
          const statusMessage = document.querySelector("#orderStatusMessage");
          if (statusMessage) statusMessage.textContent = error.message;
          return;
        }
      }
      saveState();
      renderPerformance();
      sendBuyerStatusMessage(order, select.value);
    });
  });

  table.querySelectorAll("[data-order-date]").forEach((input) => {
    input.addEventListener("change", async () => {
      const order = state.orders.find((item) => item.id === input.dataset.orderDate);
      order.deliveryDate = input.value;
      if (serverMode) {
        try {
          const shared = await apiRequest("/api/admin-order-delivery-date", {
            method: "POST",
            body: JSON.stringify({ orderId: order.id, deliveryDate: input.value })
          });
          mergeSharedState(shared);
        } catch (error) {
          const statusMessage = document.querySelector("#orderStatusMessage");
          if (statusMessage) statusMessage.textContent = error.message;
          return;
        }
      }
      saveState();
      const statusMessage = document.querySelector("#orderStatusMessage");
      if (statusMessage) statusMessage.textContent = `Delivery date saved for ${order.id}.`;
    });
  });

  table.querySelectorAll("[data-receipt-download]").forEach((button) => {
    button.addEventListener("click", () => downloadReceipt(button.dataset.receiptDownload));
  });

  table.querySelectorAll("[data-receipt-send]").forEach((button) => {
    button.addEventListener("click", () => sendReceipt(button.dataset.receiptSend));
  });
}

function formatOrderItems(items) {
  return items.map((item) => {
    const product = productById(item.productId);
    if (!product) return `${item.quantity} x Removed product`;
    return `${item.quantity} x ${product.name}`;
  }).join("<br>");
}

function buyerPhoneForLinks(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("27")) return digits;
  if (digits.startsWith("0")) return `27${digits.slice(1)}`;
  return digits;
}

function plainOrderItems(items) {
  return items.map((item) => {
    const product = productById(item.productId);
    return `${item.quantity} x ${product?.name || "Removed product"}`;
  }).join(", ");
}

function buyerStatusMessage(order, status) {
  const deliveryDate = order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString("en-ZA") : "to be confirmed";
  const templates = {
    Packed: `Hi ${order.customerName}, your LONAR'S order ${order.id} has been packed. Items: ${plainOrderItems(order.items)}. Total: ${money(order.total)}. Thank you for shopping with us.`,
    "Ready for Delivery": `Hi ${order.customerName}, your LONAR'S order ${order.id} is ready for delivery. Delivery date is ${deliveryDate}. Delivery address: ${order.address}. Thank you for shopping with LONAR'S.`,
    "Out for Delivery": `Hi ${order.customerName}, your LONAR'S order ${order.id} is out for delivery to: ${order.address}. Please keep your phone nearby. Thank you.`,
    Delivered: `Hi ${order.customerName}, your LONAR'S order ${order.id} has been delivered. Thank you for shopping with LONAR'S - Bringing the Comfort Home.`
  };

  return templates[status] || "";
}

function sendBuyerStatusMessage(order, status) {
  const message = buyerStatusMessage(order, status);
  if (!message) return;

  const phone = buyerPhoneForLinks(order.phone);
  const statusMessage = document.querySelector("#orderStatusMessage");
  const encodedMessage = encodeURIComponent(message);

  if (!phone) {
    if (statusMessage) statusMessage.textContent = `No buyer phone number found for ${order.id}.`;
    return;
  }

  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  const smsUrl = `sms:${phone}?body=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");

  if (statusMessage) {
    statusMessage.innerHTML = `${status} message opened for ${order.customerName}. If WhatsApp does not open, <a href="${smsUrl}">send SMS instead</a>.`;
  }
}

function receiptText(order) {
  const purchaseDate = new Date(order.createdAt).toLocaleString("en-ZA");
  const items = order.items.map((item) => {
    const product = productById(item.productId);
    const productName = product?.name || "Removed product";
    const lineTotal = product ? product.price * item.quantity : 0;
    return `- ${productName}\n  Quantity: ${item.quantity}\n  Line total: ${money(lineTotal)}`;
  }).join("\n");

  return [
    "LONAR'S",
    "Receipt",
    "",
    `Receipt number: ${order.id}`,
    `Customer: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Date of purchase: ${purchaseDate}`,
    `Type of payment: ${order.paymentType}`,
    `Delivery address: ${order.address}`,
    `Delivery fee: ${money(order.deliveryFee || 0)}`,
    "",
    "Items purchased:",
    items,
    "",
    `Total quantity: ${order.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)} pack(s)`,
    `Total rolls: ${order.rolls}`,
    `Total paid: ${money(order.total)}`,
    "",
    "Thank you for shopping with LONAR'S."
  ].join("\n");
}

function receiptFileName(order) {
  return `LONARS-receipt-${order.id}.pdf`;
}

function pdfEscape(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function wrapPdfLine(text, maxLength = 78) {
  const words = String(text).split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}

function receiptPdfLines(order) {
  const purchaseDate = new Date(order.createdAt).toLocaleDateString("en-ZA");
  const itemLines = order.items.flatMap((item) => {
    const product = productById(item.productId);
    const productName = product?.name || "Removed product";
    const lineTotal = product ? product.price * item.quantity : 0;
    return wrapPdfLine(`${productName} | Qty: ${item.quantity} | ${money(lineTotal)}`, 36);
  });

  return [
    "LONAR'S",
    "RECEIPT",
    "",
    `Receipt: ${order.id}`,
    `Date: ${purchaseDate}`,
    `Customer: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Payment: ${order.paymentType}`,
    `Delivery fee: ${money(order.deliveryFee || 0)}`,
    "",
    "Items:",
    ...itemLines.map((line) => `- ${line}`),
    "",
    `Packs: ${order.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)}`,
    `Rolls: ${order.rolls}`,
    `Delivery: ${money(order.deliveryFee || 0)}`,
    `TOTAL: ${money(order.total)}`,
    "",
    "Thank you for shopping with us."
  ];
}

function createReceiptPdfBlob(order) {
  const lines = receiptPdfLines(order);
  const purchaseDate = new Date(order.createdAt).toLocaleDateString("en-ZA");
  const pageWidth = 250;
  const pageHeight = Math.max(430, 160 + (lines.length * 13));
  const margin = 18;
  const lineHeight = 13;
  let y = pageHeight - margin;

  const streamLines = [
    "0.93 0.93 0.93 rg",
    `0 0 ${pageWidth} ${pageHeight} re f`,
    "1 1 1 rg",
    `${margin - 6} ${margin - 6} ${pageWidth - (margin * 2) + 12} ${pageHeight - (margin * 2) + 12} re f`,
    "0 0 0 rg",
    "BT",
    "/F1 10 Tf"
  ];
  lines.forEach((line, index) => {
    const isTitle = index === 0;
    const isSubtitle = index === 1;
    const fontSize = isTitle ? 18 : isSubtitle ? 12 : 9;

    if (isTitle || isSubtitle) {
      streamLines.push(`/F1 ${fontSize} Tf`);
    } else {
      streamLines.push("/F1 11 Tf");
    }

    const isCenteredDate = line.startsWith("Date:");
    const textX = isCenteredDate ? Math.max(margin, (pageWidth - (line.length * fontSize * 0.5)) / 2) : margin;
    streamLines.push(`1 0 0 1 ${textX} ${y} Tm (${pdfEscape(line)}) Tj`);
    y -= isTitle ? 22 : isSubtitle ? 18 : lineHeight;
  });
  streamLines.push("ET");
  streamLines.push("0.106 0 0.224 RG");
  streamLines.push(`${margin} ${margin + 8} ${pageWidth - (margin * 2)} 62 re S`);
  streamLines.push("BT");
  streamLines.push("/F1 9 Tf");
  streamLines.push(`1 0 0 1 ${margin + 12} ${margin + 52} Tm (${pdfEscape("COMPANY STAMP")}) Tj`);
  streamLines.push("/F1 12 Tf");
  streamLines.push(`1 0 0 1 ${margin + 12} ${margin + 35} Tm (${pdfEscape("LONAR'S")}) Tj`);
  streamLines.push("/F1 8 Tf");
  streamLines.push(`1 0 0 1 ${margin + 12} ${margin + 22} Tm (${pdfEscape(`Date: ${purchaseDate}`)}) Tj`);
  streamLines.push(`1 0 0 1 ${margin + 12} ${margin + 10} Tm (${pdfEscape("Bringing the Comfort Home")}) Tj`);
  streamLines.push("ET");

  const stream = streamLines.join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function downloadReceipt(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  const blob = createReceiptPdfBlob(order);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = receiptFileName(order);
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 30000);
}

async function sendReceipt(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;

  const text = receiptText(order);
  const title = `LONAR'S receipt ${order.id}`;
  const file = new File([createReceiptPdfBlob(order)], receiptFileName(order), { type: "application/pdf" });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ title, text, files: [file] });
      return;
    } catch {
      return;
    }
  }

  downloadReceipt(orderId);
  const subject = encodeURIComponent(title);
  const body = encodeURIComponent(`${text}\n\nA PDF receipt has been downloaded. Attach it to this email before sending.`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function renderPerformance() {
  const orderCount = state.orders.length;
  const total = state.orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const productTotals = {};
  const paymentTotals = {};

  state.orders.forEach((order) => {
    paymentTotals[order.paymentType] = (paymentTotals[order.paymentType] || 0) + 1;
    order.items.forEach((item) => {
      productTotals[item.productId] = (productTotals[item.productId] || 0) + item.quantity;
    });
  });

  const bestProductId = Object.entries(productTotals).sort((a, b) => b[1] - a[1])[0]?.[0];
  const paymentText = Object.entries(paymentTotals).map(([type, count]) => `${type}: ${count}`).join(" | ");

  document.querySelector("#perfOrders").textContent = orderCount;
  document.querySelector("#perfAverage").textContent = money(orderCount ? total / orderCount : 0);
  document.querySelector("#perfBest").textContent = bestProductId ? productById(bestProductId)?.name || "Removed product" : "None yet";
  document.querySelector("#perfPayments").textContent = paymentText || "No payments yet";
}

function renderMonthlyChart() {
  const chart = document.querySelector("#monthlyChart");
  if (!chart) return;

  const year = new Date().getFullYear();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthlyTotals = Array(12).fill(0);

  state.funds.filter((fund) => fund.type === "income").forEach((fund) => {
    const date = new Date(fund.createdAt);
    if (date.getFullYear() === year) {
      monthlyTotals[date.getMonth()] += Number(fund.amount || 0);
    }
  });

  const maxTotal = Math.max(...monthlyTotals, 1);
  const yearLabel = document.querySelector("#chartYear");
  if (yearLabel) yearLabel.textContent = `${year}`;

  chart.innerHTML = monthlyTotals.map((total, index) => `
    <div class="bar-column">
      <div class="bar-value">${money(total)}</div>
      <div class="bar-track">
        <div class="bar-fill" style="height: ${Math.max(4, (total / maxTotal) * 100)}%"></div>
      </div>
      <strong>${monthNames[index]}</strong>
    </div>
  `).join("");
}

async function handleFundSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  if (serverMode) {
    try {
      const shared = await apiRequest("/api/admin-fund", {
        method: "POST",
        body: JSON.stringify({
          amount: Number(formData.get("amount")),
          note: formData.get("note").trim()
        })
      });
      mergeSharedState(shared);
      event.currentTarget.reset();
      renderDashboard();
      return;
    } catch (error) {
      const message = document.querySelector("#loginMessage") || document.querySelector("#stockMessage");
      if (message) message.textContent = error.message;
      return;
    }
  }

  state.funds.unshift({
    id: crypto.randomUUID(),
    type: "expense",
    amount: Number(formData.get("amount")),
    note: formData.get("note").trim(),
    createdAt: new Date().toISOString()
  });
  saveState();
  event.currentTarget.reset();
  renderDashboard();
}

function exportOrdersCsv() {
  const header = ["Order ID", "Date", "Customer", "Phone", "Delivery Address", "Payment Type", "Items", "Rolls Taken", "Delivery Fee", "Total", "Status"];
  const rows = state.orders.map((order) => [
    order.id,
    new Date(order.createdAt).toLocaleString("en-ZA"),
    order.customerName,
    order.phone,
    order.address,
    order.paymentType,
    order.items.map((item) => `${item.quantity} x ${productById(item.productId)?.name || "Removed product"}`).join("; "),
    order.rolls,
    order.deliveryFee || 0,
    order.total,
    order.status
  ]);
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "lornas-soft-comfort-orders.csv";
  link.click();
  URL.revokeObjectURL(url);
}

async function clearRecords() {
  if (!confirm("Clear all saved demo orders, funds and stock changes?")) return;
  if (serverMode) {
    try {
      const shared = await apiRequest("/api/admin-clear", { method: "POST" });
      mergeSharedState(shared);
      renderDashboard();
      return;
    } catch (error) {
      const statusMessage = document.querySelector("#orderStatusMessage");
      if (statusMessage) statusMessage.textContent = error.message;
      return;
    }
  }

  state = { orders: [], funds: [], stock: Object.fromEntries(products.map((product) => [product.id, product.startingStock])), outOfStock: {} };
  saveState();
  renderDashboard();
}

function bindDeliveryFeeUpdater() {
  const address = document.querySelector('[name="address"]');
  if (!address) return;

  address.addEventListener("input", updateOrderTotal);
  updateDeliveryFeeDisplay();
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadSharedPublicState();
  await unlockAdminFromSavedSession();
  renderProducts();
  renderLegacyOrderItems();
  renderBasket();
  updateBasketCount();
  bindDeliveryFeeUpdater();
  updateOrderTotal();

  const orderForm = document.querySelector("#orderForm");
  if (orderForm) orderForm.addEventListener("submit", handleOrderSubmit);

  const loginBtn = document.querySelector("#loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", loginAdmin);

  const adminPassword = document.querySelector("#adminPassword");
  if (adminPassword) {
    adminPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") loginAdmin();
    });
  }

  const fundForm = document.querySelector("#fundForm");
  if (fundForm) fundForm.addEventListener("submit", handleFundSubmit);

  const exportBtn = document.querySelector("#exportBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportOrdersCsv);

  const clearDemoBtn = document.querySelector("#clearDemoBtn");
  if (clearDemoBtn) clearDemoBtn.addEventListener("click", clearRecords);
});
