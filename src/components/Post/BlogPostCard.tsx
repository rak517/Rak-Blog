import { Post } from '@/data/posts-data';
import { Card, CardContent } from '../ui/Card';
import Image from 'next/image';
import { mockPostTags } from '@/data/post-tags-data';
import { mockTags } from '@/data/tags-data';
import Link from 'next/link';
import { Badge } from '../ui/Badge';
import { BookOpen } from 'lucide-react';
import { mockSeries } from '@/data/series-data';

interface BlogPostCardProps {
  post: Post;
  variant?: 'grid' | 'list';
}

export default function BlogPostCard({ post, variant = 'grid' }: BlogPostCardProps) {
  const postTagIds = mockPostTags.filter((pt) => pt.postId === post.id).map((pt) => pt.tagId);
  const tags = mockTags.filter((t) => postTagIds.includes(t.id));
  const series = post.seriesId ? mockSeries.find((s) => s.id === post.seriesId) : null;

  if (variant === 'list') {
    return (
      <Card className='group border-0 shadow-sm transition-all duration-300 hover:shadow-lg'>
        <CardContent className='p-3'>
          <div className='flex gap-4'>
            <div className='flex flex-1 flex-col gap-2'>
              <div className='flex flex-wrap gap-2'>
                {series && post.seriesOrder && (
                  <Badge variant='default' className='text-xs'>
                    <BookOpen className='mr-1 h-3 w-3' />
                    {series.title} #{post.seriesOrder}
                  </Badge>
                )}

                {tags.slice(0, 3).map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.slug}`}>
                    <Badge variant='secondary' className='hover:bg-primary/15 cursor-pointer text-xs transition-colors'>
                      #{tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>

              <Link href={`/posts/${post.slug}`}>
                <h3 className='group-hover:text-primary line-clamp-2 text-xl font-semibold text-balance transition-colors'>
                  {post.title}
                </h3>
              </Link>

              <p className='text-muted-foreground line-clamp-2 text-sm text-pretty'>{post.description}</p>

              <div className='text-muted-foreground flex items-center text-sm'>
                <time className='font-mono'>
                  {new Date(post.publishedAt!).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            <div className='bg-muted relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg'>
              <Image
                src={post.thumbnail || 'https://picsum.photos/seed/react19/800/450'}
                alt={post.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                sizes='96px'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='group border-0 p-0 shadow-sm transition-all duration-300 hover:shadow-xl'>
      <CardContent className='p-0'>
        <div className='bg-muted relative aspect-video overflow-hidden rounded-t-lg'>
          <Image
            src={post.thumbnail || 'https://picsum.photos/seed/react19/800/450'}
            alt={post.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
        </div>

        <div className='space-y-3 p-5'>
          {(series || tags.length > 0) && (
            <div className='flex flex-wrap gap-2'>
              {series && post.seriesOrder && (
                <Badge variant='default' className='text-xs'>
                  <BookOpen className='mr-1 h-3 w-3' />
                  {series.title} #{post.seriesOrder}
                </Badge>
              )}

              {tags.slice(0, 2).map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}`}>
                  <Badge variant='secondary' className='hover:bg-primary/15 cursor-pointer text-xs transition-colors'>
                    #{tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          <Link href={`/posts/${post.slug}`}>
            <h3 className='group-hover:text-primary line-clamp-2 text-lg leading-tight font-semibold text-balance transition-colors'>
              {post.title}
            </h3>
          </Link>

          <p className='text-muted-foreground line-clamp-2 text-sm text-pretty'>{post.description}</p>

          <div className='text-muted-foreground flex items-center text-xs'>
            <time className='font-mono'>
              {new Date(post.publishedAt!).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
