/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'container': '1024px',
      },
      fontFamily:{
        "jet" : ["JetBrains Mono","monospace"]
      }
    },
  },
  plugins: [],
}