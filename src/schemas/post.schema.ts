import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  slug: z.string().nullable().optional(),
  description: z.string().min(1, 'Description is required').max(500, 'Description is too long'),
  content: z.string().min(1, 'Content is required'),
  thumbnail: z.string().url('Invalid thumbnail URL').nullable().optional(),

  status: z.enum(['draft', 'published']),
  parent_id: z.string().uuid().nullable().optional(),

  series_id: z.string().uuid().nullable().optional(),
  series_order: z.number().int().positive().nullable().optional(),

  tag_ids: z.array(z.string().uuid()).optional(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

export const updatePostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200).optional(),
  slug: z.string().nullable().optional(),
  description: z.string().min(1).max(500).optional(),
  content: z.string().min(1).optional(),
  thumbnail: z.string().url().nullable().optional(),

  status: z.enum(['draft', 'published']).optional(),
  parent_id: z.string().uuid().nullable().optional(),

  series_id: z.string().uuid().nullable().optional(),
  series_order: z.number().int().positive().nullable().optional(),

  tag_ids: z.array(z.string().uuid()).optional(),
});

export type UpdatePostInput = z.infer<typeof updatePostSchema>;
