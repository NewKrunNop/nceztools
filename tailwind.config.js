/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.vue',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
],
}

