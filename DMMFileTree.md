daily-medicine-magazine/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── _config.yml
├── index.html                     # Homepage
├── about.md
├── subscribe/                     # 🆕 Subscription flow
│   ├── index.html                 # Public subscription page (pricing + form)
│   ├── success.html               # Post-subscription thank-you
│   └── cancel.html                # Optional: canceled/failed payments
├── whitepaper/
│   └── issue-0.5/
│       ├── index.md
│       └── assets/
│           └── cover.jpg
├── _includes/
├── _layouts/
│   ├── default.html
│   └── issue.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── subscribe.js           # JS for interacting with Stripe or Gumroad
│   │   ├── dashboard.js
│   │   └── fetch-issues.js
│   └── images/
├── _data/
│   └── issues.yml
├── admin/
│   ├── index.html
│   └── dashboard.js
├── owner/
│   ├── index.html
│   ├── upload.html
│   └── pipeline/
│       └── process.js
├── api/                           # Optional: serverless function proxies
│   └── subscriptions/
│       ├── create.js              # Stripe session handler
│       └── webhook.js             # Stripe webhook for subscription events
├── netlify.toml / vercel.json
└── README.md
