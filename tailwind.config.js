/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pale_voilent: '	#d89eff',
        Moderate_Violet: '#9241c8',
        Desaturated_Dark: '	#6e5d7e',
        Grayish_Blue: '	#c6cacd',
        Very_dark_violet: '#3e2753',
        Dark_Grayish: '	#a39daa',
        Light_Magenta: '#e942ff',
        Light_Violet: '	#8838ff',
        Light_Grayish_Violet: '#f5f3f7',
        Very_Light_Magenta: '	#e570ff'
      },
      fontFamily: {
        Rubika: ['Rubik', 'sans-serif']
      },
      fontSize: {
        s: '9px',
      }
    },
  },
  plugins: [],
}

