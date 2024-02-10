/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'great': ['Great Vibes', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        light_blue: "#F3F8FF"
      }
    },
  },
  plugins: [],
}


