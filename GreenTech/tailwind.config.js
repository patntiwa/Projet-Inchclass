/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        backgroundImage: {
          'footer-texture': "url('#')",
        },
      },
    },
    plugins: [],
  }
  