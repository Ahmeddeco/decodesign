import Hero from '@/components/home/Hero'
import Section from '@/components/home/Section'
import { about, state } from '@/constants/homeAr'
import { services } from '@/constants/homeAr'
import { workProcess } from '@/constants/homeAr'

const home = () => {
	return (
		<>
			<Hero />
			{/* AboutUs */}
			<Section
				h2={about.title}
				p1={about.p1}
				p2={about.p2}
				img={{
					src: about.img.src,
					alt: about.title,
				}}
				state={state}
			/>

			{/* OurServices */}
			<Section
				h2={services.title}
				p1={services.p}
				img={{
					src: services.img,
					alt: services.title,
				}}
				reverse
			/>

			{/* WorkProcess */}
			<Section
				h2={workProcess.mainTitle}
				img={{
					src: workProcess.img,
					alt: workProcess.mainTitle,
				}}
				process={workProcess.subTitle}
			/>
		</>
	)
}

export default home
