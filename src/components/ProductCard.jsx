import React from 'react'
import Btn from './Btn'
import { ourWorksPage } from '@/constants/homeAr'
import Image from 'next/image'

const ProductCard = () => {
	return (
		<>
			{ourWorksPage.map(({ id, location, paragraph, title, pic }) => {
				return (
					<section
						className=' '
						key={id}
					>
						<div
							className={`flex lg:even:flex-row-reverse ${
								id % 2 === 0
									? 'lg:flex-row-reverse'
									: 'lg:flex-row'
							} flex-col items-center justify-between w-full min-h-screen lg:gap-16 gap-8`}
						>
							{/* main map container */}

							<div className='w-full lg:w-1/3 flex flex-col gap-8 lg:gap-8'>
								<h2 className='h2 text-secondary font-lemonada'>
									{title}
								</h2>
								<div className='flex flex-col gap-4'>
									<h5 className='h5 text-secondary'>
										{location}
									</h5>
									<p className='p'>{paragraph}</p>
								</div>
								<Btn
									link={`/ourworks/${id}`}
									title='شاهد العمل بالكامل '
								/>
							</div>
							{/* images */}
							<div className='w-full lg:w-2/3 flex lg:gap-16 gap-8 lg:flex-row flex-col  '>
								<div className=' '>
									<Image
										src={pic[0].img.src}
										alt={pic[0].img.alt}
									/>
								</div>
								<div className=' w-full lg:w-1/2 flex flex-col lg:gap-16 gap-8 justify-between '>
									<Image
										src={pic[1].img.src}
										alt={pic[1].img.alt}
									/>
									<Image
										src={pic[2].img.src}
										alt={pic[2].img.alt}
									/>
								</div>
							</div>
						</div>
					</section>
				)
			})}
		</>
	)
}

export default ProductCard
