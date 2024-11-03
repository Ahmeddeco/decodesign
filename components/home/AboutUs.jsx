import { about, state } from '@/constants/homeAr'
import Image from 'next/image'
import React from 'react'
import Btn from '../Btn'

const AboutUs = () => {
	return (
		<section
			className='flex flex-col md:flex-row   gap-14 items-center justify-evenly min-h-screen'
			id='aboutus'
		>
			{/* text */}
			<div className='md:w-4/12 w-full'>
				<div className='flex-col flex gap-9 justify-center items-start '>
					<h2 className='h2 text-base-100 font-lemonada font-medium'>
						{about.title}{' '}
						<span className='h2 text-secondary font-lemonada font-medium'>
							{about.span}
						</span>
					</h2>
					<div className='flex flex-col lg:gap-8 gap-4'>
						<p className='p '>{about.p1}</p>
						<p className='p'>{about.p2}</p>
					</div>
					{/* status */}
					<div className='flex gap-10'>
						{state.map((item, index) => {
							return (
								<div
									className='flex flex-col even:border-x even:px-8 even:border-secondary items-center justify-center'
									key={index}
								>
									<h4 className='h4 font-vazirmatn font-normal text-base-100'>
										{item.value}
									</h4>
									<h6 className='h6 font-lemonada text-secondary'>
										{item.title}
									</h6>
								</div>
							)
						})}
					</div>
					<Btn title='شاهد المزيد من أعمالنا' link='/ourworks' />
				</div>
			</div>
			{/* photo */}
			<div className=' md:w-4/12 w-full'>
				<Image src={about.img} alt={about.title} className='w-full' />
			</div>
		</section>
	)
}

export default AboutUs
