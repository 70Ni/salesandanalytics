/** @type {import('tailwindcss').Config} */

import colors from "./src/JSON/colors.json";
import fonts from "./src/JSON/fonts.json";
import typo from "./src/JSON/Typo.json";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: typo,
      fontSize: fonts,
      colors: colors,
    },
  },
  plugins: [],
};
