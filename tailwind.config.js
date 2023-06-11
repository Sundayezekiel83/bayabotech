/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appcolor: {
          500: "#3956d1",
        },
      },
    },
  },
  plugins: [],
};
