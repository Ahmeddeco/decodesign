import Nav from '@/components/Nav'
import './globals.css'
import Footer from '@/components/Footer'
import { Vazirmatn, Lemonada } from 'next/font/google'

// fonts --------------------------------
const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
})

const lemonada = Lemonada({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lemonada',
})

// metadata -----------------------------
export const metadata = {
  title: 'ديكو ديزاين',
  description: 'تصميم ديكور ثلاثي الابعاد ، وتشطيبات متكاملة.',
}


export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl' className={`${lemonada.variable} ${vazirmatn.variable}`}>
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
