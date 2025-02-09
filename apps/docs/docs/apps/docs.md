---
title: "docs"
description: "A guide to integrating Docusaurus into a Turborepo monorepo for documentation."
---

# Setting Up Docusaurus in Turborepo

## 📌 Introduction
[Docusaurus](https://docusaurus.io/) is a powerful static site generator designed for documentation. It is highly customizable, supports Markdown and MDX, and integrates well with monorepos like Turborepo.

This guide covers the installation, usage, and deployment of a **Docusaurus documentation app** within a **Turborepo** monorepo setup.

## 🚀 Why Use Docusaurus for Documentation?
- **Easy Setup**: Pre-configured templates for quick onboarding.
- **Markdown & MDX Support**: Write documentation with standard Markdown + React components.
- **Versioning & Localization**: Maintain multiple versions of documentation.
- **Optimized for Performance**: Static generation with great SEO.
- **Great for Monorepos**: Works seamlessly inside a Turborepo project.

## 📜 Running the Documentation Locally
To start the Docusaurus development server, run:
```sh
npm run start
```
Visit `http://localhost:3000/` to see your documentation.

To test it inside the monorepo, run from the root:
```sh
turbo dev --filter=docs-app
```
---

## 🎯 Conclusion
Using **Docusaurus** inside a **Turborepo** allows for an efficient and scalable documentation system. The monorepo setup ensures documentation remains closely tied to code changes.

For further reading:
- [Docusaurus Docs](https://docusaurus.io/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Cloudflare Pages Guide](https://developers.cloudflare.com/pages/)

Happy documenting! 📖🚀
