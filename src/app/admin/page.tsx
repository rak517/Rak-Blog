import RecentPostsList from '@/components/Admin/Dashboard/RecentPostsList';
import StatCard from '@/components/Admin/Dashboard/StatCard';
import { mockAdminStats, mockRecentPosts } from '@/data/admin-stats-data';
import { Eye, FileText, Hash, MessageSquare } from 'lucide-react';

export default function Page() {
  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h1 className='font-mono text-3xl font-bold'>
          <span className='text-primary'>{'//'}</span> Dashboard
        </h1>
        <p className='text-muted-foreground font-mono text-sm'>블로그 관리 대시보드에 오신 것을 환영합니다</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <StatCard title='총 글 수' value={mockAdminStats.totalPosts} icon={FileText} description='발행된 글' />
        <StatCard title='총 조회수' value={mockAdminStats.totalViews} icon={Eye} description='누적 조회' />
        <StatCard title='작성된 댓글' value={mockAdminStats.totalComments} icon={MessageSquare} description='댓글' />
        <StatCard title='서용 중인 태그' value={mockAdminStats.totalTags} icon={Hash} description='태그' />
      </div>

      <div className='grid gap-6 lg:grid-cols-2'>
        <RecentPostsList posts={mockRecentPosts} />

        <div className='bg-muted/30 border-border/50 flex items-center justify-center rounded-lg border-2 border-dashed p-12'>
          <p className='text-muted-foreground font-mono text-sm'>
            <span className='text-primary'>{'// '}</span>
            차트 영역 (추후 구현)
          </p>
        </div>
      </div>
    </div>
  );
}
