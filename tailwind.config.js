/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'unbounded': ['unbounded'],
      'poppins': ['poppins'],
    },
    lineHeight: {
      'h1-lh': '1.04',
      'text': '1.2',
    },
    colors: {
      'ocean': '#6FFFFF',
      'white': '#FFFFFF'
    },
    backgroundImage: {
      'body-texture': "url('static/img/background.webp')",
    }
  },
  plugins: [],
}

