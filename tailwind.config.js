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
    letterSpacing: {
      'h3-ls': '6.4px',
    },
    colors: {
      'forest': '#143D3D',
      'ocean': '#6FFFFF',
      'white': '#FFFFFF',
      'dirt': '#654D40',
      'dark': '#1E1E1E',
    },
    backgroundImage: {
      'body-texture': "url('static/img/background.webp')",
    }
  },
  plugins: [],
}

