import './globals.css'
import { Vazirmatn, Lemonada } from 'next/font/google'
import Footer from '@/components/Footer'
import Nav from '@/components/(navbar)/Nav'

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
			className={`${lemonada.variable} ${vazirmatn.variable}`}
		>
			<body className='dark text-Black10 bg-primary '>
				<Nav />
				<main className=''>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
