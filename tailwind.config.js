/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  mode:'jit',
  theme: {
    screens: {
      'md': '868px',
      'lg': '1000px',
    },
    extend: {},
  },
  plugins: [],
}
