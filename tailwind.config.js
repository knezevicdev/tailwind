/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.jsx", "./src/main.jsx"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
}
