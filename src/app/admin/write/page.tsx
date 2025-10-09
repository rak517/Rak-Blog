'use client';

import { useState } from 'react';
import WriteHeader from '@/components/Admin/Write/WriteHeader';
import MarkdownEditor from '@/components/Admin/Write/MarkdownEditor';
import MarkdownPreview from '@/components/Admin/Write/MarkdownPreview';
import PostMetaForm from '@/components/Admin/Write/PostMetaForm';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const handleSaveDraft = async () => {
    setIsSaving(true);

    // TODO: 실제 저장 로직 구현
    console.log('임시저장:', { title, description, tags, content });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const now = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setLastSaved(now);
    setIsSaving(false);
  };

  const handlePublish = async () => {
    setIsSaving(true);

    // TODO: 실제 발행 로직 구현
    console.log('발행:', { title, description, tags, content });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSaving(false);
    console.log('발행 완료!');
  };

  return (
    <div className='flex h-screen flex-col'>
      <WriteHeader onSaveDraft={handleSaveDraft} onPublish={handlePublish} isSaving={isSaving} lastSaved={lastSaved} />

      <main className='flex flex-1 overflow-hidden'>
        <div className='flex w-full flex-col border-r lg:w-1/2'>
          <div className='border-border/40 max-h-[50vh] overflow-y-auto border-b'>
            <PostMetaForm
              title={title}
              description={description}
              tags={tags}
              onTitleChange={setTitle}
              onDescriptionChange={setDescription}
              onTagsChange={setTags}
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
