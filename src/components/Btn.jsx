import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link, target }) => {
	return (
		<div className='w-full lg:w-fit'>
			<Link
				href={link}
				className='text-xl w-full  items-center justify-center  flex'
				target={target}
			>
				<button className='btn-secondary  btn btn-block lg:btn-wide font-vazirmatn font-semibold text-lg'>
					{title}
				</button>
			</Link>
		</div>
	)
}

export default Btn
