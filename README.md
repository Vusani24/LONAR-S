# LONAR'S Website

New standalone website for LONAR'S.

## Open the site

Open `index.html` directly in a browser, or run:

```powershell
node server.js
```

Then visit:

```text
http://localhost:3201
```

Admin portal:

```text
http://localhost:3201/admin.html
```

Basket and checkout page:

```text
http://localhost:3201/basket.html
```

## Admin

Admin section password:

```text
Olona1995@
```

When you run or deploy the included Node server, stock, orders, funds and admin changes are shared between the public website and admin portal.

If `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set, records are saved in Supabase. If those variables are missing, the site falls back to `data-store.json` for local testing.

The admin dashboard records:

- Shopping basket checkout orders
- Full tissue price list from 4-pack to 48-pack
- Customer orders
- Tissue pack quantities and rolls taken
- Delivery address
- Delivery fee calculated by zone
- Admin-selected delivery date per order
- Payment type: EFT, Card Payment, or Cash on Delivery
- Income received
- Expenses paid
- Net funds
- Product stock
- Order status
- Exportable order CSV

When deployed with the Node server, new public checkout orders are saved to the shared admin dashboard. The admin page also refreshes every 15 seconds after login so new public orders appear without manually refreshing.

Customers do not choose a delivery date during checkout. Admin sets the delivery date on each order, then the Ready for Delivery message includes that selected date.

## New order notifications

The server can notify you when a customer checks out. Add the environment variables for the notification method you want to use.

For SMS with Twilio:

```text
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_FROM_SMS=your_twilio_sms_number
TWILIO_TO_SMS=+27603481157
```

For WhatsApp with Twilio:

```text
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_FROM_WHATSAPP=whatsapp:+14155238886
TWILIO_TO_WHATSAPP=whatsapp:+27607918384
```

For email with Resend:

```text
RESEND_API_KEY=your_resend_api_key
ORDER_EMAIL_FROM=orders@yourdomain.com
ORDER_EMAIL_TO=Lonarsoftcomfort@outlook.com
```

For Make, Zapier, or another automation service:

```text
ORDER_WEBHOOK_URL=https://your-webhook-url
```

If no notification provider is configured, the server still logs every new order in the hosting logs.

## Deployment

Deploy the whole folder, including:

- `index.html`
- `basket.html`
- `admin.html`
- `styles.css`
- `app.js`
- `server.js`
- `package.json`
- `data-store.json`
- `assets`

Use a Node hosting service such as Render or Railway, not static-only hosting, if you want shared stock, Supabase, protected admin and notifications to work online.

Start command:

```text
npm start
```

Required environment variables for live Supabase use:

```text
SUPABASE_URL=https://jlelodxifadnzxtctfdr.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-sb-secret-key
ADMIN_PASSWORD=your-private-admin-password
```

Keep `SUPABASE_SERVICE_ROLE_KEY` private. Do not put it inside `app.js`, `index.html`, or anywhere public.
