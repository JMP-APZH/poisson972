// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         primarycolor: "#F9A826",
//       },
//     },
//     fontFamily: {
//       display: ["Nunito", "sans-serif"],
//     },
//   },    
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: (theme) => ({
        'wave-img': "url('assets/wave2.png')",
      }),
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',  
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}