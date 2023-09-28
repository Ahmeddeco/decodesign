'use client'
import { Link } from 'react-scroll'
import { navigation } from '../constants/data'
// import { useState } from 'react'

const NavMobile = () => {
  // const [click, setClick] = useState(false)
  return (
    <nav className='flex'>
      {/* ______-___________ mobile nav ____-_____________ */}

      <ul className='text-center h-screen w-screen flex flex-col items-center justify-center gap-y-8 text-gold'>
        {navigation.map(({ name, target }) => {
          return (
            <li key={name}>
              <Link
                className='cursor-pointer text-xl'
                to={target}
                smooth={true}
                duration={800}
                onClick={() => setClick(!click)}>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile
