import './globals.css'
import { Vazirmatn, Lemonada } from 'next/font/google'
import { Providers } from './providers'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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
			<body className=''>
				<Providers>
					<main className=' container'>
						<NavBar />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}
