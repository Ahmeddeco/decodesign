import Link from 'next/link'
import React from 'react'

const Btn = ({ title, link }) => {
	return (
		<button className='hover:scale-105 transition-all rounded-lg  border-gold border-1 py-4 px-8 bg-black/70'>
			<Link
				href={link}
				className='text-gold '
			>
				{title}
			</Link>
		</button>
	)
}

export default Btn
