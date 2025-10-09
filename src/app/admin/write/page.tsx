'use client';

import { useState } from 'react';
import WriteHeader from '@/components/Admin/Write/WriteHeader';
import MarkdownEditor from '@/components/Admin/Write/MarkdownEditor';
import MarkdownPreview from '@/components/Admin/Write/MarkdownPreview';

export default function WritePage() {
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // 임시저장 핸들러
  const handleSaveDraft = async () => {
    setIsSaving(true);

    // TODO: 실제 저장 로직 구현
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const now = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setLastSaved(now);
    setIsSaving(false);
  };

  // 발행하기 핸들러
  const handlePublish = async () => {
    setIsSaving(true);

    // TODO: 실제 발행 로직 구현
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSaving(false);
    console.log('발행 완료!');
  };

  return (
    <div className='flex h-screen flex-col'>
      <WriteHeader onSaveDraft={handleSaveDraft} onPublish={handlePublish} isSaving={isSaving} lastSaved={lastSaved} />

      <main className='flex flex-1 overflow-hidden'>
        <div className='flex w-full flex-col border-r lg:w-1/2'>
          {/* 제목 입력 영역 (다음 단계에서 추가) */}
          <div className='border-border/40 border-b p-6'>
            <input
              type='text'
              placeholder='제목을 입력하세요'
              className='text-foreground placeholder:text-muted-foreground w-full bg-transparent text-4xl font-bold outline-none'
            />
          </div>

          <div className='flex-1 overflow-hidden'>
            <MarkdownEditor value={content} onChange={setContent} />
          </div>
        </div>

        <div className='bg-muted/30 hidden w-1/2 overflow-hidden lg:block'>
          <div className='flex h-full flex-col'>
            <div className='border-border/40 flex items-center border-b px-6 py-3'>
              <span className='text-muted-foreground font-mono text-sm font-medium'>
                <span className='text-primary'>{'//'}</span> 미리보기
              </span>
            </div>
            <div className='flex-1 overflow-hidden'>
              <MarkdownPreview content={content} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
