/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
      width: {
        window: "83%",
        window2: "37%",
      },
   
    },
  },
  plugins: [],
}
