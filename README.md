# Next.js 15 Starter (core)

Welcome to the **Next.js 15 Starter** repository! This starter template is built with Next.js 15, React 19, and TypeScript 5, and comes packed with several powerful tools and configurations to accelerate your project setup and streamline development workflows using VS Code.

![Next.js 15 Starter](public/images/screenshot.png)

## 🚀 What's Included

- **Next.js 15 (Stable)**
- **React 19 (RC)**
- **TypeScript 5**
- **TailwindCSS 3**
- **ESLint 9**
- **Prettier 3**
- **App Directory with System, Light & Dark Mode**
- **Next.js Bundle Analyzer**
- **Dockerfile** with Node.js 20.18.0 (Alpine)

### 🛠️ ESLint Plugins

- [**@eslint/js ↗**](https://www.npmjs.com/package/@eslint/js){:target="_blank"}
- [**typescript-eslint ↗**](https://github.com/typescript-eslint/typescript-eslint)
- [**eslint-plugin-react ↗**](https://github.com/jsx-eslint/eslint-plugin-react)
- [**@next/eslint-plugin-next ↗**](https://github.com/vercel/next.js)
- [**eslint-plugin-tailwindcss ↗**](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [**eslint-config-prettier ↗**](eslint-config-prettier)
- [**eslint-plugin-import ↗**](https://github.com/import-js/eslint-plugin-import)
- [**eslint-plugin-promise ↗**](https://github.com/eslint-community/eslint-plugin-promise)

### ✨ Prettier Plugins

- [**prettier-plugin-tailwindcss ↗**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [**@trivago/prettier-plugin-sort-imports ↗**](https://github.com/trivago/prettier-plugin-sort-imports)

### 💻 VS Code Extensions (Recommended)

To enhance development experience, install the following VS Code extensions:

- [**Auto Close Tag ↗**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [**Better Comments ↗**](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [**DotENV ↗**](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [**EditorConfig for VS Code ↗**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [**ESLint ↗**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [**formate: CSS/LESS/SCSS formatter ↗**](https://marketplace.visualstudio.com/items?itemName=MikeBovenlander.formate)
- [**Git History ↗**](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [**Import Cost ↗**](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [**JavaScript Booster ↗**](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)
- [**npm Intellisense ↗**](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [**Prettier - Code formatter ↗**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [**Tailwind CSS IntelliSense ↗**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [**Todo Tree ↗**](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [**Turbo Console Log ↗**](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
- [**Package Json Upgrade ↗**](https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade)
- [**Inline fold ↗**](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold)
- [**Visual Studio Code Commitizen Support ↗**](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)
- [**Markdown All in One ↗**](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## 🏁 Getting Started

### Prerequisites

- **Node.js**: Version 20.18.0 or higher (configured in Docker)
- **Docker**: For containerized deployment (optional but recommended)

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/nextjs-15-starter-core.git
    cd nextjs-15-starter-core
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    # or with Yarn
    yarn install
    ```

3. **Run Development Server**:
    ```bash
    npm run dev
    # or with Yarn
    yarn dev
    ```

4. **Build for Production**:
    ```bash
    npm run build
    ```

### Docker Setup

To use Docker, make sure Docker is installed on your machine. Then, build and run the Docker container:

```bash
docker build -t nextjs-starter .
docker run -p 3000:3000 nextjs-starter
