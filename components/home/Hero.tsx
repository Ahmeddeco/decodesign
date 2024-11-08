import { hero } from '@/constants/homeAr'
import Btn from '../Btn'

const Hero = () => {
	return (
		<section
			className='bg-largBg bg-cover bg-center bg-no-repeat flex items-center justify-center  flex-col  gap-8 lg:gap-16 pt-20 min-h-screen'
			id='hero'
		>
			<h1 className='h1 font-lemonada text-secondary '>{hero.title}</h1>
			<h2 className='h2 text-base-100 font-vazirmatn'>{hero.subtitle}</h2>
			<h3 className='h3 text-base-100 font-vazirmatn'>{hero.p}</h3>
			<Btn title='شاهد المزيد من أعمالنا' link={'/ourworks'} />
		</section>
	)
}

export default Hero
