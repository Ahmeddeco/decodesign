import React from 'react'
import Btn from './Btn'
import { ourWorksPage } from '@/constants/homeAr'
import Image from 'next/image'

const ProductCard = () => {
	return (
		<>
			{ourWorksPage.map(({ id, location, paragraph, title, pic }) => {
				return (
					<section className='' key={id}>
						{/* main map container */}
						<div
							className={`flex  ${
								id % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'
							} flex-col items-center justify-center w-full h-auto xl:gap-16 gap-8`}
						>
							{/* text container */}
							<div className='w-full lg:w-1/3 flex flex-col gap-4 lg:gap-12 xl:text-start text-center'>
								<h2 className='h2 text-secondary font-lemonada'>{title}</h2>
								<div className='flex flex-col gap-4'>
									<h5 className='h5 text-secondary'>{location}</h5>
									<p className='p'>{paragraph}</p>
								</div>
								<Btn
									link={`/ourworks/${id}`}
									title='شاهد المزيد '
								/>
							</div>
							{/* images container */}
							<div className='w-full xl:w-2/3 flex xl:gap-16 gap-8 xl:flex-row flex-col items-center '>
								<div className=' w-full xl:w-1/2 max-h-screen'>
									<Image
										src={pic[0].img.src}
										alt={pic[0].img.alt}
										className=' w-full object-contain'
									/>
								</div>
								<div className='  xl:w-1/2  hidden xl:flex flex-col gap-16 h-fit '>
									<Image
										src={pic[1].img.src}
										alt={pic[1].img.alt}
										className='w-full h-auto object-cover'
									/>
									<Image
										src={pic[2].img.src}
										alt={pic[2].img.alt}
										className='w-full h-auto object-cover'
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
