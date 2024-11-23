/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#ffffff'
        },
        black: {
          DEFAULT: '#000000'
        },
        gray: {
          DEFAULT: '#E9E9E9',
          dark: '#B6B6B6'
        },
        blue: {
          DEFAULT: '#0077CC',
          dark: '#005C99'
        },
        red: {
          DEFAULT: '#FF0000',
          dark: '#CC0000'
        },
      },
    },
    plugins: [],
  }
}


