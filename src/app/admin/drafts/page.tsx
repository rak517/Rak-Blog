'use client';

import { useState } from 'react';
import { mockPosts } from '@/data/posts-data';
import PostCard from '@/components/Admin/PostManagement/PostCard';
import { FileClock } from 'lucide-react';
import PostsFilter from '@/components/Admin/PostManagement/PostFilter';

type SortOption = 'latest' | 'oldest' | 'views';

export default function AdminDraftsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const draftPosts = mockPosts.filter((post) => post.status === 'draft');

  const filteredPosts = draftPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      case 'oldest':
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      default:
        return 0;
    }
  });

  const handlePreview = (id: string) => {
    console.log('Preview draft:', id);
    // TODO: Draft 미리보기 구현
  };

  const handleEdit = (id: string) => {
    console.log('Edit draft:', id);
    // TODO: 편집 페이지로 이동
    // router.push(`/admin/write?id=${id}`);
  };

  const handleDelete = (id: string) => {
    console.log('Delete draft:', id);
    // TODO: 삭제 확인 및 처리
    if (confirm('Are you sure you want to delete this draft?')) {
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
        status='draft'
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
              <FileClock className='text-muted-foreground h-8 w-8' />
            </div>
            <p className='text-muted-foreground mb-1 text-lg font-medium'>
              {searchTerm ? 'No drafts found' : 'No drafts yet'}
            </p>
            <p className='text-muted-foreground text-sm'>
              {searchTerm ? 'Try adjusting your search' : 'All your work in progress will appear here'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
