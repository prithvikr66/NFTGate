/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Noto_sans: ["Noto Sans", "sans-serif"],
        Handjet: ['Handjet', "cursive"]
      }
    },
  },
  plugins: [],
}

