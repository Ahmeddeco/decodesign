import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<button className='btn-secondary btn-outline btn btn-lg'>
			<Link href={link} className='text-3xl'>{title}</Link>
		</button>
	)
}

export default Btn
