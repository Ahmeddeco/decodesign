import { hero } from '@/constants/homeAr'
import React from 'react'
import Btn from './Btn'

const Hero = () => {
	return (
		<section
			className='bg-largBg bg-cover  flex-col  gap-12 my-auto'
			id='hero'
		>
			<h1 className='h1 font-lemonada text-secondary '>{hero.title}</h1>
			<h2 className='h2 text-base-100'>{hero.subtitle}</h2>
			<h3 className='h3 text-base-100'>{hero.p}</h3>
			<Btn title='أعمالنا' link='/ourworks'/>
		</section>
	)
}

export default Hero
