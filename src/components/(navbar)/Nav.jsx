'use client'

import { logo, navigation } from '@/constants/homeAr'
import Image from 'next/image'
import { useState } from 'react'
import { TfiClose, TfiMenu } from 'react-icons/tfi'
import NavMobile from './NavMobile'
import SocialIcons from './SocialIcons'
import NavLinks from './NavLinks'
import Link from 'next/link'

const Nav = () => {
	const [mobileNav, setMobileNav] = useState(false)

	return (
		<header className='fixed z-50  bg-background/80 '>
			<nav className='w-screen flex  items-center justify-between py-2 px-4 lg:px-52 lg:py-6 mx-auto'>
				{/*--------- logo-------- */}
				<Link href='/'>
					<Image
						src={logo.src}
						alt={logo.alt}
					/>
				</Link>

				{/*--------- Desktop Nav Links -------- */}

				<NavLinks />

				{/*--------- Social-------- */}
				<div className='lg:block hidden'>
					<SocialIcons />
				</div>

				{/*--------- Menu Icon -------- */}

				<div
					onClick={() => setMobileNav(!mobileNav)}
					className='lg:text-4xl text-2xl text-gold z-50 lg:hidden block'
				>
					{mobileNav ? <TfiClose /> : <TfiMenu />}
				</div>
			</nav>
			{/*---------Mobile Menu-------- */}
			<div
				className={`${
					mobileNav ? 'left-0' : '-left-full'
				} lg:hidden fixed bottom-0 w-screen transition-all gap-y-4 bg-darkblack mt-8`}
			>
				<NavMobile />
			</div>
		</header>
	)
}

export default Nav
