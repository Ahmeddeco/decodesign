import { workProcess } from '@/constants/homeAr'
import Image from 'next/image'
import React from 'react'
import Btn from '../Btn'

const WorkProcess = () => {
	return (
		<section
			className='flex flex-col md:flex-row xl:gap-52 gap-14 items-center justify-evenly min-h-screen'
			id='workprocess'
		>
			{/* Text */}

			<div className=' md:w-4/12 w-full '>
				<div className='flex flex-col gap-16 items-start justify-center'>
					{/* Title */}
					<h2 className='h2 text-base-100 font-lemonada '>
						{workProcess.mainTitle}{' '}
						<span className='h2 text-secondary font-lemonada '>
							{workProcess.span}
						</span>
					</h2>
					<div className='flex-col flex gap-9 justify-center xl:items-start items-center'>
						{/*start map */}
						{workProcess.subTitle.map(({ num, p, title }) => {
							return (
								<div
									key={num}
									className='flex gap-6 items-start justify-start '
								>
									<div className='text-secondary h3 font-bungeeOutline'>
										{/* number */}
										{num}
									</div>
									<div className='flex flex-col md:gap-4 gap-2 '>
										{/* title */}
										<h3 className='h3 text-secondary font-vazirmatn'>
											{title}
										</h3>
										{/* para */}
										<p className='p'>{p}</p>
									</div>
								</div>
							)
						})}
						{/*end  map */}
						<Btn
							title='شاهد المزيد من أعمالنا'
							link='/ourworks'
						/>
					</div>
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
