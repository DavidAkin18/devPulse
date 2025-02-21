/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002D72",
        accent: "#27AE60",
        neutral: "#BDC3C7",
        secondary: "#00BFFF",
        white:'#ffffff'
      },
    },
  },
  plugins: [],
}

