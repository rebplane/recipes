/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-indigo': '#1e1b4b',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "serif"]
      },
    },
  },
  plugins: [],
}

