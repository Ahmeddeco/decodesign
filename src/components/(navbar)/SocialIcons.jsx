import { social } from '@/constants/homeAr'
import Link from 'next/link'
import React from 'react'

const SocialIcons = () => {
	return (
		<div>
			<div className='flex items-center justify-center gap-4'>
				{social.map(({ icon, socialName, url }) => (
					<Link key={socialName} href={url} target='_blank'>
						<div className='text-4xl text-secondary'>
							{icon}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SocialIcons
