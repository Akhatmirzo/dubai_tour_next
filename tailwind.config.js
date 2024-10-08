/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "3xl": { max: "1536px" },

      "2xl": { max: "1440px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "540px" },

      '2sm': { max: "375px"},
    },
    fontFamily: {
      poppins: ['var(--font-poppins), sans-serif'],

      volkhov: ['var(--font-volkhov), sans-serif'],

      yesteryear: ['var(--font-yesteryear), cursive'],
    },
  },
  plugins: [],
};
