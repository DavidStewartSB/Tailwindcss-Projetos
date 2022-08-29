/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      },
      colors: {
        'darkblue-500': '#485769',
        'darkblue-600': '#37475a',
        'darkblue-700': '#232f3e',
        'darkblue-900': '#191e26',
        'darkblue-950': '#131a22',
        'darkblue-990': '#0F1111',
        'gold-100': '#febd69',
        'gold-200': '#faa63a',
        'orange-650': '#E47911',
        'yellow-350': '#F0C14B'
      },
      spacing: {
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px'
      }
    },
  },
  plugins: [],
}
