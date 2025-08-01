/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/background.png')",
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        primary: ["Monsterrat Light, sans-serif"],
        "mon-regular": ["Monsterrat, sans-serif"],
        "mon-medium": ["Monsterrat Medium, sans-serif"],
        "mon-bold": ["Monsterrat Bold, sans-serif"],
        "mon-semibold": ["Monsterrat SemiBold, sans-serif"],
      },
      fontWeight: {
        light: 100, //font-helvetica-neue font-light
        medium: 400,
        semibold: 600,
        bold: 700,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        "mon-purple": "#CDB7F6",
        "mon-cream": { DEFAULT: "#FAF6EE", dark: "#f4ecda" },
        //template
        "custom-black": "#0e0e0e",
        "custom-white": "#F3F1EA",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-red": "#DF1D00",
      },
      screens: {
        "2xs": "360px",
        xs: "420px",
        1440: "1440px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
