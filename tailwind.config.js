/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        blue: '#1B2BDB',
        customWhite: '#f4f4f4',
        customBlack: '#000000',
      },
    },
  },
  plugins: [],
};
