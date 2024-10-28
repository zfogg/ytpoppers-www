Next.js 15 Starter
Welcome to the Next.js 15 Starter repository! This starter template is built with Next.js 15, React 19, and TypeScript 5, and comes packed with several powerful tools and configurations to accelerate your project setup and streamline development workflows.


🚀 What's Included
Next.js 15 (Stable)
React 19 (RC)
TypeScript 5
TailwindCSS 3
ESLint 9
Prettier 3
App Directory with System, Light & Dark Mode
Next.js Bundle Analyzer
Dockerfile with Node.js 20.18.0 (Alpine)
🛠️ ESLint Plugins
@eslint/js
typescript-eslint
eslint-plugin-react
@next/eslint-plugin-next
eslint-plugin-tailwindcss
eslint-config-prettier
eslint-plugin-import
eslint-plugin-promise
✨ Prettier Plugins
prettier-plugin-tailwindcss
@trivago/prettier-plugin-sort-imports
💻 VS Code Extensions (Recommended)
To enhance development experience, install the following VS Code extensions:

ESLint
Prettier - Code Formatter
Tailwind CSS IntelliSense
DotENV
TypeScript Hero
🏁 Getting Started
Prerequisites
Node.js: Version 20.18.0 or higher (configured in Docker)
Docker: For containerized deployment (optional but recommended)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/nextjs-15-starter.git
cd nextjs-15-starter
Install Dependencies:

bash
Copy code
npm install
# or with Yarn
yarn install
Run Development Server:

bash
Copy code
npm run dev
# or with Yarn
yarn dev
Build for Production:

bash
Copy code
npm run build
Docker Setup
To use Docker, make sure Docker is installed on your machine. Then, build and run the Docker container:

bash
Copy code
docker build -t nextjs-starter .
docker run -p 3000:3000 nextjs-starter
This command will start the application on http://localhost:3000.

📂 Folder Structure
plaintext
Copy code
├── src/
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
├── public/
├── .eslintrc.json
├── .prettierrc
├── Dockerfile
└── README.md
Key Folders
app: Main application code following the Next.js App Router structure.
components: Reusable React components.
pages: Legacy pages if needed.
styles: Global styles including Tailwind configuration.
🌟 Features
Dark Mode & Theme Switching: System, Light, and Dark modes are supported out of the box.
Linting and Formatting: Configured with ESLint and Prettier for consistent code style.
CI/CD Ready: Easily deployable to Vercel, Netlify, or Docker-compatible environments.
Development Enhancements: Pre-configured VS Code settings and extensions for a smooth experience.
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Add new feature")
Push to the branch (git push origin feature-branch)
Create a pull request
🙏 Acknowledgments
Special thanks to the contributors of the following tools and libraries used in this template:

Next.js
Tailwind CSS
TypeScript
Docker
