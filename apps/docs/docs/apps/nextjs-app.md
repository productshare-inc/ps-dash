---
title: "nextjs-app"
description: "A guide to integrating Next.js into a Turborepo monorepo for scalable web applications."
---

# Setting Up Next.js in Turborepo

## 📌 Introduction
[Next.js](https://nextjs.org/) is a powerful React framework that enables server-side rendering, static site generation, and API routes. When used within a **Turborepo** monorepo, it allows for efficient, modular, and scalable web application development.

This guide covers the installation, usage, and deployment of a **Next.js application** inside a **Turborepo** setup.

## 🚀 Why Use Next.js in a Turborepo?
- **Efficient Code Sharing**: Share components, utilities, and configurations across multiple apps.
- **Faster Builds**: Utilize Turborepo caching for optimized performance.
- **Microfrontend Ready**: Manage multiple frontend apps within a single monorepo.
- **Optimized Deployment**: Easily deploy with Vercel, Cloudflare, or other cloud platforms.

---

## ⚙️ Installing Next.js in Turborepo

### 1️⃣ Navigate to Your Turborepo Project
Ensure you are inside your **Turborepo** workspace:
```sh
cd my-turborepo
```

For TypeScript support:
```sh
npx create-next-app@latest nextjs-app --typescript
```

### 3️⃣ Install Dependencies
Move into the `nextjs-app` directory and install dependencies:
```sh
cd nextjs-app
npm install
```


This ensures that Next.js builds are properly cached within the monorepo structure.

---

## 📜 Running the Next.js App Locally
To start the Next.js development server, run:
```sh
npm run dev
```
Visit `http://localhost:3000/` to see your application in action.

To test it inside the monorepo, run from the root:
```sh
turbo dev --filter=nextjs-app
```

---

## 🎯 Conclusion
Using **Next.js** inside a **Turborepo** allows for an efficient and scalable web development workflow. The monorepo approach ensures shared dependencies, faster builds, and better modularization.

For further reading:
- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Cloudflare Pages Guide](https://developers.cloudflare.com/pages/)

Happy coding! 🚀
