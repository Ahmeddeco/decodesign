import React from 'react'
import Logo from './Logo'
import { footer } from '@/constants/homeAr'
import SocialIcons from './nav/SocialIcons'

const Footer = () => {
	return (
		<footer className='mx-auto bg-primary py-10'>
			{/* main container */}
			<div className='flex lg:flex-row flex-col  justify-between lg:items-start items-center lg:px-40 lg:py-20 py-8 px-6 w-screen lg:w-full lg:gap-12 gap-8 '>
				{/* logo */}
				<div className='flex flex-col items-center lg:items-start justify-center gap-8  lg:w-4/12  '>
					<div className=''>
						<Logo />
					</div>
					<div className=''>
						<p className='p '>{footer.mainParagraph}</p>
					</div>
				</div>
				{/* our services */}
				<div className='flex flex-col gap-8 items-center justify-center lg:w-4/12 '>
					<h3 className='h3 text-secondary '>
						{footer.ourServices.title}
					</h3>
					<div className=''>
						{footer.ourServices.service.map((item, index) => {
							return (
								<ul
									key={index}
									className='flex flex-col items-center justify-center'
								>
									<li className=''>
										<p className='p'>{item}</p>
									</li>
								</ul>
							)
						})}
					</div>
				</div>
				{/* Social Icons */}
				<div className='flex flex-col gap-8 lg:items-end items-center lg:w-4/12 '>
					<h3 className='h3 text-secondary '>
						{footer.communication.title}
					</h3>
					<div className=''>
						<SocialIcons />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
