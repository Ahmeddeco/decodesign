import { about, state } from '@/constants/homeAr'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
	return (
		<section
			className='flex flex-col xl:flex-row bg-box xl:gap-52 gap-14 items-center justify-between'
			id='aboutus'
		>
			{/* text */}
			<div className='flex-1 '>
				<div className='flex-col flex gap-9 justify-center xl:items-start items-center'>
					<h2 className='h2 text-gold font-lemonada font-medium'>
						{about.title}
					</h2>
					<p className='font-vazirmatn xl:text-start text-center'>
						{about.p1}
					</p>
					<p className='font-vazirmatn xl:text-start text-center'>
						{about.p2}
					</p>
					<div className='flex gap-10'>
						{state.map((item, index) => {
							return (
								<div
									className='flex flex-col'
									key={index}
								>
									<h4 className='h4 font-vazirmatn'>
										{item.value}
									</h4>
									<h6 className='h6 font-lemonada text-gold'>
										{item.title}
									</h6>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			{/* photo */}
			<div className=' flex-1'>
				<Image
					src={about.img}
					alt={about.title}
					className='w-full'
				/>
			</div>
		</section>
	)
}

export default AboutUs
