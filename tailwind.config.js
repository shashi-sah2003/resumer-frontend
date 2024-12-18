/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.7s ease-out forwards',
      },
      colors:{
        customGrey : "#363636", 
      },
      fontFamily:{
        kanit: ['Kanit'], 
        pacifico : ['Pacifico']
      }
    },
  },
  plugins: [],
}