import Btn from '@/components/Btn'

export default function NotFound() {
	return (
		<div className='flex flex-col gap-10 min-h-svh items-center justify-center '>
			<h2 className='h2'>under develop</h2>
			<p className='p'>
				this page is under develop, so back again to see it <br />
				click the button below to go to our home page.
			</p>
			<Btn title={'Return Home'} link={'/'} center />
		</div>
	)
}
