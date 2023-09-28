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
        <p className='lg:p text-center lg:text-right'>
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
                className='flex flex-col items-center justify-center border-gold even:border-x-2 lg:even:px-12 even:px-6 lg:first:pl-12 first:pl-6 lg:last:pr-12 last:pr-6 '>
                <h4 className='lg:h4 h5 font-vazirmatn'>{value}</h4>
                <h5 className='lg:h5 h6 font-lemonada text-gold'>{title}</h5>
              </div>
            )
          })}
        </div>
      </div>
      {/* ------------ Image container ------------ */}
      <div className='flex flex-1 justify-end'>
        <Image
          src={about.img}
          width={550}
          height={585}
          alt='bath room'
        />
      </div>
    </section>
  )
}

export default AboutUs
