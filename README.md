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

When you run or deploy the included Node server, stock, orders, funds and admin changes are saved in `data-store.json` so the public website and admin portal share the same information.

The admin dashboard records:

- Shopping basket checkout orders
- Full tissue price list from 4-pack to 48-pack
- Customer orders
- Tissue pack quantities and rolls taken
- Delivery address
- Payment type: EFT, Card Payment, or Cash on Delivery
- Income received
- Expenses paid
- Net funds
- Product stock
- Order status
- Exportable order CSV

When deployed with the Node server, new public checkout orders are saved to the shared admin dashboard. The admin page also refreshes every 15 seconds after login so new public orders appear without manually refreshing.

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

Use a Node hosting service such as Render or Railway, not static-only hosting, if you want shared stock and protected admin to work online.

Start command:

```text
npm start
```

Optional environment variable:

```text
ADMIN_PASSWORD=your-private-password
```
