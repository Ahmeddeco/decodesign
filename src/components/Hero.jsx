import { hero } from '@/constants/homeAr'
import React from 'react'
import Btn from './Btn'

const Hero = () => {
	return (
		<section
			className='bg-largBg bg-cover flex flex-col h-screen items-center gap-12 my-auto'
			id='hero'
		>
			<h1 className='h1 text-gold font-lemonada '>{hero.title}</h1>
			<h2 className='h2'>{hero.subtitle}</h2>
			<h3 className='h3'>{hero.p}</h3>
			<Btn/>
		</section>
	)
}

export default Hero
