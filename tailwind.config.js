/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        1000: '1000px',
        1250: '1250px',
        2000: '2000px',
      },
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
}

