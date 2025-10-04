export interface Series {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnailImage?: string;
  createdAt: string;
  updatedAt: string;
}

export const mockSeries: Series[] = [
  {
    id: 'series-1',
    title: 'React 완벽 가이드',
    description: 'React의 기초부터 고급 개념까지 단계별로 학습합니다.',
    slug: 'react-perfect-guide',
    thumbnailImage: '/series/react-guide.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-20T00:00:00Z',
  },
  {
    id: 'series-2',
    title: 'TypeScript 마스터하기',
    description: 'TypeScript의 타입 시스템을 깊이 있게 다룹니다.',
    slug: 'typescript-master',
    thumbnailImage: '/series/typescript.jpg',
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
  },
];
