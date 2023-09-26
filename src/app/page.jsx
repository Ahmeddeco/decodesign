import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import OurLatestWorks from '@/components/OurLatestWorks'
import OurServices from '@/components/OurServices'
import OurWorks from '@/components/OurWorks'
import Testimonials from '@/components/Testimonials'
import WorkProgress from '@/components/WorkProgress'
import { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutUs />
      <OurServices />
      <WorkProgress />
      <OurWorks />
      <Testimonials />
      <OurLatestWorks />
    </Fragment>
  )
}

export default Home
