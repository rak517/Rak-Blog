'use client';

import { useState } from 'react';
import { Separator } from '@/components/ui/Separator';
import { Textarea } from '@/components/ui/Textarea';
import CreateSeriesModal from './CreateSeriesModal';
import TagInput from './TagInput';
import SeriesSelect from './SeriesSelect';
import { mockSeries } from '@/data/series-data';

interface PostMetaFormProps {
  title: string;
  description: string;
  tags: string[];
  seriesId: string | null;
  seriesOrder: number | null;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onTagsChange: (tags: string[]) => void;
  onSeriesChange: (seriesId: string | null) => void;
  onSeriesOrderChange: (order: number | null) => void;
}

export default function PostMetaForm({
  title,
  description,
  tags,
  seriesId,
  seriesOrder,
  onTitleChange,
  onDescriptionChange,
  onTagsChange,
  onSeriesChange,
  onSeriesOrderChange,
}: PostMetaFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSeries = (name: string, desc: string) => {
    console.log('새 시리즈 생성:', { name, description: desc });
    setIsModalOpen(false);
    // TODO: 실제 시리즈 생성 로직
  };
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

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>#</span> 태그
        </label>
        <TagInput tags={tags} onTagsChange={onTagsChange} />
      </div>

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>📚</span> 시리즈
        </label>
        <SeriesSelect
          series={mockSeries}
          selectedSeriesId={seriesId}
          seriesOrder={seriesOrder}
          onSeriesChange={onSeriesChange}
          onSeriesOrderChange={onSeriesOrderChange}
          onCreateNewSeries={() => setIsModalOpen(true)}
        />
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

      <CreateSeriesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleCreateSeries} />
    </div>
  );
}
