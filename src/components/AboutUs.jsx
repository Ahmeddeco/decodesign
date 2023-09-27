import Image from 'next/image'
import { about, state } from '../constants/data'

const AboutUs = () => {
  return (
    <section
      className='px-28 flex flex-row justify-between items-center'
      id='AboutUs'>
      {/* ------------ Title ------------ */}
      <div className='flex-1'>
        <h3 className=''>{about.title}</h3>
        <p className=''>
          {about.p1}
          <br />
          {about.p2}
        </p>
      </div>
      {/* ------------ Image ------------ */}
      <div className=''>
        <Image
          src={about.img}
          width={450}
          height={650}
          alt='bath room'
          className='flex-1'
        />
      </div>
      
    </section>
  )
}

export default AboutUs
