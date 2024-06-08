import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				largBg: "url('/images/home/background dark.webp')",
				smallBg: "url('/smallBg.webp')",
				boxesBg: "url('/images/home/boxes.webp')",
			},
			fontFamily: {
				vazirmatn: ['var(--font-vazirmatn)'],
				lemonada: ['var(--font-lemonada)'],
				bungeeOutline: ['var(--font-bungeeOutline)'],
			},

			colors: {
				// gold: '#F5A524',
				// darkblack: '#181716',
				// Dark_Gray: '#242421',
				// Black75: '#3C3C3C',
				// Black50: '#9C9B9B',
				// Black25: '#B6B6B6',
				// Black10: '#CDCCCC',
				// Black5: '#D4D4D3',
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
					secondary: '#D28E25',
					accent: '#419DF0',
					neutral: '#3C3C3C',
					'base-100': '#D4D4D3',
				},
			},
		],
	},
}
export default config
