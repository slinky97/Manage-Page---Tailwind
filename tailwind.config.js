/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Vietnam-Pro": ['"Be Vietnam Pro"', "sans-serif"],
      },
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "vary-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "close-menu": "url('../../assets/images/icon-close.svg')",
        "open-menu": "url('../../assets/images/icon-hamburger.svg')",
        "simplify-desktop":
          "url('../../assets/images/bg-simplify-section-desktop.svg')",
        "simplify-mobile":
          "url('../../assets/images/bg-simplify-section-mobile.svg')",
      },
    },
  },
  plugins: [],
};
