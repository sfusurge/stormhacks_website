import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "767px" },
      desktop: "768px", //min-width
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customPurple: 'rgba(36, 27, 56, 1)',
        silver: "#c4c4c4",
        white: "#fff",
        whitesmoke: "rgba(248, 248, 248, 0.04)",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        gray: "#241c35",
      },
      fontFamily: {
        vollkorn: "Vollkorn",
        "vollkorn-sc": "'Vollkorn SC'",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
    },
  },
  plugins: [],
};

export default config;