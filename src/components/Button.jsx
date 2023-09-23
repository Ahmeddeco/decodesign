import Link from 'next/link'
import React from 'react'

const Button = ({ title,url }) => {
  return <button>
    <Link href={url}>{title}</Link>
  </button>
}

export default Button
