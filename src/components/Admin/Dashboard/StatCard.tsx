import { Card, CardContent } from '@/components/ui/Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
}

export default function StatCard({ title, value, icon: Icon, description }: StatCardProps) {
  return (
    <Card className='border-border/50 group p-0 shadow-md transition-all hover:shadow-lg'>
      <CardContent className='p-6'>
        <div className='flex items-start justify-between'>
          <div className='space-y-3'>
            <p className='text-muted-foreground font-mono text-sm'>{title}</p>
            <div className='flex items-baseline space-x-2'>
              <span className='font-mono text-3xl font-bold'>{value.toLocaleString()}</span>
              {description && <span className='text-muted-foreground font-mono text-sm'>{description}</span>}
            </div>
          </div>

          <div className='bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors'>
            <Icon className='text-primary h-6 w-6' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
