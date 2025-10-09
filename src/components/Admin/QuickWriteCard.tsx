import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function QuickWriteCard() {
  return (
    <Card className='border-border/50 p-0 shadow-md'>
      <CardContent className='p-4'>
        <Button asChild className='w-full' size='lg'>
          <Link href='/admin/write'>
            <Plus className='h-5 w-5' />새 글 작성
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
