/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
