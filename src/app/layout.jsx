import './globals.css'
import { Vazirmatn, Lemonada } from 'next/font/google'
import { Providers } from './providers'
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
	title: 'deco design',
	description: 'Deco design 3d studio ',
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
			<body className='dark text-foreground bg-background'>
				<Providers>
					<main className=' container '>
						<Nav />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}
