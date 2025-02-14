# 📌 Vite + Vue 3 + TypeScript + ESLint + Prettier Starter

This is a **starter template** for quickly setting up a Vue 3 project with Vite, TypeScript, ESLint, and Prettier. It is optimized for **best practices** and **future projects**.

---

## 🚀 Features

✅ **Vite** - Lightning-fast build tool for Vue 3  
✅ **Vue 3** - Latest Vue.js framework with Composition API  
✅ **TypeScript** - Strongly-typed development for better maintainability  
✅ **ESLint 9 (Flat configuration)** - Ensures clean, error-free, and consistent code  
✅ **Prettier** - Code formatter for automatic styling  
✅ **HMR (Hot Module Replacement)** - Instant updates during development  
✅ **Optimized Build** - Ready for production with fast bundling

---

## 📂 Project Structure

```
vite-vue-ts-linted-starter/
├── node_modules/               # Installed dependencies
├── public/                     # Static assets
└── src/                        # Source code
    ├── assets/                 # Images, icons, etc.
    ├── components/             # Vue components
    ├── views/                  # Page components
    ├── App.vue                 # Root component
    ├── main.css                # Root stylesheet
    └── main.ts                 # Entry point
├── .eslintrc.config.js         # ESLint v9 configuration
├── .prettierrc                 # Prettier configuration
├── tsconfig.app.json           # TypeScript configuration - app
├── tsconfig.node.json          # TypeScript configuration - node
├── tsconfig.json               # TypeScript configuration - combined
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```
---

## 🛠 Installation

Make sure you have **Node.js** installed (preferably the latest LTS version).  

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/symplytheo/vite-vue-ts-linted-starter.git
cd vite-vue-ts-linted-starter
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
Now, open http://localhost:5173 in your browser. 

---

## 🎨 Code Formatting

This project enforces **ESLint** and **Prettier** to maintain clean and consistent code.

To fix linting errors, run:
```sh
npm run lint
```

To format your code, run:
```sh
npm run format
```

---

## 📜 Scripts

| Command          | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`    | Starts the development server with hot reloading |
| `npm run build`  | Builds the project for production               |
| `npm run preview`| Serves the built project locally                |
| `npm run lint`   | Runs ESLint and fixes errors automatically       |
| `npm run format` | Formats the code using Prettier                 |

---

## 🤝 Contributing

Feel free to fork this repository, create a new branch, and submit a pull request with your improvements!

We follow **Conventional Commits** for commit messages. Please adhere to the format when making changes.

### Steps to Contribute:
1. **Fork the repository**  
2. **Create a new branch**  
   ```sh
   git checkout -b feature-name
   ```
3. **Make your changes**  
4. **Create a new branch**  
   ```sh
   git commit -m "feat: add new feature"
   git push -u origin feature-name
   ```
 5. **Create a pull request**  

--- 

## ⚡ Why Use This Starter?

🔹 **Minimal setup** - Get started quickly with Vue 3 + TypeScript  
🔹 **Best practices** - Code quality with ESLint & Prettier  
🔹 **Fast development** - Powered by Vite for instant updates  
🔹 **Scalability** - Structured for long-term projects  

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🚀 Happy Coding! 🎉
