---
title: "Deploying Next.js and Docusaurus Apps from Turborepo to Vercel"
description: "A step-by-step guide to deploying Next.js and Docusaurus applications from a Turborepo monorepo to Vercel."
---

# Deploying Next.js and Docusaurus Apps from Turborepo to Vercel

## 📌 Introduction
This guide provides step-by-step instructions on how to deploy **Next.js** and **Docusaurus** applications from a **Turborepo monorepo** to **Vercel**. **Turborepo** optimizes monorepo management, and **Vercel** provides seamless deployment for frontend applications.

---

## 🚀 Prerequisites

Before deploying, ensure you have:
- **Node.js** installed (`>=16.13.0` recommended)
- **Turborepo setup** with Next.js and Docusaurus apps
- **Vercel CLI** installed (`npm install -g vercel`)
- A **Vercel account**

---

## 🔧 Configuring Your Turborepo for Deployment

### **1️⃣ Setting Up Vercel in Your Turborepo**

1. **Login to Vercel**:
   ```sh
   vercel login
   ```
   This command will open a browser window for authentication with your Vercel account.

2. **Initialize the Project with Vercel**:
   ```sh
   vercel init
   ```
   Follow the prompts to link your monorepo to your Vercel account.

3. **Modify the `turbo.json` File**:
   Ensure `turbo.json` contains the following configuration:
   ```json
   {
     "pipeline": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": [".next/**", "build/**"]
       },
       "dev": {
         "cache": false
       }
     }
   }
   ```

---

## 🌍 Deploying the **Next.js App**

### **1️⃣ Navigate to the Next.js App Directory**
```sh
cd apps/nextjs-app
```

### **2️⃣ Deploy Using Vercel CLI**
```sh
vercel --prod
```
- Vercel will automatically detect the **Next.js framework** and configure the build settings.
- Upon successful deployment, a production URL will be provided.

### **3️⃣ Test Your Deployment**
Verify your deployment by opening the generated Vercel URL in your browser.

---

## 🌍 Deploying the **Docusaurus App**

### **1️⃣ Navigate to the Docusaurus App Directory**
```sh
cd apps/docusaurus-app
```

### **2️⃣ Modify `vercel.json` for Docusaurus**
Create a `vercel.json` file in the Docusaurus app directory with the following content:
```json
{
  "rewrites": [{ "source": "(.*)", "destination": "/index.html" }],
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}
```

### **3️⃣ Deploy Using Vercel CLI**
```sh
vercel --prod
```
- Vercel will automatically detect the **static site** and configure the deployment.

### **4️⃣ Test Your Deployment**
Verify your deployment by opening the generated Vercel URL in your browser.

---

## 🎯 Conclusion
By deploying **Next.js** and **Docusaurus** applications from a **Turborepo monorepo** to **Vercel**, you achieve **fast, efficient, and scalable deployments** with minimal configuration.

📖 **For more details, refer to the official documentation:**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Docusaurus Documentation](https://docusaurus.io/docs/)
