import { Badge } from '@/components/ui/Badge';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/data/posts-data';
import { Tag } from '@/data/tags-data';

interface PostHeaderProps {
  post: Post;
  tags: Tag[];
}

export default function PostHeader({ post, tags }: PostHeaderProps) {
  return (
    <header className='mb-12 space-y-6'>
      <h1 className='text-4xl leading-tight font-bold lg:text-5xl'>{post.title}</h1>

      <p className='text-muted-foreground text-xl leading-relaxed'>{post.description}</p>

      <div className='flex items-center gap-4 text-sm'>
        <div className='text-muted-foreground flex items-center gap-1.5'>
          <Calendar className='h-4 w-4' />
          <time>
            {new Date(post.publishedAt!).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Link key={tag.id} href={`/tags/${tag.slug}`}>
              <Badge variant='secondary' className='hover:bg-primary/15 cursor-pointer transition-colors'>
                # {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}

      <div className='border-border border-t pt-6' />
    </header>
  );
}
