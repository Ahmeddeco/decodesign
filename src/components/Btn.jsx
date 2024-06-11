import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<button className='btn-secondary btn-outline btn'>
			<Link
				href={link}
				className='text-xl'
			>
				{title}
			</Link>
		</button>
	)
}

export default Btn
