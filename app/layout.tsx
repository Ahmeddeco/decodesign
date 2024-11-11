import './globals.css'
import Footer from '../components/Footer'
import Nav from '../components/nav/Nav'
import localFont from 'next/font/local'
// fonts --------------------------------
const marhey = localFont({
	src: './fonts/Marhey-VariableFont_wght.ttf',
	variable: '--font-marhey',
})

const cairo = localFont({
	src: './fonts/Cairo-VariableFont_slnt,wght.ttf',
	variable: '--font-cairo',
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ar'
			dir='rtl'
			className={`${cairo.variable} ${marhey.variable} `}
		>
			<body className=' bg-primary '>
				<Nav />
				<main className='bg-boxesBg bg-contain pt-20'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
