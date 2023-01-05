/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zinc': {
          750: '#2c2c30',

        }
      },
      // backgroundImage: {
      //   'base-panel': "url('../assets/dawn-bg.png')",
      // },
      zIndex: {
        '1': '1',
      },
      animation: {
        'text':'text 7s ease infinite',
      },
      keyframes: {
          text: {
              '0%, 100%': {
                'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      }
    },
  },
  plugins: [],
}
