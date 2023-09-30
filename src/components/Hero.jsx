import { hero } from '../constants/data'
import Btn from './Btn'

const Hero = () => {
  return (
    <section
      className='flex flex-col h-screen w-screen md:bg-largBg bg-smallBg bg-cover '
      id='Hero'>
      {/* ------------ Title &Subtitle ------------- */}
      <div className='flex flex-col gap-10 justify-between items-center pt-64'>
        <h1 className='h2 lg:h1 font-lemonada text-gold'>{hero.title}</h1>
        <h2 className='h3 lg:h2 font-lemonada py-6'>{hero.subtitle}</h2>
        <p className='p font-vazirmatn pt-6'>{hero.p}</p>
        {/* ---------------- Button ---------------- */}
        <Btn
          title='اتصل بنا'
          url='https://wa.me/+201152640142'
        />
      </div>
    </section>
  )
}

export default Hero
