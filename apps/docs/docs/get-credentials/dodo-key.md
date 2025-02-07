---
title: "Dodo Payments"
description: "A guide to obtaining API keys, webhook secret keys, and product IDs from Dodo Payments."
---

# Dodo Payments API Keys and Webhooks

## 📌 Introduction
This guide explains how to retrieve your **API Key**, **Webhook Secret Key**, and **Product IDs** from **Dodo Payments**. These credentials are essential for integrating Dodo Payments into your application.

---

## 🔑 Obtaining the API Key

1. **Log in to the Dodo Payments Dashboard**:
   - Access the dashboard using your merchant credentials.

2. **Navigate to API Keys**:
   - Click on the **Developer** tab.
   - Select **API Keys** from the dropped menu.

3. **Generate or Retrieve Your API Key**:
   - If you haven't generated an API key yet, click on **Add API Key**.
   - Once generated, your API key will be displayed, copy and paste in  .

🚨 **Important**: Store this key securely, as it will be used to authenticate your API requests.

---

## 🔄 Setting Up Webhooks and Obtaining the Webhook Secret Key

1. **Navigate to Webhook tab**:
   - In the dashboard, go to **Developer**.
   - Select **Webhooks**.

2. **Add a New Webhook Endpoint**:
   - Click on **Add Webhook**.
   - Enter the **URL of your server** where you want to receive webhook events.

3. **Retrieve the Webhook Secret Key**:
   - After setting up the webhook, you'll see a **Webhook Secret Key** associated with your endpoint, add it to your environment variable.

🚨 **Important**: This secret key is crucial for verifying the authenticity of incoming webhooks.

---

## 🏷️ Creating the products

1. **Navigate to Products**:
   - In the dashboard, click on the **Products** tab.

2. **Create the 3 products**:
   - Click on **Add Product**.
   - Fill Product Name(Small pack), product description, product image, tax category Saas, Pricing type (Single payment), price, discount applicable, tax inclusive pricing ticked on and then add the product.
   - Copy the product id and fill the small pack product id environment variable.
   - Do the same to get medium and large product id and fill environment variables.

---

## ⚠️ Security Best Practices
- Ensure that all **keys and IDs** are stored securely and are not exposed publicly.
- Regularly **rotate your API keys** and update your webhook secret keys to maintain security.

📖 **For more detailed information**, refer to the [Dodo Payments Documentation](https://docs.dodopayments.com/).