/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        themeFontFamily: ["Space Mono", "monospace"],
      },
      colors: {
        themeWhite: "#FFFFFF",
        themeBlack: "#333333",
      },
    },
  },
  plugins: [],
};
