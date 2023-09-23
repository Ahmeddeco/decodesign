import React from 'react'
import backgrond from '../../public/background.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='h-screen' id='hero'>
      <Image
        src={backgrond}
        fill
        alt='deco design back ground'
        className='-z-50'
      />
    </section>
  )
}

export default Hero
