/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FAF6F2',
        secondary: '#34251F',
        inputbg: '#E3E3E3',
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        kepler: "'Kepler Std', sans-serif",
      },
    },
  },
  plugins: [],
}
