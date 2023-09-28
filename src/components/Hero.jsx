import { hero } from '../constants/data'
import backgrond from '../../public/background.webp'
import smallBackgrond from '../../public/smallBackground.webp'
import Image from 'next/image'
import Btn from './Btn'

const Hero = () => {
  return (
    <section
      className='flex flex-col  h-screen w-screen '
      id='Hero'>
      {/* --------------- background --------------- */}
      <Image
        src={backgrond}
        width={1920}
        height={923}
        alt='deco design back ground'
        className='-z-50 absolute'
      />

      {/* ------------ Title &Subtitle ------------- */}
      <div className='flex flex-col gap-12 justify-center items-center pt-64'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='h3 lg:h1 font-lemonada text-gold'>{hero.title}</h1>
          <h2 className='h4 lg:h2 font-lemonada py-6'>{hero.subtitle}</h2>
          <p className='h6 lg:p font-vazirmatn pt-6'>{hero.p}</p>
        </div>
        {/* ---------------- Button ---------------- */}
        <div className=''>
          <Btn
            title='اتصل بنا'
            url='https://wa.me/+201152640142'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
