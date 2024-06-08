import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import WorkProcess from '@/components/WorkProcess'
import React from 'react'

const home = () => {
	return (
		<>
			<Hero />
			<AboutUs />
			<OurServices />
			<WorkProcess />
		</>
	)
}

export default home
