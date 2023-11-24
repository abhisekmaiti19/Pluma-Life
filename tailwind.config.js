/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark-blue": "#071A53",
        "bg-page-dark": "#f1f6ff",
        "border-light-blue": "#000066",
        "stroke-light": "#3366FF",
      },
    },
  },
  plugins: [],
};
