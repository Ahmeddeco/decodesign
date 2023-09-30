'use client'

import Image from 'next/image'
import { logo } from '../constants/data'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import NavMobile from './NavMobile'
import { TfiClose, TfiMenu } from 'react-icons/tfi'
import { useState } from 'react'

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      <header className='py-2 lg:px-16 px-8 w-full fixed z-50 bg-opacity-80  bg-darkblack'>
        <nav className='flex justify-between items-center lg:gap-8'>
          {/* ----------------- logo ---------------- */}
          <div className=''>
            <Link href='/'>
              <Image
                src={logo.src}
                alt={logo.alt}
              />
            </Link>
          </div>

          {/* -------------- nav links -------------- */}

          <NavLinks />

          {/* ------------- Social Icons ------------ */}
          <div className='hidden lg:block'>
            <SocialIcons />
          </div>

          {/* ------------- close & open ------------ */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='lg:text-4xl text-2xl text-gold z-50 lg:hidden block'>
            {mobileNav ? <TfiClose /> : <TfiMenu />}
          </div>
        </nav>
        {/* --------------- mobileNav -------------- */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } lg:hidden fixed bottom-0 w-screen transition-all gap-y-4 bg-darkblack mt-8 `}>
          <NavMobile />
        </div>
      </header>
    </>
  )
}

export default Nav
