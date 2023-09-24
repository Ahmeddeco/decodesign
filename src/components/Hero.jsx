import { hero } from '../app/data'
import backgrond from '../../public/background.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className='h-screen mx-auto relative flex flex-col justify-center items-center '
      id='hero'>
      <Image
        src={backgrond}
        fill
        alt='deco design back ground'
        className='-z-50'
      />
      <h1 className='h1 font-lemonada text-gold'>{hero.title}</h1>
      <h2 className='h2 font-lemonada'>{hero.subtitle}</h2>
      <p className='p'>{hero.p}</p>
    </section>
  )
}

export default Hero
