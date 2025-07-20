# AI by Hand India 🌐

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.  
**Now hosted on [GitHub Pages](https://rashpinder1985.github.io/AI-by-Hand-India/)**

---

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices  
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development  
- **Precompiled CSS** - No build step or dependencies required  
- **Responsive Design** - Mobile-first approach for all screen sizes  
- **Live Demo** - Hosted via GitHub Pages  

### 🔗 Quick Links
- 📄 [Register for the Workshop](https://forms.gle/quQp6JJJvmf1FVhZA)  
- 🧠 [Workshop Info Page](https://byhand.ai/workshop)  
- 📥 [Download Excel “By Hand” Worksheets](https://github.com/ImagineAILab/ai-by-hand-excel)

---

## 📁 File Structure

```
AI-by-Hand-India/
├── index.html              # Redirects to landing_page.html
├── landing_page.html       # Main content page
├── main.css                # Precompiled Tailwind CSS (no build needed)
├── tailwind.css            # Tailwind source file (if rebuilding)
├── tailwind.config.js      # Tailwind CSS config
├── Tom.png                 # Image of Prof. Tom Yeh
├── Rashpinder.png          # Image of Dr. Rashpinder Kaur
└── README.md               # Project documentation
```

---

## 🎨 Styling

This project uses **Tailwind CSS**, precompiled into `main.css`.

If you're not modifying the design system, you're all set — no need to install or compile anything.

To explore or modify styles:
- Edit `tailwind.css`  
- Or use [Tailwind Play](https://play.tailwindcss.com/) for live testing

---

## 🧩 Optional: Customizing Tailwind (Advanced)

```js
// tailwind.config.js
module.exports = {
  content: ["./landing_page.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        accent: '#f97316',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};
```

---

## 📦 Optional: Build Tailwind CSS

Only if you're editing `tailwind.css`, run this to regenerate `main.css`:

```bash
npm install
npx tailwindcss -i ./tailwind.css -o ./main.css --minify
```

> 💡 If you’re not using npm, **you can skip this step entirely**.

---

## 📱 Responsive Breakpoints

Tailwind’s mobile-first breakpoints used:

- `sm`: 640px  
- `md`: 768px  
- `lg`: 1024px  
- `xl`: 1280px  
- `2xl`: 1536px  

---

## 🙏 Acknowledgments

- Brought to you by [AI by Hand India](https://byhand.ai)  
- Hosted on [GitHub Pages](https://pages.github.com)  
- Styled with [Tailwind CSS](https://tailwindcss.com)  

Built with ❤️ by the Imagine AI Lab.

