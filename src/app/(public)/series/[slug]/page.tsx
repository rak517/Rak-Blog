import { notFound } from 'next/navigation';
import { mockSeries } from '@/data/series-data';
import { mockPosts } from '@/data/posts-data';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import BlogPostCard from '@/components/Post/BlogPostCard';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { Layers, FileText, Calendar, BookOpen } from 'lucide-react';

interface SeriesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = mockSeries.find((s) => s.slug === slug);

  if (!series) {
    notFound();
  }

  const seriesPosts = mockPosts
    .filter((post) => post.seriesId === series.id && post.status === 'published')
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));

  return (
    <div className='relative min-h-screen pb-24'>
      <main className='relative z-0 container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='space-y-6 lg:col-span-3 lg:space-y-8'>
            <div className='group relative'>
              <div className='from-primary/20 to-primary/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r via-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />

              <Card className='border-primary/20 overflow-hidden border-t-2 py-0 shadow-xl'>
                <div className='border-border/60 bg-background/95 flex items-center border-b backdrop-blur'>
                  <div className='bg-primary/10 border-primary/50 flex items-center space-x-2 border-b-2 px-3 py-2 sm:px-4'>
                    <Layers className='text-primary h-3 w-3' />
                    <span className='text-foreground truncate font-mono text-xs font-medium'>{series.slug}.series</span>
                    <span className='text-primary text-xs'>●</span>
                  </div>
                  <div className='hidden items-center space-x-2 px-4 py-2 opacity-50 sm:flex'>
                    <span className='text-muted-foreground font-mono text-xs'>README.md</span>
                  </div>
                </div>

                <CardContent className='space-y-4 p-4 sm:space-y-6 sm:p-8'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <h1 className='mb-2 font-mono text-xl font-bold sm:mb-3 sm:text-2xl lg:text-3xl'>
                        <span className='text-purple-500'>class </span>
                        <span className='text-foreground'>{series.title}</span>
                        <span className='text-muted-foreground'> {'{'}</span>
                      </h1>
                      <p className='border-border/40 text-muted-foreground border-l-2 pl-3 font-mono text-xs leading-relaxed sm:pl-4 sm:text-sm'>
                        <span className='text-purple-500'>constructor</span>
                        <span className='text-muted-foreground'>() {'{'}</span>
                        <br />
                        <span className='pl-3 sm:pl-4'>
                          <span className='text-blue-400'>this</span>.description ={' '}
                          <span className='text-green-500'>&ldquo;{series.description}&rdquo;</span>
                        </span>
                        <br />
                        <span className='text-muted-foreground'>{'}'}</span>
                      </p>
                    </div>
                  </div>

                  <div className='grid gap-3 sm:grid-cols-3 sm:gap-4'>
                    <div className='bg-muted/30 border-border/50 flex items-center space-x-2.5 rounded-lg border px-3 py-2.5 sm:space-x-3 sm:px-4 sm:py-3'>
                      <div className='bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10'>
                        <FileText className='text-primary h-4 w-4 sm:h-5 sm:w-5' />
                      </div>
                      <div className='min-w-0'>
                        <p className='text-muted-foreground font-mono text-[10px] sm:text-xs'>Total Posts</p>
                        <p className='text-foreground truncate font-mono text-base font-semibold sm:text-lg'>
                          {seriesPosts.length}
                        </p>
                      </div>
                    </div>

                    <div className='bg-muted/30 border-border/50 flex items-center space-x-2.5 rounded-lg border px-3 py-2.5 sm:space-x-3 sm:px-4 sm:py-3'>
                      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 sm:h-10 sm:w-10'>
                        <Calendar className='h-4 w-4 text-purple-500 sm:h-5 sm:w-5' />
                      </div>
                      <div className='min-w-0'>
                        <p className='text-muted-foreground font-mono text-[10px] sm:text-xs'>Created</p>
                        <p className='text-foreground truncate font-mono text-xs font-semibold sm:text-sm'>
                          {new Date(series.createdAt).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </p>
                      </div>
                    </div>

                    <div className='bg-muted/30 border-border/50 flex items-center space-x-2.5 rounded-lg border px-3 py-2.5 sm:space-x-3 sm:px-4 sm:py-3'>
                      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 sm:h-10 sm:w-10'>
                        <BookOpen className='h-4 w-4 text-green-500 sm:h-5 sm:w-5' />
                      </div>
                      <div className='min-w-0'>
                        <p className='text-muted-foreground font-mono text-[10px] sm:text-xs'>Updated</p>
                        <p className='text-foreground truncate font-mono text-xs font-semibold sm:text-sm'>
                          {new Date(series.updatedAt).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <div className='bg-primary/5 text-muted-foreground border-border/60 hidden items-center justify-between border-t px-4 py-2 font-mono text-xs sm:flex'>
                  <div className='flex items-center space-x-4'>
                    <span className='flex items-center space-x-1'>
                      <span className='text-green-500'>●</span>
                      <span>TypeScript</span>
                    </span>
                    <span>UTF-8</span>
                    <span>LF</span>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <span>Ln {seriesPosts.length}, Col 0</span>
                    <span>Spaces: 2</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <h2 className='font-mono text-base font-semibold sm:text-lg lg:text-xl'>
                  <span className='text-primary'>{'//'}</span> 시리즈 목록
                </h2>
                <Badge variant='secondary' className='font-mono text-xs'>
                  {seriesPosts.length}개
                </Badge>
              </div>

              {seriesPosts.length > 0 ? (
                seriesPosts.map((post) => <BlogPostCard key={post.id} post={post} variant='list' />)
              ) : (
                <Card className='border-border/50 p-8 text-center shadow-sm sm:p-12'>
                  <div className='border-border/40 bg-muted/30 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed sm:mb-4 sm:h-16 sm:w-16'>
                    <FileText className='text-muted-foreground h-6 w-6 sm:h-8 sm:w-8' />
                  </div>
                  <p className='text-muted-foreground font-mono text-sm sm:text-base lg:text-lg'>
                    <span className='text-primary'>{'// '}</span>아직 작성된 글이 없습니다
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
  return mockSeries.map((series) => ({
    slug: series.slug,
  }));
}
