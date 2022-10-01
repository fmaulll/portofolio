/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        sm: "0 1px 1px rgb(255 255 255 / 0.1)",
        "sm-top": "0 -1px 1px rgb(255 255 255 / 0.1)",
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "spin-slow": "spin 120s linear infinite",
      },
      colors: {
        "black-invisible": "rgba(0, 0, 0, 0.5)",
        purple: "#0c0020",
        "purple-light": "#a05bae",
        blue: "#190036",
        "blue-sky": "#418ee1",
        yellow: "#fdb917",
        red: "#b9374d",
        gray: "#97a7a6",
        green: "#7fb271"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
