import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import type { CreatePostResponse, ErrorResponse, PostDTO } from '@/types/post';
import { createPostSchema } from '@/schemas/post.schema';

// ========================================
// POST /api/posts - 포스트 생성
// ========================================

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // 1. 인증 확인
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: 'Unauthorized',
        },
        { status: 401 },
      );
    }

    // 2. 요청 바디 파싱 및 검증
    const body = await request.json();
    const validationResult = createPostSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.flatten(),
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // 3. slug 중복 체크
    const { data: existingPost } = await supabase.from('posts').select('id').eq('slug', data.slug).single();

    if (existingPost) {
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: 'Slug already exists',
        },
        { status: 409 },
      );
    }

    // 4. 포스트 데이터 준비
    const postData = {
      title: data.title,
      slug: data.slug,
      description: data.description,
      content: data.content,
      thumbnail: data.thumbnail ?? null,
      status: data.status,
      parent_id: data.parent_id ?? null,
      series_id: data.series_id ?? null,
      series_order: data.series_order ?? null,
      published_at: data.status === 'published' ? new Date().toISOString() : null,
    };

    // 5. 포스트 생성
    const { data: createdPost, error: insertError } = await supabase
      .from('posts')
      .insert(postData)
      .select()
      .single<PostDTO>();

    if (insertError || !createdPost) {
      console.error('Post insert error:', insertError);
      return NextResponse.json<ErrorResponse>(
        {
          success: false,
          error: 'Failed to create post',
          details: insertError,
        },
        { status: 500 },
      );
    }

    // 6. 태그 연결 (post_tags)
    if (data.tag_ids && data.tag_ids.length > 0) {
      const postTags = data.tag_ids.map((tagId) => ({
        post_id: createdPost.id,
        tag_id: tagId,
      }));

      const { error: tagError } = await supabase.from('post_tags').insert(postTags);

      if (tagError) {
        console.error('Tag insert error:', tagError);
        // 태그 연결 실패해도 포스트는 생성되었으므로 경고만 로깅
      }
    }

    // 7. 성공 응답 (날짜 변환은 클라이언트 ky afterHook에서 처리)
    return NextResponse.json<CreatePostResponse>(
      {
        success: true,
        data: {
          ...createdPost,
          published_at: createdPost.published_at ? new Date(createdPost.published_at) : null,
          created_at: new Date(createdPost.created_at),
          updated_at: new Date(createdPost.updated_at),
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json<ErrorResponse>(
      {
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
