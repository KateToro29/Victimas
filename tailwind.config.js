/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Reemplaza 'purge' por 'content'
  theme: {
    extend: {
      colors: {
        customPurple: '#7A1F7E',
        cardBackground: '#D9D9D9',  // Fondo para la tarjeta
        titleBackground: '#FFBF00',  // Fondo para el título
        textBackground:'#003150', // color del Texto targeta 
      },
    },
  },
  plugins: [],
}
