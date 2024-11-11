import Link from 'next/link'
import React from 'react'

type BtnProps={
	title:string
	 link:string
	 target?:string
}

const Btn = ({ title, link, target }:BtnProps) => {
	return (
		<div className='w-full'>
			<Link
				href={link}
				className='text-xl items-center justify-center flex w-full'
				target={target}
			>
				<button className='btn-secondary btn btn-block xl:btn-wide font-cairo font-semibold text-lg '>
					{title}
				</button>
			</Link>
		</div>
	)
}

export default Btn
