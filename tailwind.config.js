/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff9f0", //milky way
        secondary: "#7096d1", //universe
        tertiary: "#334eac", //planetary
        soothing: "#f1f5fa",
        alert: "#C40C0C", //red
      },
    },
  },
  plugins: [],
};
