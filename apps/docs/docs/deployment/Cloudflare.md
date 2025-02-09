---
title: "Cloudflare"
description: "A step-by-step guide to deploying a Hono app using Wrangler on Cloudflare Workers."
---

# Deploying a Hono Wrangler App to Cloudflare

## 📌 Introduction
This guide provides step-by-step instructions on how to deploy a **Hono** application using **Wrangler** to **Cloudflare Workers**. **Hono** is a lightweight and high-performance framework for building APIs on the edge, making it an ideal choice for Cloudflare Workers.

---

## ⚙️ Prerequisites

Before proceeding, ensure you have the following:
- **Node.js** installed (`>=16.13.0` recommended)
- **Wrangler CLI** installed (`npm install -g wrangler`)
- A **Cloudflare account** with API access

---

## 🔧 Setting Up Wrangler

1. **Login to Cloudflare**:
   ```sh
   wrangler login
   ```
   This command opens a browser window for authentication with your Cloudflare account.

## 🚀 Deploying to Cloudflare
1. **Ensure You Are Logged In**:
   ```sh
   wrangler whoami
   ```
   This should display your Cloudflare account details.

2. **Publish the App**:
   ```sh
   npm run deploy
   ```
   Once deployed, you will receive a **Cloudflare Workers URL**:
   ```
   https://my-hono-app.my-cloudflare-account.workers.dev/
   ```

3. **Test Your API**:
   ```sh
   curl https://my-hono-app.my-cloudflare-account.workers.dev/api
   ```

---

## 🎯 Conclusion
By deploying a **Hono app using Wrangler** on **Cloudflare Workers**, you get a **fast, scalable, and globally distributed API** with minimal configuration.

📖 **For more details, refer to the official documentation:**
- [Hono Documentation](https://hono.dev/)
- [Cloudflare Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
