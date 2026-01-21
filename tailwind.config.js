/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#359EFF",
        "background-light": "#f5f7f8",
        "background-dark": "#0f1923",
        "surface-dark": "#2E3136"
      },
      fontFamily: { sans: ['Roboto'], display: "Space Grotesk", body: ["Manrope", "sans-serif"] },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" }
    }
  },
  plugins: [],
};

