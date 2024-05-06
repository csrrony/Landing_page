/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        top:"#42A2FE",
        heading:"#1F2536",
        button:"#FB913D",
        first:"white",
        second:"#F1F4F9"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

