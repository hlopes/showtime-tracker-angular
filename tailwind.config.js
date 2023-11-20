/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Barlow', 'system-ui'],
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
