'use client'

import Image from 'next/image'
import { logo, navigation, social } from '../app/data'
import Link from 'next/link'
import Button from './Button'
import { useState } from 'react'

const Nav = () => {
  const [nav, setNav] = useState(false)

  return (
    <nav className='py-2 px-[122px] flex justify-between items-center fixed z-50 bg-opacity-20 bg-darkblack w-full '>
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

      <div className='flex'>
        {navigation.map(({ name, href }) => {
          return (
            <ul key={name}>
              <li className='px-8 text-Black10 hover:text-gold font-extrabold text-2xl duration-300 scroll-smooth'>
                <Link href={href}>{name}</Link>
              </li>
            </ul>
          )
        })}
      </div>
      {/* ------------- Social Icons ------------ */}
      <div className='flex'>
        {social.map(({ socialName, icon, url }) => {
          return (
            <ul key={socialName}>
              <li className='px-4 duration-300 scroll-smooth text-3xl text-Black10 hover:text-gold'>
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
        url='www.google.com'
      />
    </nav>
  )
}

export default Nav
