---
sidebar_position: 1
---

# Overview

MicroSaaS products are one of the most exciting ways to create impactful software with minimal resources. They allow solopreneurs and small teams to quickly launch, validate, and iterate on ideas. To help developers hit the ground running, I built a boilerplate for MicroSaaS products using a **TurboRepo monorepo setup** and am excited to share it with the open-source community.

In this overview, I'll walk you through the architecture, design decisions, and why I chose each part of the stack.

---

## Why a MicroSaaS Boilerplate?

Building a MicroSaaS product often involves:

1. Repetitive setups for reusable features like authentication, payment, etc.
2. Struggling with the decision of which package, frameworks, databases to use
3. Ensuring scalability without overengineering.

This boilerplate solves these problems by providing a pre-configured, modular, and extensible foundation. Here's what you get out of the box:

![Apps](/img/design/apps.png)

![Packages](/img/design/packages.png)

![UI](/img/design/ui.png)

---

## Monorepo with TurboRepo

### Why TurboRepo?

TurboRepo is a powerful build system for monorepos that simplifies dependency management and speeds up builds. In a MicroSaaS setup, where you might have shared components or utilities between your frontend and backend, a monorepo makes life easier.

**Key Benefits:**
- Shared code between packages.
- Efficient caching for faster builds.
- Simplified dependency management.

### Folder Structure

Here’s how the boilerplate is organized:

```
/turborepo-saas-boilerplate-code
├── apps
│   ├── nextjs-app  # Next.js app
│   ├── docs  # Docusaurus app for documentation
│   ├── api  # Serverless functions with nodejs hono wrangler framework
├── packages
│   ├── ui  # Shared UI components and styles (ShadCN based)
│   |   ├── components (Shadcn  and Custom Components in atoms, molecules, organisms and templates)
│   |   ├── styles (Shadcn and Custom Colour themes and css styles to use)
│   ├── auth # Auth v5 Authentication library
│   ├── prisma-db # Prisma ORM Client library
│   ├── email # Email Templates and Resend Client library
│   ├── storage # Vercel Blob Client library
│   ├── ts-types # typescript interfaces and types library
│   ├── typescript-config # Typescript configs library
│   ├── eslint-config # Eslint configs library
│   ├── zod-validation # Zod Validation Client library
│   ├── server-utils # Server Functions which are run in UI components
│   ├── notion # Notion Client to interact with your notion database
│   ├── ai # OpenAI Client to interact with openai
│   ├── recoil # Recoil Context API
│   ├── analytics # Google and Vercel Analytics
│   ├── payments # Dodo, cashfree and razorpay
│   ├── security
│   ├── observability
├── docker  # Docker configuration with example env files
└── docs  #Docs for opensource contributors to this repo
└── e2e  #End to end tests 
└── .github  #Github Actions for testing
└── sonar-project.properties  #Sonar Qube Code Maintainability Properties
└── vitest.config.ts  #Vitest Config for testing
├── scripts # Bash Scripts to run to get started
├── docker-compose.yaml # Docker Configuration to start the app
└── turbo.json  # TurboRepo config
```

---

## Design Principles

When creating this boilerplate, I followed these guiding principles:

1. **Simplicity:** Avoid overengineering. The goal is to ship MVPs quickly.
2. **Scalability:** While simple, the stack can scale as your app grows.
3. **Extensibility:** Easily add new features, packages, or technologies.
4. **Developer Experience:** Focus on tools that make development enjoyable and productive.

---

## Conclusion

This boilerplate is the result of many iterations and lessons learned while building MicroSaaS products. I hope it saves you time and effort so you can focus on what truly matters—your product and your users.

Feel free to fork, star, and contribute to the repository. Let’s build amazing MicroSaaS products together!

[Check out the repo here](https://github.com/anoopkarnik/turborepo-saas-boilerplate-code)

---

### Share Your Feedback

Have ideas to improve the boilerplate or want to share your experience using it? Open an [issue on GitHub !](https://github.com/anoopkarnik/turborepo-saas-boilerplate-code/issues)


## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at *support@bayesian-labs.com*.