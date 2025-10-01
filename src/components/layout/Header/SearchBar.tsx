'use client';

import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  variant?: 'desktop' | 'mobile';
}

export function SearchBar({ isOpen, variant = 'desktop' }: SearchBarProps) {
  if (!isOpen) return null;

  if (variant === 'mobile') {
    return (
      <div className='bg-primary/5 border-border/60 flex items-center space-x-2 rounded-lg border px-3 py-2'>
        <Search className='text-primary h-4 w-4' />
        <Input
          placeholder='Search...'
          className='placeholder:text-muted-foreground border-0 bg-transparent font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
        />
      </div>
    );
  }

  return (
    <div className='border-border/40 animate-in slide-in-from-top-2 border-t py-4 duration-200'>
      <div className='relative mx-auto max-w-2xl'>
        <div className='bg-primary/5 border-border/60 flex items-center space-x-2 rounded-lg border px-4 py-2.5'>
          <Search className='text-primary h-4 w-4' />
          <span className='text-primary font-mono text-sm'>{'>'}</span>
          <Input
            placeholder='Search files, commands...'
            className='placeholder:text-muted-foreground border-0 bg-transparent font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
            autoFocus
          />
          <kbd className='border-border bg-muted text-muted-foreground hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:inline-flex'>
            <span className='text-xs'>⌘</span>K
          </kbd>
        </div>
      </div>
    </div>
  );
}
