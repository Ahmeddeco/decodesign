import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        largBg: "url('/images/home/background dark.webp')",
        smallBg: "url('/smallBg.webp')",
        boxesBg: "url('/images/home/boxes.webp')",
      },
      fontFamily: {
        marhey: ['var(--font-marhey)'],
        cairo: ['var(--font-cairo)'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
  },
  plugins: [daisyui, '@tailwindcss/typography'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#181716',
          secondary: '#D48E24',
          accent: '#419DF0',
          neutral: '#3C3C3C',
          'base-100': '#D4D4D3',
        },
      },
    ],
  },
}
export default config
