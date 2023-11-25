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
        "skyblue-light": "#3F73C3",
      },
      screens: {
        mobile: "200px",
      },
      backgroundImage: {
        "bordergradient-1":
          "linear-gradient(140.56deg,#071a53 10%,rgba(7, 26, 83, 0) 109.66%)",
        "bggradient-1":
          "linear-gradient(140.56deg, #75b1de 0%, #ffffff 109.66%)",
      },
    },
  },
  plugins: [],
};
