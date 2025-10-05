import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { mockSeries } from '@/data/series-data';
import { mockPosts } from '@/data/posts-data';
import Link from 'next/link';
import { BookOpen, FileText, Calendar, ArrowRight, Layers } from 'lucide-react';

export default function SeriesPage() {
  const seriesWithPostCount = mockSeries.map((series) => ({
    ...series,
    postCount: mockPosts.filter((post) => post.seriesId === series.id && post.status === 'published').length,
  }));

  const sortedSeries = seriesWithPostCount.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  return (
    <div className='relative min-h-screen pb-24'>
      <main className='relative z-0 container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-5xl'>
          <div className='group relative mb-12'>
            <div className='from-primary/20 to-primary/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r via-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />

            <Card className='border-primary/20 overflow-hidden border-t-2 py-0 shadow-xl'>
              <div className='border-border/60 bg-background/95 flex items-center border-b backdrop-blur'>
                <div className='bg-primary/10 border-primary/50 flex items-center space-x-2 border-b-2 px-4 py-2'>
                  <Layers className='text-primary h-3 w-3' />
                  <span className='text-foreground font-mono text-xs font-medium'>series.tsx</span>
                  <span className='text-primary text-xs'>●</span>
                </div>
                <div className='hidden items-center space-x-2 px-4 py-2 opacity-50 sm:flex'>
                  <span className='text-muted-foreground font-mono text-xs'>README.md</span>
                </div>
              </div>

              <CardContent className='space-y-4 p-4 sm:space-y-6 sm:p-8'>
                <div>
                  <h1 className='mb-3 font-mono text-2xl font-bold sm:mb-4 sm:text-3xl'>
                    <span className='text-purple-500'>const </span>
                    <span className='text-foreground'>series</span>
                    <span className='text-muted-foreground'> = </span>
                    <span className='text-yellow-500'>[]</span>
                  </h1>
                  <p className='border-border/40 text-muted-foreground border-l-2 pl-3 font-mono text-xs leading-relaxed sm:pl-4 sm:text-sm'>
                    <span className='text-purple-500'>{'//'} </span>
                    체계적으로 구성된 학습 시리즈를 통해 깊이 있는 지식을 쌓아보세요
                  </p>
                </div>

                <div className='bg-muted/30 border-border/50 flex items-center justify-between rounded-lg border px-3 py-2.5 sm:px-4 sm:py-3'>
                  <div className='flex items-center space-x-2 font-mono text-xs sm:text-sm'>
                    <BookOpen className='text-primary h-3.5 w-3.5 sm:h-4 sm:w-4' />
                    <span className='text-muted-foreground'>Total:</span>
                    <span className='text-foreground font-semibold'>{sortedSeries.length} series</span>
                  </div>
                </div>
              </CardContent>

              <div className='bg-primary/5 border-border/60 text-muted-foreground hidden items-center justify-between border-t px-4 py-2 font-mono text-xs sm:flex'>
                <div className='flex items-center space-x-4'>
                  <span className='flex items-center space-x-1'>
                    <span className='text-green-500'>●</span>
                    <span>TypeScript</span>
                  </span>
                  <span>UTF-8</span>
                  <span>LF</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span>Ln {sortedSeries.length}, Col 0</span>
                  <span>Spaces: 2</span>
                </div>
              </div>
            </Card>
          </div>

          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {sortedSeries.map((series) => (
              <Card
                key={series.id}
                className='group border-border/50 hover:border-primary/50 hover:shadow-primary/10 overflow-hidden p-0 shadow-md transition-all duration-300 hover:shadow-xl'
              >
                <div className='border-border/60 bg-background/50 flex items-center justify-between border-b px-3 py-2 sm:px-4'>
                  <div className='flex items-center space-x-2'>
                    <div className='flex space-x-1.5'>
                      <div className='h-2.5 w-2.5 rounded-full bg-red-500/80 sm:h-3 sm:w-3' />
                      <div className='h-2.5 w-2.5 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3' />
                      <div className='h-2.5 w-2.5 rounded-full bg-green-500/80 sm:h-3 sm:w-3' />
                    </div>
                    <span className='text-muted-foreground truncate font-mono text-[10px] sm:text-xs'>
                      {series.slug}.series
                    </span>
                  </div>
                  <Badge
                    variant='secondary'
                    className='border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 border font-mono text-[10px] transition-colors sm:text-xs'
                  >
                    {series.postCount} posts
                  </Badge>
                </div>

                <CardContent className='space-y-3 p-4 sm:space-y-4 sm:p-6'>
                  <div>
                    <h2 className='group-hover:text-primary mb-2 font-mono text-base font-bold transition-colors sm:text-lg lg:text-xl'>
                      <span className='text-purple-500'>class </span>
                      {series.title}
                    </h2>
                    <p className='text-muted-foreground line-clamp-2 text-xs leading-relaxed sm:text-sm'>
                      {series.description}
                    </p>
                  </div>

                  <div className='bg-muted/30 border-border/50 flex items-center justify-between rounded-lg border px-2.5 py-2 sm:px-3'>
                    <div className='flex items-center gap-2 font-mono text-[10px] sm:gap-4 sm:text-xs'>
                      <span className='text-muted-foreground flex items-center gap-1 sm:space-x-1.5'>
                        <FileText className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                        <span className='hidden sm:inline'>{series.postCount}개 글</span>
                        <span className='sm:hidden'>{series.postCount}</span>
                      </span>
                      <span className='text-muted-foreground/50'>|</span>
                      <span className='text-muted-foreground flex items-center gap-1 sm:space-x-1.5'>
                        <Calendar className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                        <span className='hidden sm:inline'>
                          {new Date(series.updatedAt).toLocaleDateString('ko-KR')}
                        </span>
                        <span className='sm:hidden'>
                          {new Date(series.updatedAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                        </span>
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant='outline'
                    className='hover:bg-primary/10 hover:border-primary/50 group/btn w-full justify-between font-mono text-xs transition-all sm:text-sm'
                  >
                    <Link href={`/series/${series.slug}`}>
                      <span>
                        <span className='text-purple-500'>function</span>
                        <span className='mx-1 sm:mx-1.5'>view()</span>
                      </span>
                      <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 sm:h-4 sm:w-4' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
