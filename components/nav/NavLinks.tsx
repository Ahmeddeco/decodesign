'use client'

import { navigation } from '@/constants/homeAr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
// import { Link } from 'react-scroll'

const NavLinks = () => {
	const pathname = usePathname()
	return (
		<ul className='xl:flex items-center justify-between gap-10 hidden'>
			{navigation.map(({ name, id, url }) => (
				<li
					className=''
					key={id}
				>
					<Link
						className={`${
							pathname === url
								? 'text-secondary'
								: 'text-base-100'
						} cursor-pointer  text-2xl font-bold font-vazirmatn`}
						href={url}
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavLinks
