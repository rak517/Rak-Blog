'use client';

import { Button } from '@/components/ui/Button';
import { ArrowLeft, Save, Send } from 'lucide-react';
import Link from 'next/link';

interface WriteHeaderProps {
  onSaveDraft: () => void;
  onPublish: () => void;
  isSaving?: boolean;
  lastSaved?: string | null;
}

export default function WriteHeader({ onSaveDraft, onPublish, isSaving = false, lastSaved }: WriteHeaderProps) {
  return (
    <header className='supports-[backdrop-filter]:bg-background/60 bg-background/95 border-border/40 sticky top-0 z-50 border-b backdrop-blur'>
      <div className='via-primary/50 absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent' />

      <div className='px-4 lg:container lg:mx-auto'>
        <div className='flex h-14 items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <Button variant='ghost' size='sm' asChild className='hover:bg-primary/10'>
              <Link href='/admin/posts'>
                <ArrowLeft className='h-4 w-4' />
                <span className='hidden sm:inline'>목록</span>
              </Link>
            </Button>

            {lastSaved && (
              <span className='text-muted-foreground hidden font-mono text-xs sm:inline'>
                {isSaving ? '저장 중...' : `마지막 저장: ${lastSaved}`}
              </span>
            )}
          </div>

          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={onSaveDraft}
              disabled={isSaving}
              className='hover:bg-primary/10 gap-1.5'
            >
              <Save className='h-4 w-4' />
              <span className='hidden sm:inline'>임시저장</span>
            </Button>

            <Button size='sm' onClick={onPublish} disabled={isSaving} className='gap-1.5'>
              <Send className='h-4 w-4' />
              <span>발행하기</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
