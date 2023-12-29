# Starter template for frontend project based on Next.js framework with app directory

<p align="center">
  <img src="public/assets/images/starter-banner.png?raw=true" alt="Template starter banner">
</p>

## Table of Contents

- [Features](#features)
  - [Architecture](#architecture)
  - [Framework](#framework)
  - [Type checking and Validation](#type-checking-and-validation)
  - [Styling](#styling)
  - [Design Patterns](#design-patterns)
  - [State Management](#state-management)
- [Getting Started](#-getting-started)
  - [Creating a New Repository on GitHub](#-creating-a-new-repository-on-github)
  - [Project structure](#-project-structure)
  - [Development](#-development)
  - [Production](#-production)
  - [Scripts](#scripts)
- [Utilities](#utilities)
  - [Sass media mixin](#sass-media-mixin)
    - [Overview](#overview)
    - [Properties](#properties)
      - [Valid screens](#valid-screens)
    - [Custom Properties](#custom-properties)
      - [Extend](#extend)
      - [Fluid typography](#fluid-typography)
    - [Orientation](#orientation)
  - [Sass hover mixin](#sass-hover-mixin)
- [License](#license)

## Features

Developer experience first:

### Architecture
- ❗ **[Feature-Sliced Design](https://feature-sliced.design)** – An architectural methodology for scaffolding front-end applications. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

### Framework
- ⚡ **[Next.js](https://nextjs.org)** – A complete React framework for hybrid and server rendering
- 🗺️ Sitemap, robots and metadata configured and generated by Next.js
- 💯 Maximize lighthouse score

### Type checking and Validation
- 🔥 **[TypeScript](https://www.typescriptlang.org)** - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale
- ✅ Strict Mode for TypeScript and React 18 is enabled
- 🚨 **[Zod](https://zod.dev)** – TypeScript-first schema declaration and validation library

### Styling
- 🌈 **[Sass](https://sass-lang.com/)** - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

### Design Patterns
- 📏 **[ESLint](https://eslint.org)** – Find and fix problems in your JavaScript code
- 🎨 **[Stylelint](https://stylelint.io/)** – A mighty CSS linter that helps you avoid errors and enforce conventions
- 🎀 **[Prettier](https://prettier.io)** – An opinionated code formatter, supporting multiple languages and code editors
- 🐶 **[Husky](https://github.com/typicode/husky)** – Modern native Git hooks made easy
- 🚫 **[lint-staged](https://github.com/okonet/lint-staged)** – Run linters against staged git files and don't let 💩 slip into your code base
- 🚓 **[commitlint](https://commitlint.js.org/#/)** – Helps your team adhering to a [commit convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

### Design System
- 🎉 Storybook for UI development

### State Management
- It was decided not to impose the use of any solution, but to allow the developer to make his own choice.
If the project is small, it is recommended to look towards **[nanostores](https://github.com/nanostores/nanostores)** or **[zustand](https://github.com/pmndrs/zustand)**.
Otherwise, you can choose from **[redux](https://redux.js.org/)**, **[effector](https://effector.dev/)** or whatever you prefer.

## ▶️ Getting Started

### 📙 Creating a New Repository on GitHub
1. Click on "**Use this template**" button
2. Configure your new repository and click on "**Create repository from template**" button
3. Now you can clone the generated repository to your local machine:

```bash
git clone https://github.com/<YOUR-GITHUB-LOGIN>/<NAME-OF-YOUR-GENERATED-REPOSITORY>.git
```

### 📂 Project structure
After cloning repository you will get next structure:

```shell
.
├── 📂.husky/                         # Husky configuration
├── 📂.storybook/                     # Storybook folder
├── 📂config/                         # Libs for root config files
│   └── 📂env/                        # .env files
├── 📂public/                         # Public assets folder
├── 📂src/
│   ├── 📂app/                        # Next JS App (App Router) + FSD layer
│   │   ├── 📂(pages)/                # Page logic
│   │   ├── 📂fonts/
│   │   ├── 📂model/                  # FSD segment
│   │   ├── 📂styles/                 # Styles folder
│   │   │   ├── 📃_breakpoints.scss   # read more: Utilities.Sass.breakpoints
│   │   │   ├── 📃_typography.scss   # read more: Utilities.Sass.typography
│   │   │   ├── 📃app.scss            # global styles
│   │   │   ├── 📃index.scss          # public api styles (@import 'app/styles')
│   │   │   ├── 📃normalize.css       # github.com/necolas/normalize.css with some additions
│   │   │   └── 📃variables.scss      # css variables
│   │   ├── 📃error.tsx               # https://nextjs.org/docs/app/building-your-application/routing/error-handling
│   │   ├── 📃layout.tsx              # Root layout
│   │   ├── 📃not-found.tsx           # https://nextjs.org/docs/app/api-reference/file-conventions/not-found
│   │   ├── 📃robots.ts
│   │   └── 📃sitemap.ts
│   ├── 📂entities/                   # FSD layer
│   ├── 📂features/                   # FSD layer
│   ├── 📂flat-pages/                 # FSD pages layer (page ui)
│   └── 📂shared/                     # FSD layer
│       ├── 📂constants/              # Page logic
│       │   ├── 📃routes.ts           # getPath() function with type handle routes
│       │   └── 📃translations.ts     # all site plain text + SEO
│       ├── 📂lib/
│       │   └── 📃metadata.ts         # getMetadata() function to generate SEO
│       └── 📂mocks/                  # Mocks folder
├── 📃.browserslistrc                 # https://github.com/browserslist/browserslist
├── 📃.commitlintrc                   # commitlint config
├── 📃.editorconfig                   # editor config helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
├── 📃.eslintignore
├── 📃.eslintrc                       # eslint config
├── 📃.gitignore
├── 📃.lintstagedrc                   # lintstaged config
├── 📃.prettierignore
├── 📃.prettierrc                     # prettier config
├── 📃.stylelintrc                    # stylelint config
├── 📃next.config.mjs                 # Next.js config
├── 📃next-env.d.ts                   # https://nextjs.org/docs/basic-features/typescript
├── 📃package.json
├── 📃README.md                       # README file
└── 📃tsconfig.json                   # TypeScript configuration
```

### 🛠️ Installation

Before you can start developing your super application, you need to install the project's dependencies.

Move yourself to the root of the project:

```bash
cd <NAME-OF-YOUR-GENERATED-REPOSITORY>
```

> For the next steps, choose a package manager of your choice and change the commands contained in the `package.json` scripts. See their documentation for more information:
>
> - [PNPM](https://pnpm.io/pt/cli/add)
> - [NPM](https://docs.npmjs.com/cli/v6/commands)
> - [Yarn](https://classic.yarnpkg.com/en/docs/cli)

Install all dependencies of the project:

```bash
# PNPM
pnpm install
# NPM
npm install
# Yarn
yarn install
```

### ⌨️ Development

Once all dependencies have been installed, you can run the local development server:

```bash
# PNPM
pnpm run dev
# NPM
npm run dev
# Yarn
yarn dev
```

Now just code!

### 🖥️ Production

After applying the changes, you can generate a build to test and/or deploy to your production environment.

Make a production build:

```bash
# PNPM
pnpm run build
# NPM
npm run build
# Yarn
yarn build
```

And then run the build:

```bash
# PNPM
pnpm start
# NPM
npm start
# Yarn
yarn start
```

### Scripts
<details>
<summary>View more commands you can use</summary>

<h4>Lint all src/ files</h4>

```bash
# PNPM
pnpm run lint
# NPM
npm run lint
# Yarn
yarn lint
```

<h4>Lint only src/ code files</h4>

```bash
# PNPM
pnpm run lintCode
# NPM
npm run lintCode
# Yarn
yarn lintCode
```

<h4>Lint only src/ style files</h4>

```bash
# PNPM
pnpm run lintStyles
# NPM
npm run lintStyles
# Yarn
yarn lintStyles
```

<h4>Lint and Fix all src/ files</h4>

```bash
# PNPM
pnpm run lint:fix
# NPM
npm run lint:fix
# Yarn
yarn lint:fix
```

<h4>Type Checking</h4>

```bash
# PNPM
pnpm run typecheck
# NPM
npm run typecheck
# Yarn
yarn typecheck
```

<h4>Format</h4>

```bash
# PNPM
pnpm run format
# NPM
npm run format
# Yarn
yarn format
```

</details>

## Utilities

### Sass media mixin

#### Overview
First of all you need to configure preferred breakpoints in **./src/app/styles/_breakpoints.scss** or use default :

```bash
# Default breakpoints
# It can be any string as object keys.
$breakpoints: (
  xs: 0,
  sm: 430.02,
  md: 1024,
  lg: 1280.02,
  xl: 1440.02,
  xxl: 1920,
  xxxl: 2560,
) !default;
```

Now just include media mixin in your selector. The following example describes the height for screens with maximum widths sm, md and lg.

```bash
#Input
@import 'app/styles';

.selector {
  @include media((
    height: (sm: 400px, md: 800px, lg: 1200px),
  ));
}

# Output
@media only screen and (min-width: 430.02px) {
  .selector {
    height: 400px;
  }
}
@media only screen and (min-width: 1024px) {
  .selector {
    height: 800px;
  }
}
@media only screen and (min-width: 1280.02px) {
  .selector {
    height: 1200px;
  }
}
```

Media takes 2 values **media($properties, $orientation)**.

#### Properties

```bash
$properties: (
  key: value;
);
```
* key - any valid css property
* value - valid value for its property or screen array with values

```bash
# input
.selector {
  @include media((
    width: 100%,
    color: (sm: red, md: blue),
  ));
}

# output
.selector {
  width: 100%;
}
@media only screen and (min-width: 430.02px) {
  .selector {
    color: red;
  }
}
@media only screen and (min-width: 1024px) {
  .selector {
    color: blue;
  }
}
```

##### Valid screens:
* your default breakpoint keys (sm, md, lg, etc) or custom
* min and max modifications (By default all queries use min breakpoint, but behavior can be switched inside **_breakpoints.scss** file by editing  **$media-direction** variable).

```bash
# input
.selector {
  @include media((
    color: (max-md: red, min-xl: blue),
  ));
}

# output
@media only screen and (max-width: 1023.98px) {
  .selector {
    color: red;
  }
}
@media only screen and (min-width: 1440px) {
  .selector {
    color: blue;
  }
}
```

* screen range
```bash
# input
.selector {
  @include media((
    color: (md-xl: red),
  ));
}

# output
@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .selector {
    color: red;
  }
}
```

* **all** keyword. This keyword was created for the scenario then you want write all styles in mixin.

```bash
# input with all keyword
.selector {
  @include media((
    color: (all: red, md-lg: blue),
  ));
}
# or old school input
.selector {
  color: red;

  @include media((
    color: (md: blue),
  ));
}

# output will be the same
.selector {
  color: red;
}
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .selector {
    color: blue;
  }
}
```

* custom screens

```bash
# input
.selector {
  @include media((
    background-color: (111-lg: red),
  ));
}

# output
@media only screen and (min-width: 111px) and (max-width: 1280px) {
  .selector {
    background-color: red;
  }
}

# input
# when using 2 custom screens, you must write them in quotes
.selector {
  @include media((
    background-color: ('444-777': red),
  ));
}

# output
@media only screen and (min-width: 444px) and (max-width: 776.98px) {
  .selector {
    background-color: red;
  }
}
```
#### Custom properties

Media $properties have 2 more custom properties:
##### **extend**

Media can be extended with any class or classes:

```bash
# input
.wizardry {
  color: purple;
}

.test {
  font-size: 2rem;
}

.selector {
  @include media((
    extend: '.test, .wizardry',
  ));
}

# output
.selector {
  color: purple;
}

.selector {
  font-size: 2rem;
}
```

##### **fluid-typography**

Automatically calculates and creates @media based on variables:
  * key - must be breakpoints range
  * value: font scale range in px

```bash
fluid-typography: (
  SCREEN_START-SCREEN_END: (FONT-VALUE-START, FONT-VALUE-END),
);

# input
html {
  @include media((
    fluid-typography: (
      xs-sm: (0, 16), # font scale from 0 to 16px
      sm-md: (16, 10), # font scale from 16 to 10px
      lg-xl: (10, 17), # font scale from 10 to 17px
      xl-xxl: (17, 22), # font scale from 17 to 22px
    ),
  ));
}

# output
@media only screen and (min-width: 0px) and (max-width: 430px) {
  html {
    font-size: calc(0rem + 16 * (100vw - 0px) / 430);
  }
}
@media only screen and (min-width: 430.02px) and (max-width: 1023.98px) {
  html {
    font-size: calc(1rem + -6 * (100vw - 430.02px) / 593.96);
  }
}
@media only screen and (min-width: 1280.02px) and (max-width: 1440px) {
  html {
    font-size: calc(0.625rem + 7 * (100vw - 1280.02px) / 159.98);
  }
}
@media only screen and (min-width: 1440.02px) and (max-width: 1919.98px) {
  html {
    font-size: calc(1.0625rem + 5 * (100vw - 1440.02px) / 479.96);
  }
}
```
#### Orientation
Media mixin has a second optional parameter to determine the orientation:

```bash
$orientation (optional): 'portrait' or 'landscape'

# input
.selector {
  @include media((
    color: (lg-xl: red),
  ), landscape);
}

# output
@media only screen and (min-width: 1280.02px) and (max-width: 1440px) and (orientation: landscape) {
  .selector {
    color: red;
  }
}
```

### Sass hover mixin

```bash
# input
.selector {
  @include hover {
    # content
  }
}

# output
@media (hover: hover) {
  .selector:hover {
    # content
  }
}
```

## License
Licensed under the MIT License, Copyright © 2023

## 🤓Happy coding🤓
