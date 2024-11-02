import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<div className='w-full items-center justify-center flex'>
			<Link href={link} className='text-xl'>
				<button className='btn-secondary btn-outline btn btn-wide '>
					{title}
				</button>
			</Link>
		</div>
	)
}

export default Btn
