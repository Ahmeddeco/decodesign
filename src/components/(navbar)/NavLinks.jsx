import { navigation } from '@/constants/homeAr'
import React from 'react'
import { Link } from 'react-scroll'

const NavLinks = () => {
	return (
		<ul className='xl:flex items-center justify-between gap-10 hidden'>
			{navigation.map(({ name, id, target, url }) => (
				<li
					className=''
					key={id}
				>
					<Link
						className='cursor-pointer text-lg font-vazirmatn'
						to={id}
						smooth={true}
						duration={1200}
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavLinks
