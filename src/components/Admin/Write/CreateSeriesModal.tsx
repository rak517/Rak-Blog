'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CreateSeriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, description: string) => void;
}

// TODO: 임시 모달. 나중에 추상화된 제너럴 훅으로 리팩토링 ex) useModal({ form: <CreateSeriesForm /> })
export default function CreateSeriesModal({ isOpen, onClose, onConfirm }: CreateSeriesModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleConfirm = () => {
    if (!name.trim()) return;
    onConfirm(name, description);
    setName('');
    setDescription('');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className='animate-in fade-in-0 fixed inset-0 z-50 bg-black/80' onClick={onClose} />

      <div className='animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 duration-200'>
        <div className='bg-background rounded-lg border p-6 shadow-lg'>
          <div className='mb-6 flex items-start justify-between'>
            <div>
              <h2 className='text-lg font-semibold'>
                <span className='text-primary'>📚</span> 새 시리즈 만들기
              </h2>
              <p className='text-muted-foreground mt-1 text-sm'>시리즈 이름과 설명을 입력하세요</p>
            </div>
            <button
              onClick={onClose}
              className='text-muted-foreground hover:text-foreground hover:bg-accent -mt-2 -mr-2 rounded-sm p-2 transition-colors'
            >
              <X className='h-4 w-4' />
            </button>
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='series-name'>
                시리즈 이름 <span className='text-destructive'>*</span>
              </Label>
              <Input
                id='series-name'
                placeholder='예: React 완벽 가이드'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='series-description'>시리즈 설명</Label>
              <Textarea
                id='series-description'
                placeholder='시리즈에 대한 간단한 설명을 입력하세요 (선택사항)'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div className='mt-6 flex justify-end gap-2'>
            <Button variant='outline' onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleConfirm} disabled={!name.trim()}>
              만들기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
