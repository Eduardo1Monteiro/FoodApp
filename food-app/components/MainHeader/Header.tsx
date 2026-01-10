import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import MainHeaderBG from './MainHeaderBG';
import NavLink from './Nav-Link';


export default function Header(): React.ReactNode {

  return (
    <>
      <MainHeaderBG />
      <header className='flex justify-between items-center py-8 px-4 md:px-[10%] py-12'>

        <Link
          href="/"
          className='flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-sans tracking-widest uppercase text-6xl'
        >
          <Image
            src={logo}
            width={120}
            height={120}
            alt="Foodies Logo"
            priority
            className='object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]'
          />
          Foodies
        </Link>

        <nav>
          <ul className='flex gap-6 list-none m-0 p-0 text-4xl font-sans font-bold'>
            <li>
              <NavLink href='/meals'>
                Buscar Refeições
              </NavLink>
            </li>
            <li>
              <NavLink href='/community'>
                Comunidade
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
