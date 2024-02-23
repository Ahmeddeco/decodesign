import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import OurTopWorks from '@/components/OurTopWorks'
import WorkProcess from '@/components/WorkProcess'
import React from 'react'

const home = () => {
	return (
		<>
			<Hero />
			<AboutUs />
			<OurServices />
			<WorkProcess />
			<OurTopWorks />
		</>
	)
}

export default home
