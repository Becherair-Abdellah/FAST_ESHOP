/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        opensans: ['Open Sans','sans-serif'],
      },backgroundColor:{
        greenColor: '#0da487',
        other_bg_1:'rgba(13,164,135,0.1)',
        other_bg_2: 'rgba(116,125,198,0.1)',
        other_bg_3: 'rgba(239,63,62,0.1)',
        other_bg_4: 'rgba(158,101,194,0.1)',
      },
      gradientColorStops:{
        color_1: '#0da487',
        color_2: '#009289',
        color_3: '#ffa53b'
      },
      colors:{
        c1: '#0da487',
        c2: '#747dc6',
        c3: '##ef3f3e',
        c4: '##9e65c2',
        c5: '#ff7272'
      }
    },
  },
  plugins: [],
}