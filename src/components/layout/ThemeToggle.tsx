'use client';

import { useTheme } from 'next-themes';
import { Button } from '../ui/Button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant='ghost' size='sm' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Sun className='h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>테마 변경</span>
    </Button>
  );
}
