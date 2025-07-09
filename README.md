## 🏛️ Bilingual Website

A minimal, bilingual (فارسی | English) website built with React and Vite, styled with a custom color palette. Supports right-to-left (RTL) and left-to-right (LTR) layouts and easy language toggling.

---

### 🌐 Features

- 🈳 **Bilingual support** (Persian & English)
- 💠 **RTL/LTR layout switching**
- 🎨 **Custom color palette**
- 💡 **Dark mode ready**
- ⚡ Built with **Vite + React**
- 📁 Organized code structure with reusable components and clean CSS

---

### 📷 Preview

| 🇫🇷 Persian                        | 🇺🇸 English                        |
| --------------------------------- | --------------------------------- |
| ![Persian View](./preview/fa.png) | ![English View](./preview/en.png) |

---

### 🛠️ Tech Stack

- React
- Vite
- CSS Modules or plain CSS
- Persian fonts: _Vazirmatn_, _Shabnam_
- `translationKey.js` for multilingual text

---

### 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/persian-empire-app.git
   cd persian-empire-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

---

### 🌍 Folder Structure

```
src/
├── components/
│   ├── App.jsx
│   └── Footer.jsx
│   └── index.css
├── data/
│   └── translationKey.js

```

---

### ✍️ How to Add More Languages

1. Edit `src/data/translationKey.js`

2. Add a new language key:

   ```js
   ES: {
     footerText: "Todos los derechos reservados.",
     toggleLabel: "EN",
     headerTitle: "Bienvenido al Imperio Persa",
     buttonLabel: "Haz clic aquí",
   }
   ```

3. Add logic in the language toggle button (coming soon: dropdown selector)

---

### 📜 License

MIT © 2025 \[Lin Schmitz]
