/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#FAF6F2',
        secondary: '#34251F',
        inputbg: '#E3E3E3',
        white: '#FFFFFF',
        footer: '#A5A5A5',
        placeholder: '#212121',
        subscribe: '#683B2B',
        greyish: '#D9D9D9',
      },
      //  npx tailwindcss -i ./input.css -o ./output.css --watch //
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        kepler: "'Kepler Std', sans-serif",
      },
      width: {
        window: "83%",
        window2: '37%',
        window3: '63%',
        footer1: "40%",
        footer2: "50%",
      },
    },
  },
  plugins: [],
}
