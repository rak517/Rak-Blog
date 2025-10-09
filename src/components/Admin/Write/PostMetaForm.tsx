'use client';

import { Separator } from '@/components/ui/Separator';
import { Textarea } from '@/components/ui/Textarea';

interface PostMetaFormProps {
  title: string;
  description: string;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
}

export default function PostMetaForm({ title, description, onTitleChange, onDescriptionChange }: PostMetaFormProps) {
  return (
    <div className='space-y-4 p-6'>
      <input
        type='text'
        placeholder='제목을 입력하세요'
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className='text-foreground placeholder:text-muted-foreground w-full bg-transparent text-4xl font-bold outline-none'
      />

      <Separator />

      {/* 태그 입력 영역 (다음 단계에서 구현) */}
      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>#</span> 태그
        </label>
        <div className='text-muted-foreground rounded-lg border border-dashed p-3 text-center font-mono text-sm'>
          태그 입력 컴포넌트 (다음 단계에서 추가)
        </div>
      </div>

      {/* 시리즈 선택 영역 (다음 단계에서 구현) */}
      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>📚</span> 시리즈
        </label>
        <div className='text-muted-foreground rounded-lg border border-dashed p-3 text-center font-mono text-sm'>
          시리즈 선택 컴포넌트 (다음 단계에서 추가)
        </div>
      </div>

      <Separator />

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>✏️</span> 요약
        </label>
        <Textarea
          placeholder='글에 대한 간단한 설명을 입력하세요 (선택사항)'
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className='resize-none font-mono text-sm'
          rows={3}
        />
        <p className='text-muted-foreground text-right font-mono text-xs'>{description.length} / 300</p>
      </div>
    </div>
  );
}
