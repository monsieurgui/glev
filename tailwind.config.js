/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier New', 'Courier', 'monospace'],
      }
    },
  },
  plugins: [],
}