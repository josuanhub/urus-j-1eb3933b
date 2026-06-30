/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          50:  '#f0efff',
          100: '#e3e1ff',
          200: '#cbc7ff',
          300: '#ada6ff',
          400: '#8d83ff',
          500: '#6C63FF',
          600: '#5a4ff5',
          700: '#4c3fdd',
          800: '#3e33b3',
          900: '#33298c'
        },
        accent: {
          DEFAULT: '#00D4AA',
          50:  '#e6fff9',
          100: '#ccfff3',
          200: '#99ffe7',
          300: '#66ffdb',
          400: '#33ffcf',
          500: '#00D4AA',
          600: '#00aa88',
          700: '#008066',
          800: '#005544',
          900: '#002b22'
        },
        surface: {
          DEFAULT: '#1A1A2E',
          50:  '#f0f0f7',
          100: '#d6d6ee',
          200: '#adaddd',
          300: '#8484cc',
          400: '#5b5bbb',
          500: '#3232aa',
          600: '#282888',
          700: '#1e1e66',
          800: '#141444',
          900: '#1A1A2E'
        },
        base: {
          DEFAULT: '#0A0A0F',
          light: '#12121a',
          dark:  '#050508'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
        'gradient-surface': 'linear-gradient(180deg, #1A1A2E 0%, #0A0A0F 100%)'
      },
      boxShadow: {
        'primary': '0 0 20px rgba(108, 99, 255, 0.35)',
        'accent':  '0 0 20px rgba(0, 212, 170, 0.35)',
        'card':    '0 4px 24px rgba(0, 0, 0, 0.4)'
      }
    }
  },
  plugins: []
}