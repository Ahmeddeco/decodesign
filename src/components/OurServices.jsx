import { services } from '../constants/data'
import Btn from './Btn'
// import { Swiper, SwiperSlide } from 'swiper/react'

const OurServices = () => {
  return (
    <section
      className='container '
      id='OurServices'>
      <div className='flex gap-x-12'>
        {/* ____________________ text ____________________ */}
        <div className='flex flex-col justify-center items-start gap-8 w-4/12'>
          <h3 className='h3 font-lemonada text-gold'>{services.title}</h3>
          <p className='p font-vazirmatn text-Black5'>{services.p}</p>
          <Btn
            title={services.buttonText}
            url='/services'
          />
        </div>
        {/* __________________ carousel __________________ */}
        <div className='flex w-8/12'></div>
      </div>
    </section>
  )
}

export default OurServices
