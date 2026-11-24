/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFBF0',
          100: '#FFF4D6',
          200: '#FFE7AD',
          300: '#FFD684',
          400: '#FFC55B',
          500: '#C9A961',
          600: '#B8954A',
          700: '#8B6F47',
          800: '#5E4A2F',
          900: '#3E2723',
        },
        bronze: {
          50: '#F5F0E6',
          100: '#E8D7C3',
          200: '#D7CCC8',
          300: '#BCAAA4',
          400: '#A1887F',
          500: '#8B6F47',
          600: '#795548',
          700: '#6D4C41',
          800: '#5D4037',
          900: '#3E2723',
        }
      },
      fontFamily: {
        'arabic': ['Cairo', 'Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
