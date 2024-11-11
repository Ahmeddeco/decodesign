import Btn from '@/components/Btn'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-10 min-h-svh items-center justify-center '>
			<h2 className='h2'>under develop</h2>
			<p className='p'>Could not find requested resource</p>
			<Btn title={'Return Home'} link={'/'} />
		</div>
	)
}
