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
	const handleClick = () => setMobileNav(!mobileNav)

	return (
		<header className='fixed z-50  bg-primary/95'>
			<nav className='w-screen flex  items-center justify-between py-4 px-8  xl:py-4 xl:px-20  mx-auto'>
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
				<div className='xl:block hidden'>
					<SocialIcons />
				</div>

				{/*--------- Menu Icon -------- */}

				<div
					onClick={handleClick}
					className='xl:text-4xl text-lg text-gold z-50 xl:hidden block'
				>
					{mobileNav ? <TfiClose /> : <TfiMenu />}
				</div>
			</nav>
			{/*---------Mobile Menu-------- */}
			<div
				className={`${
					mobileNav ? 'left-0' : '-left-full'
				} xl:hidden fixed bottom-0 w-screen transition-all gap-y-4 bg-darkblack mt-8`}
				onClick={handleClick}
			>
				{/*---------Mobile Nav-------- */}
				<NavMobile handleClick={handleClick} />
			</div>
		</header>
	)
}

export default Nav
