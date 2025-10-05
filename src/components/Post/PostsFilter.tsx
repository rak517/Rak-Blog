'use client';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';
import { mockTags } from '@/data/tags-data';
import { cn } from '@/utils/cn';

interface PostsFilterProps {
  totalCount: number;
  searchTerm: string;
  selectedTag: string | null;
  sortBy: 'latest' | 'popular';
  onSearchChange: (value: string) => void;
  onSortChange: (sort: 'latest' | 'popular') => void;
  onTagChange: (tag: string | null) => void;
}

export default function PostsFilter({
  totalCount,
  searchTerm,
  selectedTag,
  sortBy,
  onSearchChange,
  onSortChange,
  onTagChange,
}: PostsFilterProps) {
  return (
    <div className='space-y-8'>
      <div className='group relative mb-12'>
        <div className='from-primary/20 to-primary/20 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r via-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />
        <div className='mb-4 flex items-center gap-3'>
          <h1 className='font-mono text-4xl font-bold tracking-tight'>
            <span className='text-primary'>{'//'}</span> 모든 글
          </h1>
        </div>
        <p className='text-muted-foreground pl-6 font-mono text-lg'>
          <span className='text-primary'>const</span> totalPosts ={' '}
          <span className='bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-semibold text-transparent'>
            {totalCount}
          </span>
          <span className='text-muted-foreground/60'> {'//'} 개의 글이 있습니다</span>
        </p>
      </div>

      <div className='relative'>
        <Search className='text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transition-colors' />
        <Input
          placeholder='제목이나 내용으로 검색...'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className='border-border/50 focus:border-primary bg-card/50 h-14 border-2 pl-12 font-mono text-base shadow-sm backdrop-blur-sm transition-all'
        />
      </div>

      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <div className='from-primary to-primary/50 h-6 w-0.5 rounded-full bg-gradient-to-b' />
          <span className='text-foreground font-mono text-sm font-semibold tracking-wider uppercase'>정렬</span>
        </div>
        <div className='bg-muted/30 border-border/50 flex w-fit gap-1 rounded-lg border p-1 shadow-sm backdrop-blur-sm'>
          <Button
            variant={sortBy === 'latest' ? 'default' : 'ghost'}
            size='sm'
            onClick={() => onSortChange('latest')}
            className={cn(
              'font-mono transition-all',
              sortBy === 'latest' ? 'shadow-primary/20 shadow-md' : 'hover:bg-muted/50',
            )}
          >
            최신순
          </Button>
          <Button
            variant={sortBy === 'popular' ? 'default' : 'ghost'}
            size='sm'
            onClick={() => onSortChange('popular')}
            className={cn(
              'font-mono transition-all',
              sortBy === 'popular' ? 'shadow-primary/20 shadow-md' : 'hover:bg-muted/50',
            )}
          >
            인기순
          </Button>
        </div>
      </div>

      <div className='space-y-4'>
        <div className='flex items-center gap-3'>
          <div className='from-primary h-6 w-0.5 rounded-full bg-gradient-to-b to-purple-500' />
          <span className='text-foreground font-mono text-sm font-semibold tracking-wider uppercase'>태그 필터</span>
        </div>
        <div className='border-border/40 bg-muted/20 rounded-xl border p-4 backdrop-blur-sm'>
          <div className='flex flex-wrap gap-2'>
            <Button
              variant={selectedTag === null ? 'default' : 'outline'}
              size='sm'
              onClick={() => onTagChange(null)}
              className='font-mono'
            >
              <span className='mr-1'>#</span>전체
            </Button>
            {mockTags.slice(0, 8).map((tag) => (
              <Button
                key={tag.id}
                variant={selectedTag === tag.name ? 'default' : 'outline'}
                size='sm'
                onClick={() => onTagChange(selectedTag === tag.name ? null : tag.name)}
                className='font-mono'
              >
                <span className='mr-1'>#</span>
                {tag.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
