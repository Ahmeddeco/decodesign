import Link from 'next/link'
import React from 'react'

type BtnProps = {
	title: string
	link: string
	target?: string
	center?: boolean
}

const Btn = ({ title, link, target, center }: BtnProps) => {
	return (
		<div className='w-full'>
			<Link
				href={link}
				className={`${
					center ? ' xl:justify-center' : 'xl:justify-start'
				} text-xl items-center justify-center flex w-full`}
				target={target}
			>
				<button className='btn-secondary btn xl:btn-wide btn-block  font-cairo font-bold text-lg '>
					{title}
				</button>
			</Link>
		</div>
	)
}

export default Btn
