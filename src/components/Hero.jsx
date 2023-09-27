import { hero } from '../constants/data'
import backgrond from '../../public/background.png'
import smallBackgrond from '../../public/smallBackground.png'
import Image from 'next/image'
import Btn from './Btn'

const Hero = () => {
  return (
    <section
      className=' relative max-h-screen w-screen lg:py-32 py-44'
      id='Hero'>
      {/* --------------- background --------------- */}
      <Image
        src={backgrond}
        fill
        alt='deco design back ground'
        className='-z-50 lg:block hidden'
      />
      <Image
        src={smallBackgrond}
        fill
        alt='deco design back ground'
        className='-z-50 lg:hidden block'
      />
      {/* ------------ Title &Subtitle ------------- */}
      <div className='flex flex-col gap-12 justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='h3 lg:h1 font-lemonada text-gold'>{hero.title}</h1>
          <h2 className='h5 lg:h2 font-lemonada py-6'>{hero.subtitle}</h2>
          <p className='p font-vazirmatn pt-6'>{hero.p}</p>
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
