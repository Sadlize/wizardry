# Starter template of frontend project based on Next.js framework with app directory

<p align="center">
  <img height="360" src="public/images/starter-banner.png?raw=true" alt="Template starter banner">
</p>

## Features

Developer experience first:

#### Architecture
- ❗ **[Feature-Sliced Design](https://feature-sliced.design)** – An architectural methodology for scaffolding front-end applications. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

#### Framework
- ⚡ **[Next.js](https://nextjs.org)** – A complete React framework for hybrid and server rendering
- 🗺️ Sitemap, robots and metadata configured and generated by Next.js
- 💯 Maximize lighthouse score

#### Type checking and Validation
- 🔥 **[TypeScript](https://www.typescriptlang.org)** - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale
- ✅ Strict Mode for TypeScript and React 18 is enabled
- 🚨 **[Zod](https://zod.dev)** – TypeScript-first schema declaration and validation library

#### Design Patterns
- 📏 **[ESLint](https://eslint.org)** – Find and fix problems in your JavaScript code
- 🎨 **[Stylelint](https://stylelint.io/)** – A mighty CSS linter that helps you avoid errors and enforce conventions
- 🎀 **[Prettier](https://prettier.io)** – An opinionated code formatter, supporting multiple languages and code editors
- 🐶 **[Husky](https://github.com/typicode/husky)** – Modern native Git hooks made easy
- 🚫 **[lint-staged](https://github.com/okonet/lint-staged)** – Run linters against staged git files and don't let 💩 slip into your code base
- 🚓 **[commitlint](https://commitlint.js.org/#/)** – Helps your team adhering to a [commit convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

#### Design System
- 🎉 Storybook for UI development

#### State Management
- It was decided not to impose the use of any solution, but to allow the developer to make his own choice
If the project is small, it is recommended to look towards **[nanostores](https://github.com/nanostores/nanostores)** or **[zustand](https://github.com/pmndrs/zustand)**.
Otherwise, you can choose from **[redux](https://redux.js.org/)**, **[effector](https://effector.dev/)** or whatever you prefer.
