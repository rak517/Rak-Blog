'use client';

import { NAV_ITEMS } from '@/constants/navigation';
import NavLink from './NavLink';
import { SearchBar } from './SearchBar';

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
}

export function MobileMenu({ isOpen, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className='border-border/40 animate-in slide-in-from-top-2 border-t py-4 duration-200 md:hidden'>
      <nav className='flex flex-col space-y-1'>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={pathname === item.href}
            variant='mobile'
          />
        ))}

        <div className='border-border/40 mt-2 border-t pt-4'>
          <SearchBar isOpen={true} variant='mobile' />
        </div>

        <div className='pt-2'>{/* <ThemeToggle /> */}</div>
      </nav>
    </div>
  );
}
