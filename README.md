# Broadcast Info

A modern, responsive dashboard for monitoring and managing broadcasting-related information. Built with **React**, **TypeScript**, and **Vite**, the project leverages **Tailwind CSS** for styling and **shadcn/ui** (Radix UI primitives) for a fast, accessible component set.

---

## ✨ Features

- ⚡ **Vite** – lightning-fast development server & build step
- 📜 **TypeScript** – type-safe React components
- 🎨 **Tailwind CSS** – utility-first styling with first-class dark-mode support
- 🧩 **shadcn/ui** & **Radix UI** – accessible, unstyled primitives composed into beautiful UI components
- 🔀 **React Router v6** – client-side routing
- 📦 **TanStack Query** – data-fetching & caching (placeholder setup)
- 📊 **Recharts** – composable charts for data visualisation
- ✅ **React-Hook-Form** + **Zod** – form management & schema validation
- 🛠 **ESLint** & **Prettier** – consistent code quality & formatting

> The project structure and component set are a great starting point for any dashboard-style application.

---

## 🏁 Getting Started

> Make sure you have **Node >= 18** and **npm >= 9** (or **pnpm**/**yarn**) installed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/broadcast-info.git
   cd broadcast-info
   ```

2. **Install dependencies**

   ```bash
   # npm
   npm install

   # or yarn
   yarn

   # or pnpm
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at **http://localhost:5173** (or the next free port) and supports hot-module reloading.

4. **Build for production**

   ```bash
   npm run build
   ```

   The output is generated in the `dist/` folder.

5. **Preview the production build locally**

   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
├─ public/              # Static assets copied as-is
├─ src/
│  ├─ components/       # Reusable UI & layout components
│  │  ├─ landing/       # Landing page sections
│  │  ├─ ui/            # shadcn/ui components (generated + tweaked)
│  │  ├─ theme-provider.tsx  # Dark/light theme context
│  │  └─ theme-toggle.tsx    # Theme toggle button
│  ├─ hooks/            # Custom React hooks
│  ├─ lib/              # Shared helpers & utilities
│  ├─ pages/            # Route-level components (Dashboard, Settings…)
│  ├─ App.tsx           # App shell & router outlet
│  ├─ main.tsx          # Entry point
│  └─ index.css         # Tailwind directives
├─ index.html           # Vite HTML template
└─ vite.config.ts       # Vite configuration
```

---

## 💻 Useful Scripts (package.json)

| Script         | Description                                  |
| -------------- | -------------------------------------------- |
| `dev`          | Start Vite dev server with HMR               |
| `build`        | Build production bundle                      |
| `build:dev`    | Production build but in *development* mode   |
| `preview`      | Preview the production build locally         |
| `lint`         | Run ESLint on the entire codebase            |

---

## 🌐 Deployment

The output folder `dist/` is fully static. You can deploy it on any static hosting service such as **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**, or your own nginx/apache server.

---

## 🤝 Contributing

1. Fork the repository & create your feature branch:
   ```bash
   git checkout -b feat/amazing-feature
   ```
2. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/) guidelines.
3. Push to the branch and open a Pull Request.

All contributions, feedback, and suggestions are welcome! ❤️

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
