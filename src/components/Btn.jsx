import Link from 'next/link'
import React from 'react'

const Btn = ({ title, url }) => {
  return (
    <button className='border-2 lg:px-8 px-4 lg:py-4 py-2 hover:scale-110 duration-300 ease-in-out lg:text-2xl lg:font-bold hover:bg-gold hover:text-darkblack hover:border-gold '>
      <Link href={url}>{title}</Link>
    </button>
  )
}

export default Btn
