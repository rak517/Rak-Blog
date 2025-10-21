'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import WriteHeader from '@/components/Admin/Write/WriteHeader';
import MarkdownEditor from '@/components/Admin/Write/MarkdownEditor';
import MarkdownPreview from '@/components/Admin/Write/MarkdownPreview';
import PostMetaForm from '@/components/Admin/Write/PostMetaForm';
import { useCreatePost } from '@/hooks/api';
import { createPostSchema, type CreatePostInput } from '@/schemas/post.schema';

export default function WritePage() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const form = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      slug: '',
      description: '',
      content: '',
      status: 'draft',
      tag_ids: [],
      series_id: null,
      series_order: null,
    },
  });

  const { createPost, isPending } = useCreatePost();

  // TODO: postId가 있으면 데이터 로드
  // useEffect(() => {
  //   if (postId) {
  //     const post = await getPost(postId);
  //     form.reset(post);
  //   }
  // }, [postId]);

  const handleSaveDraft = () => {
    const values = form.getValues();

    if (!values.title?.trim() || !values.slug?.trim()) {
      return;
    }

    createPost({
      title: values.title,
      slug: values.slug,
      description: values.description,
      content: values.content,
      thumbnail: values.thumbnail,
      status: 'draft',
      parent_id: postId?.startsWith('post-') ? postId : undefined,
      series_id: values.series_id,
      series_order: values.series_order,
      tag_ids: values.tag_ids,
    });
  };

  const handlePublish = () => {
    const values = form.getValues();

    if (!values.title?.trim() || !values.slug?.trim() || !values.description?.trim()) {
      return;
    }

    createPost({
      title: values.title,
      slug: values.slug,
      description: values.description,
      content: values.content,
      thumbnail: values.thumbnail,
      status: 'published',
      parent_id: postId?.startsWith('post-') ? postId : undefined,
      series_id: values.series_id,
      series_order: values.series_order,
      tag_ids: values.tag_ids,
    });
  };

  return (
    <FormProvider {...form}>
      <div className='flex h-screen flex-col'>
        <WriteHeader onSaveDraft={handleSaveDraft} onPublish={handlePublish} isSaving={isPending} />

        <main className='flex flex-1 overflow-hidden'>
          <div className='flex w-full flex-col border-r lg:w-1/2'>
            <div className='border-border/40 max-h-[50vh] overflow-y-auto border-b'>
              <PostMetaForm />
            </div>

            <div className='flex-1 overflow-hidden'>
              <MarkdownEditor />
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
                <MarkdownPreview />
              </div>
            </div>
          </div>
        </main>
      </div>
    </FormProvider>
  );
}
