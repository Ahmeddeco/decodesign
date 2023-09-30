import Link from 'next/link'
import { social } from '../constants/data'

const SocialIcons = () => {
  return (
    <nav className='flex'>
      <div className=' flex flex-row gap-x-4 justify-between items-center '>
        {social.map(({ socialName, icon, url }) => {
          return (
            <ul
              key={socialName}
              className=''>
              <li className='duration-300 scroll-smooth text-2xl lg:text-Black10 text-gold lg:hover:text-gold hover:text-Black10'>
                <Link
                  href={url}
                  target='_blank'
                  aria-label={socialName}>
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
