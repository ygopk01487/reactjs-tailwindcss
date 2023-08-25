/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
      zIndex: {
        9999: "9999",
      },
      transitionProperty: {
        height: "height",
        translateX: "translateX",
        top: "top",
      },
      colors: {
        blackRgba: "rgba(0,0,0,0.4)",
        blackRgb: "rgb(0,0,0",
      },
    },
  },
  plugins: [],
};
