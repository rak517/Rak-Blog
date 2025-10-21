import { api } from '@/lib/api-client';
import type { CreatePostRequest, CreatePostResponse, Post } from '@/types/post';

/**
 * 새로운 포스트를 생성
 *
 * @param data - 포스트 생성 데이터
 * @returns 생성된 포스트 정보
 *
 * @example
 * ```ts
 * const newPost = await createPost({
 *   title: 'My First Post',
 *   description: 'This is a description',
 *   content: '# Hello World',
 *   status: 'draft',
 * });
 * ```
 */
export async function createPost(data: CreatePostRequest): Promise<Post> {
  const response = await api.post<CreatePostResponse>('posts', data);
  return response.data;
}

/**
 * 포스트 목록 조회 (향후 구현)
 */
export async function getPosts() {
  // TODO: 구현 예정
  throw new Error('Not implemented yet');
}

/**
 * 포스트 상세 조회 (향후 구현)
 */
export async function getPost(id: string) {
  // TODO: 구현 예정
  throw new Error('Not implemented yet');
}

/**
 * 포스트 수정 (향후 구현)
 */
export async function updatePost(id: string, data: Partial<CreatePostRequest>) {
  // TODO: 구현 예정
  throw new Error('Not implemented yet');
}

/**
 * 포스트 삭제 (향후 구현)
 */
export async function deletePost(id: string) {
  // TODO: 구현 예정
  throw new Error('Not implemented yet');
}
