'use client'

import Btn from '@/components/Btn'
import { project } from '@/constants/id'
import Image from 'next/image'
import { useState } from 'react'

const IdWorkPage = ({ params }) => {
	let projectId = params.id - 1
	let myProject = project[projectId]

	const [selected, setSelected] = useState(myProject.images[0])
	// const handleClick = () => setSelected(myProject.images[2])

	return (
		<section className='text-base-100 '>
			<div className='flex lg:flex-row-reverse flex-col gap-8 '>
				{/* text container */}
				<div className='lg:w-4/12 w-full flex flex-col items-start justify-center gap-12'>
					<h2 className='h2 text-secondary'>{myProject.title}</h2>
					<p className='p'>{myProject.paragraph}</p>
					<Btn
						link='/ourworks'
						title='أعمالنا'
					/>
				</div>
				{/* image main container */}
				<div className='lg:w-8/12 w-full flex flex-col  gap-8 items-center justify-between'>
					<div className=''>
						<Image
							className='lg:rounded-2xl rounded-lg'
							src={selected}
							alt={myProject.title}
						/>
					</div>
					{/* thumbs */}
					<div className='grid grid-cols-5 grid-flow-row-dense lg:flex  lg:gap-4 gap-2  '>
						{myProject.images.map((img, index) => {
							return (
								<div
									className=''
									key={index}
								>
									<button
										className={`${
											myProject.images[index] === selected
												? 'border border-secondary '
												: ''
										} lg:rounded-lg rounded-md`}
										onClick={() =>
											setSelected(myProject.images[index])
										}
									>
										<Image
											src={img}
											className='lg:rounded-lg rounded-md'
										/>
									</button>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default IdWorkPage
