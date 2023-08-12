/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'Press Start 2P': ['Press Start 2P', 'cursive']

    },
    extend: {
      colors: {
        'bg-primary': '#0f1318',
      },
    },
  },
  plugins: [],
}
