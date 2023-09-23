import Link from 'next/link'
import React from 'react'

const Button = ({ title, url }) => {
  return (
    <button className='border-[1px] px-8 py-2 hover:scale-110 duration-300 ease-in-out'>
      <Link href={url}>{title}</Link>
    </button>
  )
}

export default Button
