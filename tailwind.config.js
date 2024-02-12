/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hiromisake: ["hiromisake"],
        nova: ["nova"],
      },
      colors: {
        customBlue: "#254866",
        customBlue2: "#172D40",
        customPurple: "#321137",
        customLightP: "#5F3D65",
        customGreen: "#183434",
      },
    },
  },
  plugins: [],
};
