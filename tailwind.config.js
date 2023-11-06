/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    colors:{
      primaryRed:'#FF2D2D'
    },
    extend: {
      backgroundImage: {
        'bannerImage': "url('/img/home/banner_img.png')",
      }
    }
  },
  plugins: [],
}

