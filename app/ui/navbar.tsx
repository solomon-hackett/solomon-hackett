"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { spaceGrotesk } from '@/app/lib/fonts';

const links = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Me", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className={`name ${spaceGrotesk.className}`}>
        Solomon Hackett
      </Link>
      <div className="link-container">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx("nav-link", {
              active: pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
