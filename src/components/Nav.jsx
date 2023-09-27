import Image from 'next/image'
import { logo } from '../constants/data'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import NavMobile from './NavMobile'

const Nav = () => {
  // const [nav, setNav] = useState(false)

  return (
    <header className='py-2 px-16 w-full fixed z-50 bg-opacity-80  bg-darkblack'>
      <nav className='flex justify-between items-center lg:gap-8'>
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
        
        {/* ------------- Social Icons ------------ */}

        <NavMobile/>
      </nav>
    </header>
  )
}

export default Nav
