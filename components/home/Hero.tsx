import { hero } from '@/constants/homeAr'
import Btn from '../Btn'

const Hero = () => {
	return (
		<section className='bg-largBg bg-cover bg-center bg-no-repeat ' id='hero'>
			<div className='container flex items-center justify-center  flex-col  gap-8 lg:gap-16 pt-20 min-h-screen'>
				<h1 className='h1 text-secondary '>{hero.title}</h1>
				<h2 className='h2 text-base-100 '>{hero.subtitle}</h2>
				<h3 className='h3 text-base-100 '>{hero.p}</h3>
				<Btn title='شاهد المزيد من أعمالنا' link={'/ourworks'} />
			</div>
		</section>
	)
}

export default Hero
