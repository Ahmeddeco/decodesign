import React from 'react'
import Logo from './Logo'
import { footer } from '@/constants/homeAr'
import SocialIcons from './(navbar)/SocialIcons'

const Footer = () => {
	return (
		<footer className='mx-auto bg-primary'>
			{/* main container */}
			<div className='flex lg:flex-row flex-col  justify-between items-start lg:px-40 lg:py-20 py-8 px-6 w-screen lg:w-full lg:gap-12 gap-8 '>
				{/* logo */}
				<div className='flex flex-col gap-8  lg:w-4/12  '>
					<div className=''>
						<Logo />
					</div>
					<div className=''>
						<p className='p '>{footer.mainParagraph}</p>
					</div>
				</div>
				{/* our services */}
				<div className='flex flex-col gap-8 items-center lg:w-4/12 '>
					<h4 className='h4 text-secondary font-lemonada'>
						{footer.ourServices.title}
					</h4>
					<div className=''>
						{footer.ourServices.service.map((item, index) => {
							return (
								<ul
									key={index}
									className=''
								>
									<li className=''>
										<p className='p'>{item}</p>
									</li>
								</ul>
							)
						})}
					</div>
				</div>
				{/* contact us */}
				<div className='flex flex-col gap-8 items-end  lg:w-4/12 '>
					<h4 className='h4 text-secondary font-lemonada'>
						{footer.communication.title}
					</h4>
					<div className=''>
						<SocialIcons />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
