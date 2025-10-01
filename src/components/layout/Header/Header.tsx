'use client';

import Link from 'next/link';
import FileIcon from '@/assets/icon/FileIcon';
import { ADMIN_LINK, NAV_ITEMS } from '@/constants/navigation';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import { Button } from '../../ui/Button';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from './SearchBar';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='supports-[backdrop-filter]:bg-background/60 bg-background/95 border-border/40 sticky top-0 z-50 border-b backdrop-blur'>
      <div className='via-primary/50 absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent' />

      <div className='px-4 lg:container lg:mx-auto'>
        <div className='flex h-16 items-center justify-between gap-4'>
          <Link href='/' className='group flex shrink-0 items-center'>
            <div className='border-primary bg-primary/10 group-hover:bg-primary/20 relative rounded-t-lg border-t-2 px-3 py-1.5 transition-colors duration-300 sm:px-4 sm:py-2'>
              <div className='flex items-center space-x-1.5 sm:space-x-2'>
                <FileIcon className='text-primary h-4 w-4' />
                <span className='group-hover:text-primary text-foreground font-mono text-xs transition-colors duration-300 sm:text-sm'>
                  RakBlog.tsx
                </span>
                <div className='bg-primary h-1.5 w-1.5 animate-pulse rounded-full sm:h-2 sm:w-2' />
              </div>
            </div>
          </Link>

          <nav className='hidden flex-1 items-center justify-center space-x-1 md:flex lg:space-x-2'>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href}
                variant='desktop'
              />
            ))}
          </nav>

          <div className='flex shrink-0 items-center gap-1 sm:gap-1.5'>
            <Button
              variant='ghost'
              size='sm'
              className='hover:bg-primary/10 hidden h-8 w-8 p-0 transition-colors md:flex'
              title='검색 (Ctrl+K)'
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label='검색 열기'
            >
              <Search className='h-4 w-4' />
            </Button>

            <div className='hidden md:block'>
              <ThemeToggle />
            </div>

            <Link href={ADMIN_LINK.href}>
              <Button
                variant='outline'
                size='sm'
                className='hover:bg-accent h-8 bg-transparent px-2 transition-colors sm:px-3'
              >
                {ADMIN_LINK.label}
              </Button>
            </Link>

            <Button
              variant='ghost'
              size='sm'
              className='hover:bg-primary/10 h-8 w-8 p-0 transition-colors md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {isMenuOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
            </Button>
          </div>
        </div>

        <SearchBar isOpen={isSearchOpen} variant='desktop' />

        <MobileMenu isOpen={isMenuOpen} pathname={pathname} />
      </div>
    </header>
  );
}
