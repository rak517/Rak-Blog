import HeroSection from '@/components/Landing/HeroSection';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import BlogPostCard from '@/components/Post/BlogPostCard';
import { mockPosts } from '@/data/posts-data';

export default function Home() {
  const featuredPosts = mockPosts
    .filter((post) => post.status === 'published')
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 3);
  const recentPosts = mockPosts.slice(3, 9);

  return (
    <div className='min-h-screen'>
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='space-y-12 lg:col-span-3'>
            <HeroSection />

            <section>
              <div className='mb-8 flex items-center gap-3'>
                <div className='from-primary to-primary/50 bg-gradient-to-b0 h-8 w-1 rounded-full' />
                <h2 className='font-mono text-2xl font-bold'>
                  <span className='text-primary'>{'//'}</span> 추천글
                </h2>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {featuredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} variant='grid' />
                ))}
              </div>
            </section>

            <section>
              <div className='flex- mb-8 items-center gap-3'>
                <div className='from-primary to-primary/50 bg-gradient-to-b0 h-8 w-1 rounded-full' />
                <h2 className='font-mono text-2xl font-bold'>
                  <span className='text-primary'>{'//'}</span> 최신글
                </h2>
              </div>
              <div className='space-y-4'>
                {recentPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} variant='list' />
                ))}
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}
