import { logo } from '@/constants/homeAr'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<>
			<Link href='/'>
				<Image
					src={logo.src}
					alt={logo.alt}
				/>
			</Link>
		</>
	)
}

export default Logo
