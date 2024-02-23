import { social } from '@/constants/homeAr'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialIcons = () => {
	return (
		<div>
			<div className='flex items-center justify-center gap-6'>
				{social.map(({ icon, socialName, url }) => (
					<Link
						key={socialName}
						href={url}
						target='_blank'
					>
						<Image
							src={icon}
							alt={socialName}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SocialIcons
