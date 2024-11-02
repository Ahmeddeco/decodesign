import './globals.css'
import { Vazirmatn, Lemonada, Bungee_Outline } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/nav/Nav'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import localFont from 'next/font/local'
// fonts --------------------------------
const vazirmatn = localFont({
	src: '../fonts/Vazirmatn-VariableFont_wght.ttf',
	variable: '--font-vazirmatn',
})

const lemonada = localFont({
	src: '../fonts/Lemonada-VariableFont_wght.ttf',
	variable: '--font-lemonada',
})

// metadata -----------------------------
export const metadata = {
	title: 'Deco Design',
	description: 'Deco Design is a 3d studio for interiors and decor.',
	metadataBase: new URL('https://acme.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'ar-AR': '/ar-AR',
		},
	},
	openGraph: {
		images: '/og-image.png',
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='ar'
			dir='rtl'
			className={`${lemonada.variable} ${vazirmatn.variable} `}
		>
			<body className=' bg-primary '>
				<Nav />
				<main className='bg-boxesBg bg-contain'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
