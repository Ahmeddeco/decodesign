import { hero } from '@/constants/homeAr'
import React from 'react'
import Btn from './Btn'

const Hero = () => {
	return (
		<section
			className='bg-largBg bg-cover  flex-col  gap-12 my-auto'
			id='hero'
		>
			<h1 className='xl:h1 h2 text-gold font-lemonada '>{hero.title}</h1>
			<h2 className='xl:h2 h3'>{hero.subtitle}</h2>
			<h3 className='xl:h3 h4 '>{hero.p}</h3>
			<Btn title='أعمالنا' link='/ourworks'/>
		</section>
	)
}

export default Hero
