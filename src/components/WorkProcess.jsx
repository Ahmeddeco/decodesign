import { workProcess } from '@/constants/homeAr'
import Image from 'next/image'
import React from 'react'

const WorkProcess = () => {
	return (
		<section
			className='flex flex-col md:flex-row bg-contain bg-box xl:gap-52 gap-14 items-center justify-evenly min-h-screen'
			id='workprocess'
		>
			{/* Text */}

			<div className=' md:w-4/12 w-full'>
				<div className='flex-col flex gap-9 justify-center xl:items-start items-center'>
					{/* Title */}
					<h2 className='h2 text-base-100 font-lemonada font-medium'>
						{workProcess.mainTitle}{' '}
						<span className='h2 text-secondary font-lemonada font-medium'>
							{workProcess.span}
						</span>
					</h2>
					{/*start map */}
					{workProcess.subTitle.map(({ num, p, title }) => {
						return (
							<div
								key={num}
								className='flex gap-6 items-start justify-start '
							>
								<div className='text-secondary font-normal text-4xl font-bungeeOutline'>
									{/* number */}
									{num}
								</div>
								<div className='flex flex-col md:gap-4 gap-2 font-vazirmatn'>
									{/* title */}
									<h3 className='text-secondary font-bold text-3xl'>{title}</h3>
									{/* para */}
									<p className='text-base-100 font-semibold font-vazirmatn text-xl'>{p}</p>
								</div>
							</div>
						)
					})}
					{/*end  map */}
				</div>
			</div>
			{/* Image */}
			<div className=' md:w-4/12 w-full'>
				<Image
					src={workProcess.img}
					alt={workProcess.imgAlt}
					className='w-full'
				/>
			</div>
		</section>
	)
}

export default WorkProcess
