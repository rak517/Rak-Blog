import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { createPost as createPostAPI } from '@/lib/remote/posts';
import type { CreatePostRequest, Post, ErrorResponse } from '@/types/post';
import { HTTPError } from 'ky';

/**
 * 포스트 생성 mutation 훅
 * Toast + 리다이렉트를 자동으로 처리
 *
 * @example
 * ```tsx
 * const { createPost, isPending } = useCreatePost();
 *
 * createPost({ title: 'My Post', ... });
 * ```
 */
export function useCreatePost() {
  const router = useRouter();

  const mutation = useMutation<Post, HTTPError, CreatePostRequest>({
    mutationFn: createPostAPI,
    onSuccess: (data) => {
      toast.success(data.status === 'published' ? '포스트가 발행되었습니다 🎉' : '포스트가 저장되었습니다');

      if (data.status === 'draft') {
        router.replace(`/admin/write?id=${data.id}`);
      } else {
        router.push(`/admin/posts/${data.id}`);
      }
    },
    onError: async (error) => {
      let errorMessage = '포스트 생성에 실패했습니다';

      try {
        if (error instanceof HTTPError) {
          const errorData = (await error.response.json()) as ErrorResponse;
          errorMessage = errorData.error || errorMessage;
        }
      } catch {}

      toast.error(errorMessage);
    },
  });

  return {
    createPost: mutation.mutate,
    ...mutation,
  };
}
