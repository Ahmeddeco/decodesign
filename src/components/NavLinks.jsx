'use client'
import { Link } from 'react-scroll'
import { navigation } from '../constants/data'

import React from 'react'

const NavLinks = () => {
  return (
    <div className='flex'>
      {navigation.map(({ name, target }) => {
        return (
          <ul key={name}>
            <li className='px-4 text-Black10 hover:text-gold font-extrabold text-xl duration-300 scroll-smooth'>
              <Link
                className='cursor-pointer'
                to={target}
                smooth={true}
                duration={500}>
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
