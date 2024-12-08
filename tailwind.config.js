/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./slices/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        boiling: ["BOILING", "sans-serif"],
        hugolers: ["HUGOLERS", "sans-serif"],
        arboria: ["Arboria", "sans-serif"],
      },
      colors: {
        backgroud: {
          100: '#010102',
          200: '#020237',
          300: '#0500FF'
        },
        typo: {
          100: '#E3E3E3',
          200: '#5C5CFF',
        }
      }
    },
  },
  plugins: [],
}
