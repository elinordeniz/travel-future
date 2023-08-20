/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  screens: {
      sm: '270px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  colors: {
    'blue': '#9bcaeb',
    'purple': '#6f2b8d',
    'pink': '#ce0058',
    'red': '#c60000',
    'orange': '#f7a827',
    'green': '#00a34e',
    'yellow': '#feeb3d',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'indigo': '#005eb8',
    'cyan': '#00a9e0',
    'teal': '#0090c1',
    'pacific':'#9BCAEB',
    'white': '#fff',
    'grayish': '#f8f9fa'

  },
  fontFamily: {
    sans: ['Open Sans', 'sans-serif'],
    serif: ['Montserrat', 'serif'],
  },
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
    backgroundImage:{
      'hero': "url('hero.jpg')"
    }
  }
},
}