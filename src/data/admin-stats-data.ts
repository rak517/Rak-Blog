export interface AdminStats {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
  totalTags: number;
}

export interface RecentPost {
  id: string;
  title: string;
  status: 'published' | 'draft';
  views: number;
  publishedAt: string;
}

export interface WeeklyViewData {
  date: string;
  views: number;
}

export const mockAdminStats: AdminStats = {
  totalPosts: 9,
  totalViews: 860,
  totalComments: 15,
  totalTags: 10,
};

export const mockRecentPosts: RecentPost[] = [
  {
    id: '1',
    title: 'React 19의 새로운 기능들',
    status: 'published',
    views: 1234,
    publishedAt: '2024-03-20T09:00:00Z',
  },
  {
    id: '2',
    title: 'Next.js App Router 완벽 가이드',
    status: 'published',
    views: 987,
    publishedAt: '2024-03-18T14:30:00Z',
  },
  {
    id: '3',
    title: 'TypeScript 5.0 주요 변경사항',
    status: 'published',
    views: 2100,
    publishedAt: '2024-03-15T10:00:00Z',
  },
  {
    id: '4',
    title: 'Tailwind CSS 꿀팁 모음',
    status: 'published',
    views: 645,
    publishedAt: '2024-03-12T16:20:00Z',
  },
  {
    id: '5',
    title: '웹 성능 최적화 실전 가이드',
    status: 'published',
    views: 1892,
    publishedAt: '2024-03-10T11:45:00Z',
  },
];

export const mockWeeklyViews: WeeklyViewData[] = [
  { date: '2024-03-14', views: 120 },
  { date: '2024-03-15', views: 145 },
  { date: '2024-03-16', views: 98 },
  { date: '2024-03-17', views: 156 },
  { date: '2024-03-18', views: 132 },
  { date: '2024-03-19', views: 110 },
  { date: '2024-03-20', views: 99 },
];
