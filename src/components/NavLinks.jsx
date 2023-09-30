'use client'
import { Link } from 'react-scroll'
import { navigation } from '../constants/data'

import React from 'react'

const NavLinks = () => {
  return (
    // ------------------- desktop menu -------------------

    <div className='lg:flex hidden gap-x-4 xl:gap-x-16'>
      {navigation.map(({ name, target }) => {
        return (
          <ul
            key={name}
            className=''>
            <li className=' text-gold hover:text-Black10 font-extrabold text-xl duration-300 scroll-smooth'>
              <Link
                className='cursor-pointer'
                to={target}
                smooth={true}
                duration={800}>
                {name}
              </Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default NavLinks
