import './globals.css'
import { Vazirmatn, Lemonada } from 'next/font/google'
import Nav from '@/components/Nav'
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
			<body>
				<Providers>
					<main>
						<Nav />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}
