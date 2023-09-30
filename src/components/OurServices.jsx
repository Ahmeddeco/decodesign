import { services } from '../constants/data'
import Btn from './Btn'
// import { Swiper, SwiperSlide } from 'swiper/react'

const OurServices = () => {
  return (
    <section
      className='container  '
      id='OurServices'>
      <div className='flex lg:flex-row flex-col gap-x-12'>
        {/* ____________________ text ____________________ */}
        <div className='flex flex-col justify-center lg:items-start items-center gap-8 lg:w-4/12 w-full'>
          <h3 className='h3 font-lemonada text-gold '>{services.title}</h3>
          <p className='p font-vazirmatn text-Black5 lg:text-start text-center'>
            {services.p}
          </p>
          <Btn
            title={services.buttonText}
            url='/services'
          />
        </div>
        {/* __________________ carousel __________________ */}
        <div className='flex items-center justify-center lg:w-8/12 w-full'>
          <h3 className='h3'>carousel</h3>
        </div>
      </div>
    </section>
  )
}

export default OurServices
