/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.jsx", "./src/main.jsx"],
  theme: {
    extend: {
      colors: {
        brand: "#0fa9e6",
        brandLight: "#3fbaeb",
        brandDark: "#0c87b8",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
