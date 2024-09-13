/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '25': '0.25',
        '75': '0.75',
        '175': '1.75',
        '200': '2',
      },
    },
  },
  plugins: [],
}

