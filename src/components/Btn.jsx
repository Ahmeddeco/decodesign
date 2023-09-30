import Link from 'next/link'
import React from 'react'

const Btn = ({ title, url }) => {
  return (
    <button className='border-2 lg:px-8 px-4 lg:py-4 py-2 hover:scale-105 duration-500 rounded-lg ease-in-out lg:text-2xl text-xl lg:font-bold hover:bg-gold text-gold hover:text-darkblack bg-darkblack border-gold '>
      <Link href={url} target='_blank'>{title}</Link>
    </button>
  )
}

export default Btn
