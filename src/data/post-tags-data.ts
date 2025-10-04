export interface PostTag {
  postId: string;
  tagId: string;
  createdAt: string;
}

export const mockPostTags: PostTag[] = [
  // Post 1: React, TypeScript
  { postId: '1', tagId: '1', createdAt: '2024-03-20T09:00:00Z' },
  { postId: '1', tagId: '3', createdAt: '2024-03-20T09:00:00Z' },

  // Post 2: Next.js, TypeScript
  { postId: '2', tagId: '2', createdAt: '2024-03-18T14:30:00Z' },
  { postId: '2', tagId: '3', createdAt: '2024-03-18T14:30:00Z' },

  // Post 3: TypeScript
  { postId: '3', tagId: '3', createdAt: '2024-03-15T10:00:00Z' },

  // Post 4: CSS, Tailwind
  { postId: '4', tagId: '5', createdAt: '2024-03-12T16:20:00Z' },
  { postId: '4', tagId: '6', createdAt: '2024-03-12T16:20:00Z' },

  // Post 5: Frontend, Performance
  { postId: '5', tagId: '8', createdAt: '2024-03-10T11:45:00Z' },
  { postId: '5', tagId: '9', createdAt: '2024-03-10T11:45:00Z' },

  // Post 6: React, TypeScript
  { postId: '6', tagId: '1', createdAt: '2024-03-08T15:00:00Z' },
  { postId: '6', tagId: '3', createdAt: '2024-03-08T15:00:00Z' },
];
