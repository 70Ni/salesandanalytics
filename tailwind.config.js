/** @type {import('tailwindcss').Config} */

import colors from "./src/JSON/colors.json";
import fonts from "./src/JSON/fonts.json";
import typo from "./src/JSON/Typo.json";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-muted)",
        },
      },
      colors: {
        // textwhite: "var(--primary-color)",
        // textblack: "var(--secondary-color)",
        // topBar: "var(--top-bar)",
        // background: "var(--background)",
        // cardBackground: "var(--background-card)",
      },

      spacing: {
        base: "var(--primary-padding)",
        mobile: "var(--second-padding)",
        p56: "var(--padding-56)",
        p30: "var(--spacing-30px)",
        p24: "var(--spacing-24px)",
        p20: "var(--spacing-20px)",
        p16: "var(--padding-16px)",
        p12: "var(--spacing-12px)",
      },
      width: {
        xsm: "var(--Icon-size-xsm)",
        csm: "var(--Icon-size-sm)",
        cmd: "var(--Icon-size-md)",
        cxmd: "var(--Icon-size-xmd)",
        clg: "var(--Icon-size-lg)",
      },
      height: {
        xsm: "var(--Icon-size-xsm)",
        csm: "var(--Icon-size-sm)",
        cmd: "var(--Icon-size-md)",
        cxmd: "var(--Icon-size-xmd)",
        clg: "var(--Icon-size-lg)",
      },

      fontFamily: typo,
      fontSize: fonts,
      colors: colors,
    },
  },
  plugins: [],
};
