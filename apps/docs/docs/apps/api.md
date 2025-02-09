---
title: "api"
description: "A guide on setting up and deploying APIs using Hono with Wrangler on Cloudflare Workers."
---

# Wrangler + Hono for API Development & Deployment on Cloudflare

## 📌 Introduction
[Hono](https://hono.dev/) is a lightweight, high-performance web framework designed for modern edge environments, including Cloudflare Workers. It offers a fast and minimalistic approach to building APIs with a great developer experience. [Wrangler](https://developers.cloudflare.com/workers/wrangler/) is the official Cloudflare CLI tool for deploying and managing Cloudflare Workers.

This guide covers the installation, usage, and deployment process of a Hono-based API using Wrangler on Cloudflare Workers.

## 🚀 Why Use Hono & Wrangler for APIs?
- **Lightweight & Fast**: Hono is optimized for edge computing, providing ultra-fast performance.
- **Built-in TypeScript Support**: Great for full-stack developers who prefer a type-safe environment.
- **Minimal Dependencies**: Small bundle size makes it ideal for Cloudflare Workers.
- **Efficient Edge Deployment**: Deploying with Wrangler makes it seamless to run APIs on Cloudflare's global network.
- **Free Calls**: Around 1 million free api requests per month.


## 📜 Creating a Simple API with Hono
Edit the `src/index.ts` file (or `index.js` if using JavaScript) and set up a simple Hono API:

```ts
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, Hono on Cloudflare!'));
app.get('/api', (c) => c.json({ message: 'API running on Cloudflare Workers!' }));

export default app;
```
---

## 🏗 Running Locally with Wrangler
To test your API locally:
```sh
npm run dev
```

---

## 🌍 Deploying to Cloudflare Workers
1️⃣ **Authenticate with Cloudflare** (first-time setup):
```sh
wrangler login
```

2️⃣ **Publish your API to Cloudflare**:
```sh
npm run deploy
```

Once deployed, you will get a URL like:
```
https://my-hono-api.my-cloudflare-account.workers.dev/
```
Access your API via:
```sh
curl https://my-hono-api.my-cloudflare-account.workers.dev/api
```

---

## 🎯 Conclusion
By leveraging **Hono** and **Wrangler**, you get a **lightweight, scalable, and globally distributed API** with minimal configuration. This setup is perfect for edge computing and serverless environments like Cloudflare Workers.

For further reading, check out:
- [Hono Documentation](https://hono.dev/)
- [Cloudflare Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)

Happy coding! 🚀