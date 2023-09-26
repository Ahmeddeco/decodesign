import Image from 'next/image'
import { logo, social } from '../app/data'
import Link from 'next/link'
import Button from './Button'
// import { useState } from 'react'
import NavLinks from './NavLinks'

const Nav = () => {
  // const [nav, setNav] = useState(false)

  return (
    <nav className='py-2 px-28 flex justify-between items-center fixed z-50 bg-opacity-20 bg-darkblack w-full '>
      {/* ----------------- logo ---------------- */}
      <Link href='/'>
        <Image
          src={logo.src}
          width={48}
          height={62}
          alt={logo.alt}
        />
      </Link>

      {/* -------------- nav links -------------- */}

      <NavLinks />

      {/* ------------- Social Icons ------------ */}
      <div className='flex'>
        {social.map(({ socialName, icon, url }) => {
          return (
            <ul key={socialName}>
              <li className='px-2 duration-300 scroll-smooth text-2xl text-Black10 hover:text-gold'>
                <Link
                  href={url}
                  target='_blank'>
                  {icon}
                </Link>
              </li>
            </ul>
          )
        })}
      </div>
      <Button
        title='اتصل بنا'
        url='https://wa.me/+201152640142'
      />
    </nav>
  )
}

export default Nav
