import { hero } from '../constants/data'
import backgrond from '../../public/background.png'
import smallBackgrond from '../../public/smallBackground.png'
import Image from 'next/image'
import Btn from './Btn'

const Hero = () => {
  return (
    <section
      className=' relative h-screen w-screen lg:py-56 py-64'
      id='Hero'>
      {/* --------------- background --------------- */}
      <Image
        src={backgrond}
        fill
        alt='deco design back ground'
        className='-z-50 '
      />
      
      {/* ------------ Title &Subtitle ------------- */}
      <div className='flex flex-col gap-12 justify-center items-center'>
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
