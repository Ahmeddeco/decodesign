import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
})

export const metadata = {
  title: 'ديكو ديزاين',
  description: 'تصميم ديكور ثلاثي الابعاد ، وتشطيبات متكاملة.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
