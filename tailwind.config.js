/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F09D51',
          light: '#f4b77d',
          dark: '#eb8424'
        },
        accent: {
          DEFAULT: '#F06543',
          light: '#f38b71',
          dark: '#ec3f15'
        },
        dark: {
          DEFAULT: '#313638',
          light: '#4a4f52',
          dark: '#181d1e'
        },
        light: {
          DEFAULT: '#E0DFD5',
          lighter: '#E8E9EB',
          darker: '#d7d5c4'
        }
      }
    },
  },
  plugins: [],
};