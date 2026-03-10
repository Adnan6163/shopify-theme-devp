/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.jason',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.jason',
    './templates/customers/*.liquid',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

