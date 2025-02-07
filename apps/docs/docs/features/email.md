---
title: "Email"
description: "A guide to integrating an email package with React Email and Resend inside a Turborepo monorepo."
---

# Setting Up an Email Package in Turborepo

## 📌 Introduction
This guide covers setting up an **Email package** within a **Turborepo monorepo** that integrates email templates using:
- **React Email** for component-based email templates.
- **Resend** for sending transactional emails.

Using **Turborepo**, you can efficiently manage email-related utilities as a shared package while keeping dependencies modular and scalable.

## 🚀 Why Use an Email Package in Turborepo?
- **Code Reusability**: Centralize email templates across multiple apps.
- **Consistent Branding**: Ensure uniform email design using React components.
- **Scalability**: Easily extend and update email templates.

---

Ensure your **.env** file includes:

```env
RESEND_API_KEY=your_resend_api_key
```
---

## 🎯 Conclusion
By structuring email functionalities as a separate package inside **Turborepo**, you achieve better **code reusability, maintainability, and scalability** across multiple apps.

For further reading:
- [React Email Docs](https://react.email/)
- [Resend API Docs](https://resend.com/docs/)
