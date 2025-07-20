# AI by Hand India 🌐

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.  
**Now hosted on [GitHub Pages](https://rashpinder1985.github.io/AI-by-Hand-India/)**

---

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Components** - Pre-built component classes for buttons and containers
- **NPM Scripts** - Easy-to-use commands for development and building
- **Responsive Design** - Mobile-first approach for all screen sizes
- **GitHub Pages Deployment** - Host your site for free with version control

---

## 📋 Prerequisites

- Node.js (v12.x or higher)
- npm or yarn
- Git (for deployment)

---

## 🛠️ Installation

1. Clone the repo:
```bash
git clone https://github.com/Rashpinder1985/AI-by-Hand-India.git


cd ai-by-hand-india
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server (if configured):
```bash
npm run dev
# or
yarn dev
```

---

## 📁 Project Structure

```
AI-by-Hand-India/
├── index.html              # Redirects to landing_page.html
├── landing_page.html       # Main content page
├── main.css                # Compiled Tailwind CSS
├── tailwind.css            # Tailwind source file
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── Tom.png                 # Image of Prof. Tom Yeh
├── Rashpinder.png          # Image of Dr. Rashpinder Kaur
└── README.md               # Project documentation


---

## 🎨 Styling

This project uses Tailwind CSS for styling. You can modify styles by editing `tailwind.css` or customizing utility classes directly in your HTML.

---

## 🧩 Customization

To customize Tailwind's design system, edit:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
      },
    },
  },
  content: ["./index.html", "./pages/**/*.{html,js}"],
}
```

---

## 📦 Build for Production

To generate the final production-ready CSS:

```bash
npm run build:css
```

This will create an optimized `main.css` .

---

## 🚀 Deploy to GitHub Pages

1. Commit all changes and push to your GitHub repo:
```bash
git add .
git commit -m "Deploy ready"
git push origin main
```

2. On GitHub:
   - Go to **Settings** → **Pages**
   - Choose `main` branch and root (`/`) folder
   - Your site will be published at:
     ```
     https://rashpinder1985.github.io/AI-by-Hand-India/
     ```

3. (Optional) Add a custom domain by creating a `CNAME` file with your domain name.

---

## 📱 Responsive Design

Built using Tailwind's mobile-first approach with these breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by [GitHub Pages](https://pages.github.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)

Built with ❤️ by AI by Hand India.
