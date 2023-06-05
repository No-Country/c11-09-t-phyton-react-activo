/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bootcamp-background': '#191414',
        'bootcamp-top': '#A87AF2',
        'bootcamp-bottom': '#5695F3',
        'bootcamp-ads': '#297AF1',
      },
    }
  },
  plugins: [
    require("daisyui")
  ],
}

