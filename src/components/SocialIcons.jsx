import Link from 'next/link'
import { social } from '../constants/data'

const SocialIcons = () => {
  return (
    <nav className='lg:flex hidden'>
      <div className=' flex flex-row gap-x-4 justify-between items-center '>
        {social.map(({ socialName, icon, url }) => {
          return (
            <ul
              key={socialName}
              className=''>
              <li className='duration-300 scroll-smooth text-2xl text-Black10 hover:text-gold'>
                <Link
                  href={url}
                  target='_blank'>
                  {icon}
                </Link>
              </li>
            </ul>
          )
        })}
      </div>
    </nav>
  )
}

export default SocialIcons
