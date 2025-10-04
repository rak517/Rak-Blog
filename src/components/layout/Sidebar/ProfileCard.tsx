import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';
import Image from 'next/image';

export function ProfileCard() {
  return (
    <Card className='border-border/50 overflow-hidden p-0 shadow-md transition-shadow hover:shadow-lg'>
      <CardHeader className='border-border/40 bg-muted/30 border-b px-4 py-2.5'>
        <div className='text-muted-foreground flex items-center space-x-2 font-mono text-xs'>
          <span className='text-primary'>{'//'}</span>
          <span>소개</span>
        </div>
      </CardHeader>
      <CardContent className='space-y-5 p-6'>
        <div className='flex justify-center'>
          <div className='relative'>
            <div className='border-primary/20 ring-primary/5 relative h-24 w-24 overflow-hidden rounded-full border-[3px] ring-4'>
              <Image src='/profile-card.jpg' alt='Profile' fill className='object-cover' sizes='96px' />
            </div>
          </div>
        </div>

        <div className='space-y-0.5 text-center'>
          <h3 className='text-base font-bold'>rak517 🧑🏻‍💻</h3>
          <p className='text-muted-foreground text-sm'>Frontend Developer</p>
        </div>

        <Separator />

        <p className='text-muted-foreground text-center text-sm leading-relaxed'>
          새로운 기술을 배우고 경험을 공유하는 것을 좋아하는 개발자입니다.
        </p>
      </CardContent>
    </Card>
  );
}
