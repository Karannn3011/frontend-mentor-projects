module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./index.html",
    "./script.js",
    "./*.html", // Catches any other HTML files in the root
    "./*.js",   // Catches any other JS files in the root
  ],
  mode: "jit",
}
