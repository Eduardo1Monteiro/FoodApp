'use client';

import { useState } from 'react';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import MainHeaderBG from './MainHeaderBG';
import NavLink from './Nav-Link';

export default function Header(): React.ReactNode {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <MainHeaderBG />

      <header className='flex justify-between items-center py-8 px-4 md:px-[10%] md:py-12 relative'>

        <Link
          href="/"
          className='flex items-center justify-center gap-4 xl:gap-8 text-[#ddd6cb] font-bold font-sans tracking-widest uppercase text-3xl md:text-4xl xl:text-6xl z-20'
        >
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Foodies Logo"
            priority
            className='w-16 h-16 md:w-24 md:h-24 xl:w-[120px] xl:h-[120px] object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]'
          />
          Foodies
        </Link>

        <nav className="hidden xl:block">
          <ul className='flex gap-6 list-none m-0 p-0 text-4xl font-sans font-bold text-[#ddd6cb]'>
            <li>
              <NavLink href='/meals'>Buscar Refeições</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Comunidade</NavLink>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleSidebar}
          className="xl:hidden text-[#ddd6cb] z-50 p-2 focus:outline-none"
          aria-label="Abrir menu"
        >
          {/* Ícone de Menu (3 riscos) */}
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 xl:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={closeSidebar}
        />

        <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-[#59453c] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>

          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end mb-8">
              <button onClick={closeSidebar} className="text-[#ddd6cb]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav>
              <ul className='flex flex-col gap-8 list-none m-0 p-0 text-2xl font-sans font-bold text-[#ddd6cb]'>
                <li onClick={closeSidebar}>
                  <NavLink href='/meals'>Buscar Refeições</NavLink>
                </li>
                <li onClick={closeSidebar}>
                  <NavLink href='/community'>Comunidade</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </header>
    </>
  );
}
