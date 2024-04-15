/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const colors = require('./src/styles/colors');
const typography = require('./src/styles/typography');
const animations = require('./src/styles/animation');


module.exports = {
  content: [
    "./src/styles/**/*.css",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      animation: animations.animation,
      keyframes: animations.keyframes,
    },
  },
  plugins: [],
};
