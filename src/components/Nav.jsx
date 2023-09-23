import Image from 'next/image'
import { logo, navigation } from '../app/data'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='py-2 px-[122px] flex justify-between items-center fixed z-50 bg-opacity-20 bg-darkblack w-full'>
      {/* ----------------- logo ---------------- */}
      <Image
        src={logo.src}
        width={48}
        height={62}
        alt={logo.alt}
      />
      {/* -------------- nav links -------------- */}
      <div className='flex'>
        {navigation.map(({ name, href }) => {
          return (
            <ul key={name}>
              <li className='px-8'>
                <Link href={href}>{name}</Link>
              </li>
            </ul>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
