/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      // Breakpoint prefix	Minimum width	CSS

      'xsm': "320px",
      // @media (min-width: 640px) { ... }

      'xm': "480px",
      // @media (min-width: 480px) { ... }

      'xxm': "575px",
      // @media (min-width: 575px) { ... }

      'sm':	"640px",
      // @media (min-width: 640px) { ... }

      'md':	"768px",
      // @media (min-width: 768px) { ... }

      'xmd': "992px",
      // @media (min-width: 640px) { ... }

      'lg':	"1024px",	
      // @media (min-width: 1024px) { ... }

      'xl':	"1280px",	
      // @media (min-width: 1280px) { ... }

      '2xl':	"1536px",	
      // @media (min-width: 1536px) { ... }

      '2md': {'min': '890px', 'max': '991px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
    }
  },
  plugins: [],
}

