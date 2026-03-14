<p align="center">
  <br />
  <br />
</p>

<h1 align="center">
  <pre>
   ██████╗ ██████╗ ██████╗ ███████╗██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
  ██╔════╝██╔═══██╗██╔══██╗██╔════╝██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
  ██║     ██║   ██║██║  ██║█████╗  ██║   ██║███████║██║   ██║██║     ██║
  ██║     ██║   ██║██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║
  ╚██████╗╚██████╔╝██████╔╝███████╗ ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║
   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝
  </pre>
</h1>

<p align="center">
  <strong>Your marketplace for premium code projects.</strong>
  <br />
  <em>Dein Marketplace fur hochwertige Code-Projekte.</em>
</p>

<p align="center">
  <a href="https://github.com/schwarz-svg/Idea-factory/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/version-1.0.0-purple.svg" alt="Version 1.0.0" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/stars/schwarz-svg/Idea-factory?style=social" alt="Stars" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/deploy-vercel-black.svg?logo=vercel" alt="Deploy on Vercel" />
  </a>
</p>

<p align="center">
  <a href="#-features">Features</a> &middot;
  <a href="#-quick-start">Quick Start</a> &middot;
  <a href="#-tech-stack">Tech Stack</a> &middot;
  <a href="#-contributing">Contributing</a> &middot;
  <a href="#-roadmap">Roadmap</a>
</p>

---

## 📸 Screenshots

<p align="center">
  <em>Screenshots coming soon &mdash; the UI features a sleek dark theme with purple/blue accent gradients.</em>
</p>

<!--
  Add screenshots here:
  ![Homepage](docs/screenshots/homepage.png)
  ![Project Detail](docs/screenshots/detail.png)
  ![Cart](docs/screenshots/cart.png)
-->

---

## ✨ Features

- 🛒 **Full Marketplace Experience** &mdash; Browse, search, filter, and add code projects to a shopping cart
- 🔍 **Real-time Search** &mdash; Instant search across project titles, descriptions, tags, authors, and frameworks with `Ctrl+K` shortcut
- 🏷️ **Advanced Filtering** &mdash; Filter by category, price range, rating, and language/framework tags
- 📊 **Smart Sorting** &mdash; Sort by featured, newest, price, rating, or download count
- 🌙 **Dark Theme** &mdash; Polished dark UI with purple/blue gradient accents and smooth animations
- 📱 **Fully Responsive** &mdash; Optimized for desktop, tablet, and mobile devices
- 🧺 **Shopping Cart** &mdash; Slide-out cart sidebar with add/remove functionality and checkout flow
- 📖 **Project Detail Modal** &mdash; Rich project pages with descriptions, README preview, author info, and screenshots
- ⚡ **Zero Dependencies** &mdash; Pure HTML, CSS, and JavaScript &mdash; no frameworks, no build step
- ♿ **Accessible** &mdash; Keyboard navigation, focus management, and semantic HTML
- 🇩🇪 **German UI** &mdash; The entire user interface is in German (Deutsch)

---

## 🛠️ Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Markup     | HTML5 (semantic, accessible)                 |
| Styling    | CSS3 (custom properties, grid, flexbox)      |
| Logic      | Vanilla JavaScript (ES6+)                    |
| Fonts      | Inter (Google Fonts)                         |
| Deployment | Vercel / any static host                     |
| Tooling    | None required &mdash; zero build step        |

---

## 🚀 Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A local HTTP server (optional, for development)

### Installation

```bash
# Clone the repository
git clone https://github.com/schwarz-svg/Idea-factory.git
cd Idea-factory

# Option 1: Open directly in your browser
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux

# Option 2: Use a local dev server (recommended)
npx live-server

# Option 3: Use the npm scripts
npm install
npm start
```

The app will be available at `http://localhost:8080` (or whichever port your server uses).

---

## 📁 Project Structure

```
Idea-factory/
├── index.html                          # Entry point (SPA)
├── package.json                        # Project metadata & scripts
├── vercel.json                         # Vercel deployment config
├── LICENSE                             # MIT License
├── CONTRIBUTING.md                     # Contribution guidelines
├── CODE_OF_CONDUCT.md                  # Contributor Covenant
├── SECURITY.md                         # Security policy
├── CHANGELOG.md                        # Version history
├── src/
│   ├── css/
│   │   └── styles.css                  # All styles (dark theme)
│   ├── js/
│   │   └── app.js                      # Application logic & data
│   └── assets/
│       └── images/                     # Image assets
├── docs/
│   └── ARCHITECTURE.md                 # Architecture overview
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md        # PR template
    └── ISSUE_TEMPLATE/
        ├── bug_report.md               # Bug report template
        └── feature_request.md          # Feature request template
```

---

## 🤝 Contributing

Contributions are what make the open-source community great. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🗺️ Roadmap

- [ ] 🌍 **Internationalization (i18n)** &mdash; Add English language toggle alongside the German UI
- [ ] 🔐 **User Authentication** &mdash; Sign up, log in, and manage purchased projects
- [ ] 💳 **Payment Integration** &mdash; Stripe/PayPal checkout for real transactions
- [ ] 📤 **Seller Dashboard** &mdash; Allow developers to upload and sell their own code projects
- [ ] 🌓 **Light/Dark Theme Toggle** &mdash; User-selectable theme preference
- [ ] 🔔 **Notifications** &mdash; In-app notifications for new projects and updates
- [ ] ⭐ **User Reviews** &mdash; Allow buyers to leave ratings and written reviews
- [ ] 📦 **Backend API** &mdash; Migrate demo data to a real database with REST/GraphQL endpoints
- [ ] 🧪 **Testing** &mdash; Add unit and end-to-end tests
- [ ] 📊 **Analytics Dashboard** &mdash; Seller analytics for downloads, revenue, and traffic

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 👥 Authors

- **schwarz-svg** &mdash; Creator & Lead Developer &mdash; [@schwarz-svg](https://github.com/schwarz-svg)
- **rockywuest** &mdash; Co-Developer &mdash; [@rockywuest](https://github.com/rockywuest)

---

<p align="center">
  Made with ❤️ in Germany
  <br />
  <sub>Built with vanilla HTML, CSS &amp; JavaScript &mdash; no frameworks needed.</sub>
</p>
