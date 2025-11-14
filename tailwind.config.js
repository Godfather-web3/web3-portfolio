/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B0B0B",
        gold: "#D4AF37",
        crimson: "#B22222",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"], // elegant serif for titles
      },
    },
  },
  plugins: [],
}