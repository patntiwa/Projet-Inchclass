/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./assets/images/hero_section.png')",
          'footer-texture': "url('#')",
        },
      },
    },
    plugins: [],
  }
  