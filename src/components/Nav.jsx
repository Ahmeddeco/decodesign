import Image from 'next/image'
import { logo } from '../constants/data'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'

const Nav = () => {
  // const [nav, setNav] = useState(false)

  return (
    <header className='py-2 px-28 fixed z-50 bg-opacity-90  bg-Dark_Gray w-full '>
      <nav className='flex justify-between items-center'>
        {/* ----------------- logo ---------------- */}
        <Link href='/'>
          <Image
            src={logo.src}
            width={48}
            height={62}
            alt={logo.alt}
          />
        </Link>

        {/* -------------- nav links -------------- */}

        <NavLinks />

        {/* ------------- Social Icons ------------ */}
        <SocialIcons />
        
      </nav>
    </header>
  )
}

export default Nav
