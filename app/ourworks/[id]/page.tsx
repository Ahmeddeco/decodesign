'use client'

import Btn from '@/components/Btn'
import { project } from '@/constants/id'
import Image from 'next/image'
import { useState } from 'react'

const IdWorkPage = ({ params }: { params: { id: number } }) => {
	const projectId = params.id - 1
	const myProject = project[projectId]

	const [selected, setSelected] = useState(myProject.images[0])

	return (
		<section className='text-base-100 w-screen h-screen'>
			<div className='flex xl:flex-row-reverse flex-col-reverse gap-8 items-center justify-start w-full h-auto pt-24 xl:pt-8'>
				{/* text container */}
				<div className='xl:w-3/12 w-full flex flex-col  gap-8 lg:gap-12 max-h-[760px]'>
					<h2 className='h2 text-secondary '>{myProject.title}</h2>
					<p className='p '>{myProject.paragraph}</p>
					{/* thumbs */}
					<div className='grid grid-cols-3 grid-flow-row-dense  lg:gap-4 gap-2  overflow-y-auto'>
						{myProject.images.map((img, index) => {
							return (
								<div key={index}>
									<button
										className={`${
											myProject.images[index] === selected
												? 'border-2  border-secondary '
												: ''
										} lg:rounded-lg rounded-md`}
										onClick={() => setSelected(myProject.images[index])}
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
					{/* Btn */}
					<Btn
						target={'_blank'}
						link='https://wa.me/+201152640142'
						title='إتصل الآن'
					/>
				</div>
				{/* image main container */}
				<div className='xl:w-9/12 w-full '>
					<Image
						className='xl:rounded-2xl rounded-xl object-cover'
						src={selected}
						alt={myProject.title}
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default IdWorkPage
