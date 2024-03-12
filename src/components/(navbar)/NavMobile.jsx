import { navigation } from '@/constants/homeAr'
import React from 'react'
import { Link } from 'react-scroll'
import SocialIcons from './SocialIcons'

const NavMobile = ({handleClick}) => {

	return (
		<nav className='flex flex-col'>
			<ul className='text-center h-screen w-screen flex flex-col items-center justify-center gap-y-8 text-foreground'>
				{navigation.map(({ id, name, target, url }) => {
					return (
						<li key={name}>
							<Link
								className='cursor-pointer text-xl'
								to={id}
								smooth={true}
								duration={800}
								onClick={handleClick}
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
