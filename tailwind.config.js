/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    extend: {
      logo: {
        russo: ['"Russo One"', "sans-serif"],
      },
      body: {
        worksans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

