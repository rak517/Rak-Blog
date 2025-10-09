'use client';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, SortAsc, SortDesc } from 'lucide-react';
import { cn } from '@/utils/cn';

type SortOption = 'latest' | 'oldest' | 'views';

interface PostsFilterProps {
  totalCount: number;
  searchTerm: string;
  sortBy: SortOption;
  onSearchChange: (value: string) => void;
  onSortChange: (sort: SortOption) => void;
  status: 'published' | 'draft';
}

export default function PostsFilter({
  totalCount,
  searchTerm,
  sortBy,
  onSearchChange,
  onSortChange,
  status,
}: PostsFilterProps) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>{status === 'published' ? 'Published Posts' : 'Draft Posts'}</h2>
          <p className='text-muted-foreground mt-1 font-mono text-sm'>
            Total <span className='text-primary font-semibold'>{totalCount}</span> {totalCount === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='relative flex-1 sm:max-w-sm'>
          <Search className='text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transition-colors' />
          <Input
            placeholder='포스트 이름으로 검색하세요'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className='pl-9 transition-all duration-200 focus:shadow-sm'
          />
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-muted-foreground text-sm font-medium'>Sort:</span>
          <div className='bg-muted/30 flex gap-1 rounded-lg border p-1'>
            <Button
              variant={sortBy === 'latest' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => onSortChange('latest')}
              className={cn(
                'gap-1.5 font-mono text-xs transition-all duration-200',
                sortBy === 'latest' && 'shadow-sm',
              )}
            >
              <SortDesc className='h-3.5 w-3.5' />
              최신순
            </Button>
            <Button
              variant={sortBy === 'oldest' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => onSortChange('oldest')}
              className={cn(
                'gap-1.5 font-mono text-xs transition-all duration-200',
                sortBy === 'oldest' && 'shadow-sm',
              )}
            >
              <SortAsc className='h-3.5 w-3.5' />
              오래된 순
            </Button>
            {status === 'published' && (
              <Button
                variant={sortBy === 'views' ? 'default' : 'ghost'}
                size='sm'
                onClick={() => onSortChange('views')}
                className={cn(
                  'gap-1.5 font-mono text-xs transition-all duration-200',
                  sortBy === 'views' && 'shadow-sm',
                )}
              >
                조회순
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
