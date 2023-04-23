/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      width:{
         '450': '28.125rem',
         '400':'25rem',
          '550':'34.375rem',
         '600':'37.5rem'
      },
      height:{
        '450': '28.125rem',
          '350':'21.875rem'
      },
      fontSize:{
         'Large':'2.3rem',
          'Medium':'1.8rem',
          'Small':'1rem'
      },
     colors:{
      'primiray-text':'#68162C',
       'secondary-text': '#0E186D',
      'bgColor': '#e3eff0' , 
      'Nav': '#d0e5e7'

     },
      fontFamily:{
        'monument': ['Monument Extended'],
        'sfPro':['SF Pro Display'],
         'sfProItalic':['SF Pro Display italic']
      },
      borderRadius:{
         'Lg': '3rem'
      }
    },
  },
  plugins: [],
}

