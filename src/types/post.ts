export interface PostDTO {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  content: string;
  thumbnail: string | null;

  status: 'draft' | 'published';
  parent_id: string | null;

  series_id: string | null;
  series_order: number | null;

  view_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface SeriesDTO {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnail_image: string | null;
  created_at: string;
  updated_at: string;
}

export interface TagDTO {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  content: string;
  thumbnail: string | null;

  status: 'draft' | 'published';
  parent_id: string | null;

  series_id: string | null;
  series_order: number | null;

  view_count: number;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface Series {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnail_image: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: Date;
}

export interface CreatePostRequest {
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail?: string | null;

  status: 'draft' | 'published';
  parent_id?: string | null;

  series_id?: string | null;
  series_order?: number | null;

  tag_ids?: string[];
}

export interface CreatePostResponse {
  success: boolean;
  data: Post;
}

export interface UpdatePostRequest extends Partial<CreatePostRequest> {
  id: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}
