/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [false],
  },
  theme: {
    container: {
      center: true,
      padding: "1.3rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

