import { navigation } from '@/constants/homeAr'
import React from 'react'
import { Link } from 'react-scroll'

const NavLinks = () => {
	return (
		<div className='lg:flex items-center justify-between gap-10 hidden'>
			{navigation.map(({ name, id, target, url }) => (
				<ul
					className=''
					key={id}
				>
					<li className=''>
						<Link
							className='cursor-pointer text-2xl font-vazirmatn'
							to={id}
							smooth={true}
							duration={1200}
						>
							{name}
						</Link>
					</li>
				</ul>
			))}
		</div>
	)
}

export default NavLinks
