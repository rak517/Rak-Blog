import { Card, CardContent } from '@/components/ui/Card';
import { MessageSquare } from 'lucide-react';

export default function CommentsSection() {
  return (
    <section className='mt-12 border-t pt-8'>
      <Card className='border-border/50 shadow-sm'>
        <CardContent className='p-8'>
          <div className='mb-4 flex items-center gap-2'>
            <MessageSquare className='text-primary h-5 w-5' />
            <h3 className='text-lg font-semibold'>댓글</h3>
          </div>
          <div className='border-border/40 bg-muted/30 flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12'>
            <MessageSquare className='text-muted-foreground mb-3 h-12 w-12 opacity-50' />
            <p className='text-muted-foreground font-mono text-sm'>
              <span className='text-primary'>{'// '}</span>
              댓글 기능은 추후 추가될 예정입니다
            </p>
            <p className='text-muted-foreground mt-1 text-xs'>(utterances 연동 예정)</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
