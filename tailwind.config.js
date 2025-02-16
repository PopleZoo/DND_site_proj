/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo
          light: '#818CF8',
          dark: '#4F46E5'
        },
        accent: {
          DEFAULT: '#EC4899', // Pink
          light: '#F472B6',
          dark: '#DB2777'
        },
        dark: {
          DEFAULT: '#0F172A', // Slate 900
          light: '#1E293B', // Slate 800
          dark: '#020617'  // Slate 950
        },
        light: {
          DEFAULT: '#F8FAFC', // Slate 50
          lighter: '#FFFFFF',
          darker: '#E2E8F0' // Slate 200
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-accent': '0 0 20px rgba(236, 72, 153, 0.15)'
      }
    },
  },
  plugins: [],
};