import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Layers } from 'lucide-react';
import Link from 'next/link';
import { Series } from '@/data/series-data';

interface SeriesNavigationCardProps {
  series: Series;
  currentOrder: number;
  totalPosts: number;
}

export default function SeriesNavigationCard({ series, currentOrder, totalPosts }: SeriesNavigationCardProps) {
  return (
    <div className='mb-8'>
      <Link href={`/series/${series.slug}`}>
        <Card className='hover:bg-muted/50 cursor-pointer transition-colors'>
          <CardContent className='p-4'>
            <div className='flex items-center gap-2'>
              <Layers className='text-primary h-4 w-4' />
              <span className='text-primary text-sm font-medium'>{series.title}</span>
              <Badge variant='outline' className='text-xs'>
                {currentOrder}/{totalPosts}편
              </Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
