import Link from 'next/link';
import { mockTags } from '@/data/tags-data';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function TagsCard() {
  const popularTags = mockTags.slice(0, 10);

  return (
    <Card className='border-border/50 overflow-hidden p-0 shadow-md transition-shadow hover:shadow-lg'>
      <CardHeader className='border-border/40 bg-muted/30 border-b px-4 py-2.5'>
        <div className='text-muted-foreground flex items-center space-x-2 font-mono text-xs'>
          <span className='text-primary'>{'//'}</span>
          <span>인기 태그</span>
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='flex flex-wrap gap-2'>
          {popularTags.map((tag) => (
            <Link key={tag.id} href={`/tags/${tag.slug}`}>
              <Badge
                variant='secondary'
                className='hover:bg-primary/15 hover:border-primary/40 border-border/50 cursor-pointer border transition-all hover:scale-[1.02] hover:shadow-sm'
              >
                <span className='text-primary mr-0.5'>#</span>
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
