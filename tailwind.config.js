import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				largBg: "url('/largBg.webp')",
				smallBg: "url('/smallBg.webp')",
			},
			fontFamily: {
				vazirmatn: ['var(--font-vazirmatn)'],
				lemonada: ['var(--font-lemonada)'],
			},

			colors: {
				gold: '#F5A524',
				darkblack: '#181716',
				Dark_Gray: '#242421',
				Black75: '#3C3C3C',
				Black50: '#9C9B9B',
				Black25: '#B6B6B6',
				Black10: '#CDCCCC',
				Black5: '#D4D4D3',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1300px',
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
export default config
