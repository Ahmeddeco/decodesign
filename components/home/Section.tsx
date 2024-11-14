import Btn from '../Btn'
import Image, { StaticImageData } from 'next/image'

type SectionProps = {
	h2: string
	p1?: string
	p2?: string
	state?: {
		value: string
		title: string
	}[]
	img: {
		src: StaticImageData | string
		alt: string
	}
	process?: {
		num: string
		title: string
		p: string
	}[]
	reverse?: boolean
}

const Section = ({
	h2,
	p1,
	p2,
	state,
	img,
	process,
	reverse,
}: SectionProps) => {
	return (
		<section
			className={`section ${reverse && 'xl:flex-row-reverse'} `}
			id='aboutus'
		>
			{/* text */}
			<div className=' w-full xl:w-2/6'>
				<div className='flex-col flex gap-2 xl:gap-6 justify-center items-start '>
					<h2 className='h2 '>{h2}</h2>

					<div className='flex flex-col gap-4'>
						<p className='p '>{p1}</p>
						<p className='p'>{p2}</p>
					</div>

					{/* status */}
					{state && (
						<div className='flex gap-10'>
							{state.map(({ value, title }, index) => {
								return (
									<div
										className='flex flex-col even:border-x even:px-8 even:border-secondary items-center justify-center'
										key={index}
									>
										<h4 className='h4 font-normal text-base-100'>{value}</h4>
										<h6 className='h6  '>{title}</h6>
									</div>
								)
							})}
						</div>
					)}
					{/* Work Process */}
					{process && (
						<div className='flex flex-col xl:gap-10 gap-4'>
							{process.map(({ num, p, title }) => {
								return (
									<div className='flex gap-4 ' key={num}>
										{/* number */}
										<h3 className=' h3 '>{num}</h3>
										<div className='flex flex-col gap-2 '>
											{/* title */}
											<h3 className='h3  '>{title}</h3>
											{/* paragraph */}
											<p className='p'>{p}</p>
										</div>
									</div>
								)
							})}
						</div>
					)}
					<Btn title='شاهد المزيد من أعمالنا' link='/ourworks' />
				</div>
			</div>
			{/* photo */}
			<div className=' w-full xl:w-4/6 max-h-screen '>
				<Image
					src={img.src}
					alt={img.alt}
					width={600}
					height={600}
					className='object-cover w-full '
				/>
			</div>
		</section>
	)
}

export default Section
