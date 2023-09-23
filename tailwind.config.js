/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['--font-vazirmatn'],
        roboto: ['--font-lemonada'],
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },

    colors: {
      gold: '#B68944',
      darkblack: '#161615',
      Dark_Gray: '#2C2C2A',
      Black75: '#3C3C3C',
      Black50: '#9C9B9B',
      Black25: '#B6B6B6',
      Black10: '#CDCCCC',
      Black5: '#D4D4D3',
    },
    body: '#161615',
  },
  plugins: [],
}
