/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      textStrokeWidth: {
        1: "1px",
        2: "2px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        roboto: ["Roboto", "sans-setif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
