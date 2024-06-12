'use client'

import Btn from '@/components/Btn'
import { project } from '@/constants/id'
import Image from 'next/image'
import { useState } from 'react'

const IdWorkPage = ({ params }) => {
	let projectId = params.id - 1
	let myProject = project[projectId]

	const [selected, setSelected] = useState(myProject.images[0])

	return (
		<section className='text-base-100 '>
			<div className='flex lg:flex-row-reverse flex-col gap-8 '>
				{/* text container */}
				<div className='lg:w-3/12 w-full flex flex-col items-start justify-center gap-12'>
					<h2 className='h2 text-secondary'>{myProject.title}</h2>
					<p className='p'>{myProject.paragraph}</p>
					<Btn
						link='/ourworks'
						title='أعمالنا'
					/>
					{/* thumbs */}
					<div className='grid grid-cols-5  grid-flow-row-dense  lg:gap-4 gap-2  '>
						{myProject.images.map((img, index) => {
							return (
								<div key={index}>
									<button
										className={`${
											myProject.images[index] === selected
												? 'border-2  border-secondary '
												: ''
										} lg:rounded-lg rounded-md`}
										onClick={() =>
											setSelected(myProject.images[index])
										}
									>
										<Image
											src={img}
											alt={myProject.title}
											className='lg:rounded-lg rounded-md '
										/>
									</button>
								</div>
							)
						})}
					</div>
				</div>
				{/* image main container */}
				<div className='lg:w-9/12 w-full'>
					<Image
						className='lg:rounded-2xl rounded-lg '
						src={selected}
						alt={myProject.title}
					/>
				</div>
			</div>
		</section>
	)
}

export default IdWorkPage
