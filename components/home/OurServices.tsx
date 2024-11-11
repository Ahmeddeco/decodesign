import { services } from '@/constants/homeAr'
import Image from 'next/image'
import Btn from '../Btn'

const OurServices = () => {
	return (
		<section
			className=' md:flex-row-reverse section '
			id='ourServices'
		>
			{/* text */}

			<div className='  w-full'>
				<div className='flex-col flex gap-9 justify-center items-start '>
					<h2 className='h2 text-secondary'>
						{services.title}
					</h2>
					<p className='p'>{services.p}</p>
					{/* button */}
					<Btn
						link={services.buttonLink}
						title={services.buttonText}
					/>
				</div>
			</div>
			{/* photo */}
			<div className='  w-full'>
				<Image
					src={services.img}
					alt={services.title}
					className='w-full'
				/>
			</div>
		</section>
	)
}

export default OurServices
