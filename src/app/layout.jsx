import './globals.css'
import { Vazirmatn, Lemonada, Bungee_Outline } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/(navbar)/Nav'
import { GoogleTagManager } from '@next/third-parties/google'

// fonts --------------------------------
const vazirmatn = Vazirmatn({
	subsets: ['arabic'],
	// display: 'swap',
	variable: '--font-vazirmatn',
})

const lemonada = Lemonada({
	subsets: ['arabic'],
	// display: 'swap',
	variable: '--font-lemonada',
})

const bungeeOutline = Bungee_Outline({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bungeeOutline',
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
			className={`${lemonada.variable} ${vazirmatn.variable} ${bungeeOutline.variable}`}
		>
			<GoogleTagManager
				gtmId='
GTM-KMQFT9FD
'
			/>
			<body className=' bg-primary '>
				<Nav />
				<main className='bg-boxesBg'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
