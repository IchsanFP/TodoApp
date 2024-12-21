/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Aktifkan mode dark berbasis class
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'brown-pod': {
          '50': '#fff2eb',
          '100': '#fedac7',
          '200': '#fdb28a',
          '300': '#fc8a4d',
          '400': '#fb6f24',
          '500': '#f55d0b',
          '600': '#d95006',
          '700': '#b44509',
          '800': '#923c0e',
          '900': '#78340f',
          '950': '#451a03',
        },
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
