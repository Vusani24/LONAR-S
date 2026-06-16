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

This version stores records in the browser using local storage. For a live public website, admin login and order records should be moved to a secure backend database.
