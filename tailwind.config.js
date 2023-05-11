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
      fontFamily: {
        sans: [`var(--font-nunito)`],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1270px" },
      // => @media (max-width: 1270px) { ... }
      lg: { max: "940px" },
      // => @media (max-width: 940px) { ... }
      sm: { max: "690px" },
      // => @media (max-width: 690px) { ... }
      xs: { max: "498px" },
      // => @media (max-width: 498px) { ... }
    },
  },
  plugins: [],
};
