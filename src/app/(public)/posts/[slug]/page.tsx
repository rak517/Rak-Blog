import MarkdownContent from '@/components/PostDetail/MarkdownContent';
import PostHeader from '@/components/PostDetail/PostHeader';
import SeriesNavigationCard from '@/components/PostDetail/SeriesNavigationCard';
import SeriesPostNavigation from '@/components/PostDetail/SeriesPostNavigation';
import { Card, CardContent } from '@/components/ui/Card';
import { mockPostTags } from '@/data/post-tags-data';
import { mockPosts } from '@/data/posts-data';
import { mockSeries } from '@/data/series-data';
import { mockTags } from '@/data/tags-data';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug && p.status === 'published');

  if (!post) {
    notFound();
  }

  const postTagIds = mockPostTags.filter((pt) => pt.postId === post.id).map((pt) => pt.tagId);
  const tags = mockTags.filter((t) => postTagIds.includes(t.id));

  const series = post.seriesId ? mockSeries.find((s) => s.id === post.seriesId) : null;

  const totalPostsInSeries = series
    ? mockPosts.filter((p) => p.seriesId === series.id && p.status === 'published').length
    : 0;

  return (
    <div className='min-h-screen pb-16'>
      <main className='container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[1fr_280px]'>
            <article className='min-w-0'>
              {series && post.seriesOrder && (
                <SeriesNavigationCard series={series} currentOrder={post.seriesOrder} totalPosts={totalPostsInSeries} />
              )}

              <PostHeader post={post} tags={tags} />

              <div className='px-2 sm:px-4 lg:px-0'>
                <MarkdownContent content={post.content} />
              </div>

              <SeriesPostNavigation currentPost={post} />
            </article>

            <aside className='hidden lg:block'>
              <div className='sticky top-24'>
                <Card className='border-border/50 shadow-sm'>
                  <CardContent className='p-6'>
                    <h3 className='mb-4 font-mono text-sm font-semibold'>
                      <span className='text-primary'>{'//'}</span> 목차
                    </h3>
                    <div className='text-muted-foreground text-sm'>
                      <p className='font-mono'>TOC 기능 추후 추가 예정</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return mockPosts
    .filter((post) => post.status === 'published')
    .map((post) => ({
      slug: post.slug!,
    }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}
