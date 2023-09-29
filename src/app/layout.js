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
  title: 'ديكو ديزاين | Deco Design',
  description: 'تصميم ديكور ثلاثي الابعاد ، وتشطيبات متكاملة.',

}


export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl' className={`${lemonada.variable} ${vazirmatn.variable}`}>
      <body>
        <main >
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
