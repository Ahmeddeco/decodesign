import { services } from '@/constants/homeAr'
import Image from 'next/image'
import Btn from '../Btn'

const OurServices = () => {
	return (
		<section
			className='flex flex-col md:flex-row-reverse xl:gap-52 gap-14 items-center justify-evenly min-h-screen'
			id='ourServices'
		>
			{/* text */}

			<div className=' md:w-4/12 w-full'>
				<div className='flex-col flex gap-9 justify-center items-start '>
					<h2 className='h2 text-secondary font-lemonada'>
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
			<div className=' md:w-4/12 w-full'>
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
