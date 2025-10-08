import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Post, mockPosts } from '@/data/posts-data';
import { Button } from '../ui/Button';

interface SeriesPostNavigationProps {
  currentPost: Post;
}

export default function SeriesPostNavigation({ currentPost }: SeriesPostNavigationProps) {
  const seriesPosts = currentPost.seriesId
    ? mockPosts
        .filter((post) => post.seriesId === currentPost.seriesId && post.status === 'published')
        .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0))
    : [];

  const currentSeriesIndex = seriesPosts.findIndex((post) => post.id === currentPost.id);

  let prevPost: Post | null = null;
  let nextPost: Post | null = null;

  if (seriesPosts.length > 1 && currentSeriesIndex !== -1) {
    prevPost = currentSeriesIndex > 0 ? seriesPosts[currentSeriesIndex - 1] : null;
    nextPost = currentSeriesIndex < seriesPosts.length - 1 ? seriesPosts[currentSeriesIndex + 1] : null;
  }

  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <div className='mt-12 border-t pt-8'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {prevPost && (
          <Link href={`/posts/${prevPost.slug}`}>
            <Button variant='outline' className='h-auto w-full justify-start bg-transparent p-4'>
              <div className='flex items-center space-x-3'>
                <ChevronLeft className='h-4 w-4 flex-shrink-0' />
                <div className='min-w-0 text-left'>
                  <p className='text-muted-foreground mb-1 text-xs'>
                    {seriesPosts.length > 1 ? '이전 시리즈 글' : '이전 글'}
                  </p>
                  <p className='truncate text-sm font-medium'>{prevPost.title}</p>
                </div>
              </div>
            </Button>
          </Link>
        )}

        {nextPost && (
          <Link href={`/posts/${nextPost.slug}`} className={!prevPost ? 'md:col-start-2' : ''}>
            <Button variant='outline' className='h-auto w-full justify-end bg-transparent p-4'>
              <div className='flex items-center space-x-3'>
                <div className='min-w-0 text-right'>
                  <p className='text-muted-foreground mb-1 text-xs'>
                    {seriesPosts.length > 1 ? '다음 시리즈 글' : '다음 글'}
                  </p>
                  <p className='truncate text-sm font-medium'>{nextPost.title}</p>
                </div>
                <ChevronRight className='h-4 w-4 flex-shrink-0' />
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
