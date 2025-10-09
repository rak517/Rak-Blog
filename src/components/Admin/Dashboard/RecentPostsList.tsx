import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { RecentPost } from '@/data/admin-stats-data';
import { Eye } from 'lucide-react';
import Link from 'next/link';

interface RecentPostListProps {
  posts: RecentPost[];
}

export default function RecentPostsList({ posts }: RecentPostListProps) {
  return (
    <Card className='border-border/50 p-0 shadow-md'>
      <div className='border-border/60 bg-background/50 flex items-center justify-between border-b px-4 py-2'>
        <div className='flex items-center space-x-2'>
          <span className='text-muted-foreground font-mono text-xs'>
            <span className='text-primary'>{'//'}</span> 최근 글
          </span>
        </div>
        <span className='text-muted-foreground font-mono text-[10px]'>{posts.length} posts</span>
      </div>

      <CardContent className='p-0'>
        <div className='divide-border/50 divide-y'>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/admin/posts/${post.id}`}
              className='hover:bg-muted/50 group block transition-colors'
            >
              <div className='space-y-2 p-4'>
                <div className='flex items-start justify-between gap-3'>
                  <h4 className='group-hover:text-primary line-clamp-1 flex-1 text-sm font-medium transition-colors'>
                    {post.title}
                  </h4>
                  <Badge
                    variant={post.status === 'published' ? 'default' : 'secondary'}
                    className='shrink-0 font-mono text-xs'
                  >
                    {post.status}
                  </Badge>
                </div>

                <div className='text-muted-foreground flex items-center justify-between text-xs'>
                  <time className='font-mono'>
                    {new Date(post.publishedAt).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className='flex items-center space-x-1 font-mono'>
                    <Eye className='h-3 w-3' />
                    <span>{post.views.toLocaleString()}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>

      <div className='bg-primary/5 border-border/60 text-muted-foreground flex items-center justify-between border-t px-4 py-2 font-mono text-xs'>
        <span>Recent Activity</span>
        <Link href='/admin/posts' className='hover:text-primary transition-colors'>
          View All →
        </Link>
      </div>
    </Card>
  );
}
