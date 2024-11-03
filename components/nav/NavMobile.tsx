import { navigation } from '@/constants/homeAr'
import React from 'react'
import SocialIcons from './SocialIcons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMobile = ({ handleClick }) => {
	const pathname = usePathname()

	return (
		<nav className='flex flex-col'>
			<ul className='text-center h-screen w-screen flex flex-col items-center justify-center gap-y-8 text-base-100 bg-primary/95 transition-all'>
				{navigation.map(({ id, name, target, url }) => {
					return (
						<li key={name}>
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
					)
				})}
				<SocialIcons />
			</ul>
		</nav>
	)
}

export default NavMobile
