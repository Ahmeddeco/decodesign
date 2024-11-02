import { social } from '@/constants/homeAr'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialIcons = () => {
	return (
		<div>
			<div className='flex items-center justify-center gap-4'>
				{social.map(({ icon, socialName, url }) => (
					<Link key={socialName} href={url} target='_blank'>
						<div className='h-10'>
							<Image src={icon} alt={socialName} className='h-full w-auto' />
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SocialIcons
