/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // eslint-disable-next-line no-used-vars
      backgroundImage: (_) => ({
        'custom-background': "url('./src/assets/pexels-muverrihhanim-12901642.jpg')"
      })
    },
  },
  plugins: [],
}

