import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';
import { mockPosts } from '@/data/posts-data';
import Link from 'next/link';

export function RecentPostsCard() {
  const recentPosts = mockPosts
    .filter((post) => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime())
    .slice(0, 5);

  return (
    <Card className='border-border/50 overflow-hidden p-0 shadow-md transition-shadow hover:shadow-lg'>
      <CardHeader className='border-border/40 bg-muted/30 border-b px-4 py-2.5'>
        <div className='text-muted-foreground flex items-center space-x-2 font-mono text-xs'>
          <span className='text-primary'>{'//'}</span>
          <span>최근 글</span>
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-2'>
          {recentPosts.map((post, index) => (
            <div key={post.id}>
              <Link href={`/posts/${post.slug}`}>
                <div className='group hover:bg-muted/50 cursor-pointer space-y-1.5 rounded-lg p-2 transition-colors'>
                  <h4 className='group-hover:text-primary line-clamp-2 text-sm leading-snug font-medium text-balance transition-colors'>
                    {post.title}
                  </h4>
                  <p className='text-muted-foreground text-xs'>
                    {new Date(post.publishedAt!).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
              {index < recentPosts.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
