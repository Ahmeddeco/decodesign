import Image from 'next/image'
import { about, state } from '../constants/data'

const AboutUs = () => {
  return (
    <section
      className='container flex lg:gap-60 gap-12 xl:flex-row flex-col justify-between items-center'
      id='AboutUs'>
      {/* ------------ Title & state container ------------ */}
      <div className='flex flex-col gap-y-12 flex-1 justify-center lg:items-start items-center'>
      {/* ------------ Title ------------ */}
        <h3 className='h3 font-lemonada text-gold'>{about.title}</h3>
        <p className='p text-center lg:text-right'>
          {about.p1}
          <br />
          <br />
          {about.p2}
        </p>

        {/* ------------ state ------------ */}
        <div className='flex flex-row items-center justify-start'>
          {state.map(({ value, title }) => {
            return (
              <div
                key={title}
                className='flex flex-col items-center justify-center border-gold even:border-x-2 even:px-12 first:pl-12 last:pr-12'>
                <h4 className='h4 font-vazirmatn'>{value}</h4>
                <h6 className='h6 font-lemonada text-gold'>{title}</h6>
              </div>
            )
          })}
        </div>
      </div>
      {/* ------------ Image container ------------ */}
      <div className='flex flex-1 justify-end'>
        <Image
          src={about.img}
          width={450}
          height={585}
          alt='bath room'
        />
      </div>
    </section>
  )
}

export default AboutUs
