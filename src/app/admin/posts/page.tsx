'use client';

import { useState } from 'react';
import { mockPosts } from '@/data/posts-data';
import PostCard from '@/components/Admin/PostManagement/PostCard';
import { FileText } from 'lucide-react';
import PostsFilter from '@/components/Admin/PostManagement/PostFilter';

type SortOption = 'latest' | 'oldest' | 'views';

export default function AdminPostsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const publishedPosts = mockPosts.filter((post) => post.status === 'published');

  const filteredPosts = publishedPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime();
      case 'oldest':
        return new Date(a.publishedAt!).getTime() - new Date(b.publishedAt!).getTime();
      case 'views':
        return b.viewCount - a.viewCount;
      default:
        return 0;
    }
  });

  // 액션 핸들러
  const handlePreview = (id: string) => {
    console.log('Preview post:', id);
    // TODO: 미리보기 구현
  };

  const handleEdit = (id: string) => {
    console.log('Edit post:', id);
    // TODO: 편집 페이지로 이동
    // router.push(`/admin/write?id=${id}`);
  };

  const handleDelete = (id: string) => {
    console.log('Delete post:', id);
    // TODO: 삭제 확인 및 처리
    if (confirm('Are you sure you want to delete this post?')) {
      // 삭제 로직
    }
  };

  return (
    <div className='space-y-6'>
      <PostsFilter
        totalCount={sortedPosts.length}
        searchTerm={searchTerm}
        sortBy={sortBy}
        onSearchChange={setSearchTerm}
        onSortChange={setSortBy}
        status='published'
      />

      <div className='space-y-4'>
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} onPreview={handlePreview} onEdit={handleEdit} onDelete={handleDelete} />
          ))
        ) : (
          // Empty State
          <div className='border-border/40 animate-in fade-in-50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-16 duration-300'>
            <div className='bg-muted/30 mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 hover:scale-110'>
              <FileText className='text-muted-foreground h-8 w-8' />
            </div>
            <p className='text-muted-foreground mb-1 text-lg font-medium'>
              {searchTerm ? 'No posts found' : 'No published posts yet'}
            </p>
            <p className='text-muted-foreground text-sm'>
              {searchTerm ? 'Try adjusting your search' : 'Start by creating your first post'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
