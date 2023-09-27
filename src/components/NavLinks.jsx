'use client'
import { Link } from 'react-scroll'
import { navigation,navCloseBurgerIcons } from '../constants/data'

import React from 'react'

const NavLinks = () => {
  return (

    // ------------------- desktop menu -------------------
    
    <div className='xl:flex hidden gap-x-4 xl:gap-x-16'>
      {navigation.map(({ name, target }) => {
        return (
          <ul
            key={name}
            className=''>
            <li className=' text-Black10 hover:text-gold font-extrabold text-xl duration-300 scroll-smooth'>
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

      // ------------------- mobile menu -------------------

  )
}

export default NavLinks
