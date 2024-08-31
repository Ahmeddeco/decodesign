import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<Link
			href={link}
			className='text-xl'
		>
			<button className='btn-secondary btn-outline btn'>{title}</button>
		</Link>
	)
}

export default Btn
