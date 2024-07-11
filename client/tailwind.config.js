/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4682b4",
        secondary: "#151c23",
        nonActive: "#bfbfbf",
      },
    },
  },
  plugins: [],
};
