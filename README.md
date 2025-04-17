# 🛠️ AI Toolbox

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/fayinana/ai-toolbox/pulls)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

**AI Toolbox** is a curated suite of AI-powered tools designed to supercharge productivity, creativity, and problem-solving. Built with modern web technologies, it offers a seamless experience for developers, designers, and AI enthusiasts.

![AI Toolbox Preview](/public/favicon.png) <!-- Replace with your actual screenshot or screen recording -->

---

## 🌟 Key Features

- **🚀 AI-Powered Tools**: Text generation, summarization, code assistance, and more
- **🎨 Responsive UI**: Sleek, mobile-friendly interface with **Tailwind CSS**
- **🌓 Dark/Light Mode**: Toggle between themes for comfortable usage
- **⚡ Fast Performance**: Optimized with Next.js for blazing-fast loads
- **🧪 Tested & Reliable**: Full test coverage with Jest + React Testing Library
- **🔌 Extensible Architecture**: Easily add new tools via modular components

---

## 🛠️ Tech Stack

| Category         | Technology                                                                         |
| ---------------- | ---------------------------------------------------------------------------------- |
| Framework        | [Next.js 14](https://nextjs.org/) (App Router)                                     |
| Styling          | [Tailwind CSS](https://tailwindcss.com/) + CSS Animations                          |
| State Management | React Context API + Custom Hooks                                                   |
| Testing          | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |
| Icons            | [Lucide Icons](https://lucide.dev/)                                                |
| Deployment       | Vercel                                                                             |

---

## 🚀 Quick Start

### Prerequisites

- Node.js `v18+`
- npm `v9+` or yarn

### Installation

```bash
git clone https://github.com/fayinana/ai-toolbox.git
cd ai-toolbox
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

```bash
npm test           # Unit tests
npm run test:cov   # Test coverage report
```

### Building for Production

```bash
npm run build
```

---

## 📂 Project Structure

```
ai-toolbox/
├── app/                    # Next.js 14+ app directory
│   ├── toolbox/            # Public routes
            |[tool]/        # s chat page
│   ├── api/                # API routes
├── components/             # Reusable UI components
├── public/                 # Static assets
├── data/                   # Static data
│── lib/                    # Shared utilities
│── hook/                   # custom hooks
├── styles/                 # Global CSS/Tailwind config
├── tests/                  # Jest tests
├── next.config.js          # Next.js settings
└── package.json
```

---

## 🤝 How to Contribute

We love contributions! Here's how to help:

1. **Fork** the repo and create a branch (`git checkout -b feature/your-feature`)
2. **Commit** your changes (`git commit -m 'Add amazing feature'`)
3. **Push** to the branch (`git push origin feature/your-feature`)
4. Open a **Pull Request**

For major changes, please open an **issue first** to discuss.

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

---
