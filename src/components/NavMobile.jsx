'use client'
import { Link } from 'react-scroll'
import { navigation } from '../constants/data'
import SocialIcons from './SocialIcons'

const NavMobile = () => {
  return (
    <nav className='flex flex-col '>
      {/* ______-___________ mobile nav ____-_____________ */}

      <ul className='text-center h-screen w-screen flex flex-col items-center justify-center gap-y-8 text-gold'>
        {navigation.map(({ name, target }) => {
          return (
            <li key={name}>
              <Link
                className='cursor-pointer text-xl'
                to={target}
                smooth={true}
                duration={800}>
                {name}
              </Link>
            </li>
          )
        })}
        <SocialIcons />
      </ul>
    </nav>
  )
}

export default NavMobile
