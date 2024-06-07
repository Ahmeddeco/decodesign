import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<button className='btn-secondary btn-outline btn btn-wide'>
			<Link href={link}>{title}</Link>
		</button>
	)
}

export default Btn
