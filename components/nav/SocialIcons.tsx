import { social } from '@/constants/homeAr'
import Link from 'next/link'

const SocialIcons = () => {
	return (
		<div>
			<div className='flex items-center justify-center gap-3'>
				{social.map(({ icon, socialName, url }) => (
					<Link key={socialName} href={url} target='_blank'>
						<div className='text-5xl text-secondary hover:scale-110 ease-in-out duration-300 '>
							{icon}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SocialIcons
