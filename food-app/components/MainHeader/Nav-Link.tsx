'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ctaLinkStyle = 'text-[#ddd6cb] px-4 py-2 rounded-lg no-underline hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]';

export default function NavLink(props: { children: React.ReactNode, href: string }): React.ReactNode {
  const path = usePathname();

  return (
    <Link
      href={props.href}
      className={path.startsWith(props.href) ? ctaLinkStyle + ' bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent' : ctaLinkStyle}
    >
      {props.children}
    </Link>

  );
}
