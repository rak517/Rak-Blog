import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { mockTags } from '@/data/tags-data';
import { mockPostTags } from '@/data/post-tags-data';
import Link from 'next/link';
import { Hash, Folder } from 'lucide-react';

export default function TagsPage() {
  const tagsWithCount = mockTags.map((tag) => ({
    ...tag,
    count: mockPostTags.filter((pt) => pt.tagId === tag.id).length,
  }));

  const sortedTags = tagsWithCount.sort((a, b) => b.count - a.count);

  return (
    <div className='min-h-screen pb-24'>
      <main className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-5xl'>
          <div className='group relative mb-12'>
            <div className='from-primary/20 to-primary/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r via-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />

            <Card className='border-primary/20 overflow-hidden border-t-2 py-0 shadow-xl'>
              <div className='border-border/60 bg-background/95 flex items-center border-b backdrop-blur'>
                <div className='bg-primary/10 border-primary/50 flex items-center space-x-2 border-b-2 px-4 py-2'>
                  <Hash className='text-primary h-3 w-3' />
                  <span className='text-foreground font-mono text-xs font-medium'>tags.tsx</span>
                  <span className='text-primary text-xs'>●</span>
                </div>
                <div className='flex items-center space-x-2 px-4 py-2 opacity-50'>
                  <span className='text-muted-foreground font-mono text-xs'>README.md</span>
                </div>
              </div>

              <CardContent className='space-y-6 p-8'>
                <div>
                  <h1 className='mb-4 font-mono text-3xl font-bold'>
                    <span className='text-purple-500'># </span>
                    <span className='text-foreground'>All Tags</span>
                  </h1>
                  <p className='border-border/40 text-muted-foreground border-l-2 pl-4 font-mono text-sm leading-relaxed'>
                    <span className='text-purple-500'>const</span> description ={' '}
                    <span className='text-green-500'>
                      &ldquo;관심 있는 주제의 태그를 선택하면 관련 글들을 찾아볼 수 있습니다.&rdquo;
                    </span>
                  </p>
                </div>

                <div className='bg-muted/30 border-border/50 flex items-center justify-between rounded-lg border px-4 py-3'>
                  <div className='flex items-center space-x-2 font-mono text-sm'>
                    <Folder className='text-primary h-4 w-4' />
                    <span className='text-muted-foreground'>Total:</span>
                    <span className='text-foreground font-semibold'>{sortedTags.length} tags</span>
                  </div>
                </div>
              </CardContent>

              <div className='bg-primary/5 border-border/60 text-muted-foreground flex items-center justify-between border-t px-4 py-2 font-mono text-xs'>
                <div className='flex items-center space-x-4'>
                  <span className='flex items-center space-x-1'>
                    <span className='text-green-500'>●</span>
                    <span>TypeScript</span>
                  </span>
                  <span>UTF-8</span>
                  <span>LF</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span>Ln {sortedTags.length}, Col 0</span>
                  <span>Spaces: 2</span>
                </div>
              </div>
            </Card>
          </div>

          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {sortedTags.map((tag) => (
              <Link key={tag.id} href={`/tags/${tag.slug}`}>
                <Card className='group border-border/50 hover:border-primary/50 hover:bg-primary/5 h-full p-0 shadow-sm transition-all duration-300 hover:shadow-lg'>
                  <CardContent className='p-5'>
                    <div className='flex items-center gap-3.5'>
                      <div className='bg-primary/10 group-hover:bg-primary/20 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all group-hover:scale-110'>
                        <Hash className='text-primary h-5 w-5' />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h3 className='group-hover:text-primary mb-1 truncate font-mono text-base font-semibold transition-colors'>
                          {tag.name}
                        </h3>
                        <p className='text-muted-foreground font-mono text-xs'>{tag.count} posts</p>
                      </div>
                      <Badge
                        variant='secondary'
                        className='border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 shrink-0 border font-mono text-sm transition-colors'
                      >
                        {tag.count}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
