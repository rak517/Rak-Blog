'use client';

import { usePathname } from 'next/navigation';
import { Card, CardContent } from '../ui/Card';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { NAV_ITEMS } from '@/constants/admin-navigation';

export default function AdminNavCard() {
  const pathname = usePathname();

  return (
    <Card className='border-border/50 p-0 shadow-md'>
      <div className='border-border/60 bg-background/50 flex items-center justify-between border-b px-4 py-2'>
        <div className='flex items-center space-x-2'>
          <span className='text-muted-foreground font-mono text-xs'>
            <span className='text-primary'>{'//'}</span> Navigation
          </span>
        </div>
        <span className='text-muted-foreground font-mono text-[10px]'>~/admin</span>
      </div>

      <CardContent className='p-2'>
        <nav className='space-y-1'>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center space-x-3 rounded-md px-3 py-2 transition-all',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                )}
              >
                <Icon className='h-4 w-4' />
                <span className='font-mono text-sm'>{item.label}</span>
                {isActive && <span className='text-primary ml-auto font-mono text-xs'>●</span>}
              </Link>
            );
          })}
        </nav>
      </CardContent>

      <div className='bg-primary/5 border-border/60 text-muted-foreground flex items-center justify-between border-t px-4 py-2 font-mono text-xs'>
        <span>{NAV_ITEMS.length} items</span>
        <span className='flex items-center space-x-1'>
          <span className='text-green-500'>●</span>
          <span>Active</span>
        </span>
      </div>
    </Card>
  );
}
