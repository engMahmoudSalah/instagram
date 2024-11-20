/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: '#0095f6',
          gradient: {
            start: '#405de6',
            end: '#fd1d1d',
          },
        },
      },
    },
  },
  plugins: [],
};