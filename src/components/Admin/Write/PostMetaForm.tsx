'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Separator } from '@/components/ui/Separator';
import { Textarea } from '@/components/ui/Textarea';
import CreateSeriesModal from './CreateSeriesModal';
import TagInput from './TagInput';
import SeriesSelect from './SeriesSelect';
import { mockSeries } from '@/data/series-data';
import type { CreatePostInput } from '@/schemas/post.schema';
import { Input } from '@/components/ui/Input';

export default function PostMetaForm() {
  const { register, watch, setValue } = useFormContext<CreatePostInput>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const description = watch('description');
  const tags = watch('tag_ids') || [];
  const seriesId = watch('series_id');
  const seriesOrder = watch('series_order');

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
        {...register('title')}
        className='text-foreground placeholder:text-muted-foreground w-full bg-transparent text-4xl font-bold outline-none'
      />

      <Separator />

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>🔗</span> URL Slug
          <span className='text-destructive ml-1'>*</span>
        </label>
        <Input
          type='text'
          placeholder='my-blog-post (영문, 숫자, 하이픈만 가능)'
          {...register('slug')}
          className='text-foreground placeholder:text-muted-foreground border-border focus:border-primary w-full rounded-md border bg-transparent px-3 py-2 font-mono text-sm outline-none'
        />
        <p className='text-muted-foreground text-xs'>
          <span className='text-primary'>💡</span> 포스트의 고유 URL 주소입니다 (예: my-first-post)
        </p>
      </div>

      <Separator />

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>#</span> 태그
        </label>
        <TagInput tags={tags} onTagsChange={(newTags) => setValue('tag_ids', newTags)} />
      </div>

      <div className='space-y-2'>
        <label className='text-muted-foreground block font-mono text-sm'>
          <span className='text-primary'>📚</span> 시리즈
        </label>
        <SeriesSelect
          series={mockSeries}
          selectedSeriesId={seriesId ?? null}
          seriesOrder={seriesOrder ?? null}
          onSeriesChange={(id) => setValue('series_id', id)}
          onSeriesOrderChange={(order) => setValue('series_order', order)}
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
          {...register('description')}
          className='resize-none font-mono text-sm'
          rows={3}
        />
        <p className='text-muted-foreground text-right font-mono text-xs'>{description?.length || 0} / 300</p>
      </div>

      <CreateSeriesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleCreateSeries} />
    </div>
  );
}
