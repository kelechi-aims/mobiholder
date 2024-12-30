/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        "xll": "1440px",
      },
      backgroundImage: {
        "nav-gradient": "linear-gradient(to right, rgba(1, 12, 16, 0.42), rgba(1, 21, 26, 0.4))",
        "about-text-gradient": 'linear-gradient(93.98deg, #A324F2 0%, #242EF2 97.91%)',
        "feature-border": "linear-gradient(100.05deg, rgba(255, 255, 255, 0.09) 2.16%, rgba(255, 255, 255, 0) 101.73%)",
        "feature-card": "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
        "feat-card-bdr": "linear-gradient(81.07deg, #2C2D47 53.33%, rgba(68, 74, 226, 0.05) 93.73%)",
        "cta-text": "linear-gradient(93.98deg, #DFD9FE 0%, #5D81ED 97.91%)",
        "news-text": "linear-gradient(93.98deg, #DFD9FE 0%, #5D81ED 97.91%)",
        "news-bdr": "linear-gradient(92.59deg, #EAF85B 0%, #7995FB 100%)",
        "news-logo": "linear-gradient(90deg, #020D11 0%, rgba(2, 13, 17, 0) 100%)",
        "news-logo2": "linear-gradient(-90deg, #020D11 0%, rgba(2, 13, 17, 0) 100%)",


      },
      backdropBlur: {
        'nav-blur': '53.8px', 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'grifter': ['Grifter', "Bebas Neue", 'sans-serif'],
        'rubik': ['Rubik', 'serif'],
        'roboto': ['Roboto', 'serif'],
        'mulish': ['Mulish', 'serif'],
        'unbounded': ['Unbounded', 'serif'],
      },
      colors: {
        'purple': '#a324f2',
      },
      boxShadow: {
        'about-sh': '0px 4px 28px 0px rgba(0, 0, 0, 0.15)',
      },
      
    },
    
  },
  plugins: [require("tailwind-scrollbar")],
}