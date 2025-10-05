'use client';

import { useState } from 'react';
import BlogPostCard from '@/components/Post/BlogPostCard';
import PostsFilter from '@/components/Post/PostsFilter';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { mockPosts } from '@/data/posts-data';
import { Search } from 'lucide-react';

// TODO: 쿼리파라미터로 필터, 검색 관리
export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  // 필터링 로직
  const filteredPosts = mockPosts
    .filter((post) => {
      if (post.status !== 'published') return false;

      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());

      // 태그 필터 (나중에 구현)
      const matchesTag = true; // selectedTag 로직은 나중에

      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime();
      }
      return b.viewCount - a.viewCount;
    });

  return (
    <div className='min-h-screen'>
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='space-y-8 lg:col-span-3'>
            <PostsFilter
              totalCount={filteredPosts.length}
              searchTerm={searchTerm}
              selectedTag={selectedTag}
              sortBy={sortBy}
              onSearchChange={setSearchTerm}
              onSortChange={setSortBy}
              onTagChange={setSelectedTag}
            />

            <div className='space-y-4'>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => <BlogPostCard key={post.id} post={post} variant='list' />)
              ) : (
                <div className='flex flex-col items-center justify-center py-16'>
                  <div className='border-border/40 bg-muted/30 mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
                    <Search className='text-muted-foreground h-8 w-8' />
                  </div>
                  <p className='text-muted-foreground font-mono text-lg'>
                    <span className='text-primary'>{'// '}</span>
                    검색 결과가 없습니다
                  </p>
                </div>
              )}
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}
