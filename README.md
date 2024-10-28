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

<ul>
  <li><a href="https://www.npmjs.com/package/@eslint/js" target="_blank"><strong>@eslint/js ↗</strong></a></li>
  <li><a href="https://github.com/typescript-eslint/typescript-eslint" target="_blank"><strong>typescript-eslint ↗</strong></a></li>
  <li><a href="https://github.com/jsx-eslint/eslint-plugin-react" target="_blank"><strong>eslint-plugin-react ↗</strong></a></li>
  <li><a href="https://github.com/vercel/next.js" target="_blank"><strong>@next/eslint-plugin-next ↗</strong></a></li>
  <li><a href="https://github.com/francoismassart/eslint-plugin-tailwindcss" target="_blank"><strong>eslint-plugin-tailwindcss ↗</strong></a></li>
  <li><a href="eslint-config-prettier" target="_blank"><strong>eslint-config-prettier ↗</strong></a></li>
  <li><a href="https://github.com/import-js/eslint-plugin-import" target="_blank"><strong>eslint-plugin-import ↗</strong></a></li>
  <li><a href="https://github.com/eslint-community/eslint-plugin-promise" target="_blank"><strong>eslint-plugin-promise ↗</strong></a></li>
</ul>

### ✨ Prettier Plugins

<ul>
  <li><a href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss" target="_blank"><strong>prettier-plugin-tailwindcss ↗</strong></a></li>
  <li><a href="https://github.com/trivago/prettier-plugin-sort-imports" target="_blank"><strong>@trivago/prettier-plugin-sort-imports ↗</strong></a></li>
</ul>

### 💻 VS Code Extensions (Recommended)

To enhance development experience, install the following VS Code extensions:

<ul>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank"><strong>Auto Close Tag ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments" target="_blank"><strong>Better Comments ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank"><strong>DotENV ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank"><strong>EditorConfig for VS Code ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank"><strong>ESLint ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=MikeBovenlander.formate" target="_blank"><strong>formate: CSS/LESS/SCSS formatter ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank"><strong>Git History ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost" target="_blank"><strong>Import Cost ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster" target="_blank"><strong>JavaScript Booster ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense" target="_blank"><strong>npm Intellisense ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank"><strong>Prettier - Code formatter ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank"><strong>Tailwind CSS IntelliSense ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree" target="_blank"><strong>Todo Tree ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log" target="_blank"><strong>Turbo Console Log ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade" target="_blank"><strong>Package Json Upgrade ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold" target="_blank"><strong>Inline fold ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen" target="_blank"><strong>Visual Studio Code Commitizen Support ↗</strong></a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one" target="_blank"><strong>Markdown All in One ↗</strong></a></li>
</ul>


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
