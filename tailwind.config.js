/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        lg: '1180px',
        xl: '1180px',
        '2xl': '1180px',
      },
    },
    rotate: {
      'y-180': 'rotateY(180deg)',
    },
    backfaceVisibility: {
      'hidden': 'backface-visibility: hidden',
    },
    backgroundImage: {
      'white-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
      'main-gradient': 'linear-gradient(to bottom right, #FFE973, #FFC226)',
      'gray-gradient': 'linear-gradient(to bottom right, #2F2F2F, #776F64, #5A5348)',
      'gray-2-gradient': 'linear-gradient(45deg, #212121 43%, #878787 100%)',
      'gray-gradient-2': 'linear-gradient(to bottom right, #22AD7D, #035035)',
      'main-gradient-green': 'linear-gradient(to bottom right, #66E3B8, #22AD7D)',
    },
    boxShadow: {
      'yellow-shadow': '0px 2px 13px 0px rgba(255, 233, 115, 0.3)', // Градиентная имитация тени
      'inner-border': 'inset 0 0 0 1px rgba(255,255,255, 1)', // Здесь 2px — это толщина бордера
    },
    extend: {
      colors: {
        'primary':'#FFE973',
        'second':'#FFC226',
        'gray': '#2F2F2F',
        'dark': '#212121',
        "green": '#66E3B8',

        'red': '#DA1313',
        'white': '#fff',

        'pink-100':'#FFDFDF',
        'primary-700':'#877bbb',
        'primary-800':'#6f659a',
        'blue-100':'#AEDEFC',
        'blue-900':'#04578B',
        'light': '#EDEEF7',
        'black':'#0D0D0D',
      },
    },
  },
  plugins: [],
}