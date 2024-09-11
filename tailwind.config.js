/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'bordercolorblue':'#96BEE7',
      'white':'#FFFFFF',
      'blue': '#1fb6ff',
      'green': '#13ce66',
      'gray-dark': '#363C43',
      'gray': '#616161D1',
      'gray-light': '#4A4E54',
      'black':'#171717',
      'fontgraycolor':'#A3ADB2',
      'navdark':'#28292F',
      'textgray':"#969696",
      'hovertextgray':"#C4A4E51A",
      'addimagebg': '#FFFFFF08'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins','serif'],
      plus:['Plus','Jakarta' ,'Sans']
    },
   
    extend: {
      boxShadow: {
        'custom-1': '0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset',
        'custom-2': '0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) inset',
        'custom-3': '9px 10px 7.1px rgba(0, 0, 0, 0.4)',
        'custom-4': '-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25)',
        'custom-5': '4px 5px 30px 5px rgba(16, 18, 19, 1)',
        'custom-6': '-5px -3px 30px -10px rgba(150, 190, 231, 1)',

      },
     

    },
  },
  variants: {
  },
  plugins: [],
}

