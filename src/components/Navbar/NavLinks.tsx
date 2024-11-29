import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
];

interface NavLinksProps {
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavLinks({ isMobile, onClick }: NavLinksProps) {
  const baseStyles = "transition-colors duration-200";
  const mobileStyles = "block w-full py-3 px-4 hover:bg-gray-700";
  const desktopStyles = "hover:text-purple-400";

  return (
    <nav className={`${isMobile ? 'space-y-1' : 'hidden md:flex md:items-center md:space-x-6'}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles} text-gray-300`}
          onClick={onClick}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}