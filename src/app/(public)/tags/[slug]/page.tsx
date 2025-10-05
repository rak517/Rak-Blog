import { notFound } from 'next/navigation';
import { mockTags } from '@/data/tags-data';
import { mockPosts } from '@/data/posts-data';
import { mockPostTags } from '@/data/post-tags-data';
import BlogPostCard from '@/components/Post/BlogPostCard';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { Card, CardContent } from '@/components/ui/Card';
import { Hash, FileText } from 'lucide-react';

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = mockTags.find((t) => t.slug === slug);

  if (!tag) {
    notFound();
  }

  const postIds = mockPostTags.filter((pt) => pt.tagId === tag.id).map((pt) => pt.postId);

  const tagPosts = mockPosts
    .filter((post) => postIds.includes(post.id) && post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());

  return (
    <div className='min-h-screen pb-12'>
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='space-y-8 lg:col-span-3'>
            <div className='group relative'>
              <div className='from-primary/20 to-primary/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r via-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />

              <Card className='border-primary/20 overflow-hidden border-t-2 py-0 shadow-xl'>
                <div className='border-border/60 bg-background/95 flex items-center border-b backdrop-blur'>
                  <div className='bg-primary/10 border-primary/50 flex items-center space-x-2 border-b-2 px-4 py-2'>
                    <Hash className='text-primary h-3 w-3' />
                    <span className='text-foreground font-mono text-xs font-medium'>{tag.name}.tag</span>
                    <span className='text-primary text-xs'>●</span>
                  </div>
                  <div className='flex items-center space-x-2 px-4 py-2 opacity-50'>
                    <span className='text-muted-foreground font-mono text-xs'>posts.tsx</span>
                  </div>
                </div>

                <CardContent className='space-y-6 p-8'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <h1 className='mb-3 font-mono text-3xl font-bold'>
                        <span className='text-purple-500'># </span>
                        <span className='text-foreground'>{tag.name}</span>
                      </h1>
                      <p className='border-border/40 text-muted-foreground border-l-2 pl-4 font-mono text-sm leading-relaxed'>
                        <span className='text-purple-500'>const</span> posts ={' '}
                        <span className='text-green-500'>&ldquo;이 태그와 관련된 모든 글을 확인하세요&rdquo;</span>
                      </p>
                    </div>
                  </div>

                  <div className='bg-muted/30 border-border/50 flex items-center justify-between rounded-lg border px-4 py-3'>
                    <div className='flex items-center space-x-2 font-mono text-sm'>
                      <FileText className='text-primary h-4 w-4' />
                      <span className='text-muted-foreground'>Total Posts:</span>
                      <span className='text-foreground font-semibold'>{tagPosts.length}개</span>
                    </div>
                  </div>
                </CardContent>

                <div className='bg-primary/5 text-muted-foreground border-border/60 flex items-center justify-between border-t px-4 py-2 font-mono text-xs'>
                  <div className='flex items-center space-x-4'>
                    <span className='flex items-center space-x-1'>
                      <span className='text-green-500'>●</span>
                      <span>TypeScript</span>
                    </span>
                    <span>UTF-8</span>
                    <span>LF</span>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <span>Ln {tagPosts.length}, Col 0</span>
                    <span>Spaces: 2</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className='space-y-4'>
              {tagPosts.length > 0 ? (
                tagPosts.map((post) => <BlogPostCard key={post.id} post={post} variant='list' />)
              ) : (
                <Card className='border-border/50 p-12 text-center shadow-sm'>
                  <div className='border-border/40 bg-muted/30 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed'>
                    <Hash className='text-muted-foreground h-8 w-8' />
                  </div>
                  <p className='text-muted-foreground font-mono text-lg'>
                    <span className='text-primary'>{'// '}</span>이 태그에 해당하는 글이 없습니다
                  </p>
                </Card>
              )}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return mockTags.map((tag) => ({
    slug: tag.slug,
  }));
}
