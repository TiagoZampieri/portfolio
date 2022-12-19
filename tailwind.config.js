/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        blue: '#1B2BDB',
        customBlack: '#000',
      },
    },
  },
  plugins: [],
};
