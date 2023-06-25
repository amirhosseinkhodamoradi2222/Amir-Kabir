/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        sm: "50px",
        lg: "50px",
        xl: "50px",
        "2xl": "50px",
      },
    },
    fontFamily: {
      bold: ["bold", "sans-serif"],
      light: ["light", "sans-serif"],
      medium: ["medium", "sans-serif"],
      UltraLight: ["UltraLight", "sans-serif"],
      web: ["web", "sans-serif"],
    },
    extend: {
      colors: {
        oreng: "#FFA000",
      },
    },
  },
  plugins: [],
};
