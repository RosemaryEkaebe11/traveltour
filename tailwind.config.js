/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': '#D66214',

      },
      screens:{
       

        'sm': {'min': '640px'	},  
        // @media (min-width: 640px) { ... }
        'md': {'min': '768px'	},  
        // @media (min-width: 768px) { ... }
        'xlg': {'min': '992px'},
        'lg': {'min': '1024px'},	
        // @media (min-width: 1024px) { ... }
        'xl': {'min': '1280px'},	
        // @media (min-width: 1280px) { ... }
        '2xl':{'min': '1536px'},	
        // @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}