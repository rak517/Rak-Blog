export interface Post {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  content: string;
  seriesId: string | null;
  seriesOrder: number | null;
  status: 'draft' | 'published';
  viewCount: number;
  parentId: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'React 19의 새로운 기능들',
    slug: 'react-19-new-features',
    description: 'React 19에서 추가된 새로운 기능과 변경사항을 알아봅니다.',
    content: `# React 19의 새로운 기능들

React 19가 출시되면서 많은 새로운 기능과 개선사항이 추가되었습니다.

## 주요 변경사항

### 1. React Compiler

React 19에서는 **자동 메모이제이션**을 제공하는 컴파일러가 추가되었습니다.

\`\`\`typescript
// 이제 useMemo, useCallback을 직접 사용할 필요가 없습니다
function TodoList({ todos, tab }) {
  const visibleTodos = filterTodos(todos, tab);
  return (
    <ul>
      {visibleTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

### 2. Actions

폼 처리를 위한 새로운 \`action\` prop이 추가되었습니다.

## 성능 개선

React 19는 다음과 같은 성능 개선이 있습니다:

- **더 빠른 초기 렌더링**: 최대 30% 개선
- **메모리 사용량 감소**: 평균 20% 감소  
- **번들 크기 최적화**: gzip 기준 약 15% 감소

> ⚠️ **주의**: React 19로 업그레이드 시 Breaking Changes를 확인하세요.
`,
    seriesId: 'series-1',
    seriesOrder: 1,
    status: 'published',
    viewCount: 1234,
    parentId: null,
    publishedAt: '2024-03-20T09:00:00Z',
    createdAt: '2024-03-20T09:00:00Z',
    updatedAt: '2024-03-20T09:00:00Z',
  },
  {
    id: '2',
    title: 'Next.js App Router 완벽 가이드',
    slug: 'nextjs-app-router-guide',
    description: 'App Router의 모든 것을 파헤쳐봅니다.',
    content: 'Next.js App Router content...',
    seriesId: null,
    seriesOrder: null,
    status: 'published',
    viewCount: 987,
    parentId: null,
    publishedAt: '2024-03-18T14:30:00Z',
    createdAt: '2024-03-18T14:30:00Z',
    updatedAt: '2024-03-18T14:30:00Z',
  },
  {
    id: '3',
    title: 'TypeScript 5.0 주요 변경사항',
    slug: 'typescript-5-changes',
    description: 'TypeScript 5.0에서 바뀐 점들을 정리했습니다.',
    content: 'TypeScript 5.0 content...',
    seriesId: 'series-2',
    seriesOrder: 1,
    status: 'published',
    viewCount: 2100,
    parentId: null,
    publishedAt: '2024-03-15T10:00:00Z',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
  },
  {
    id: '4',
    title: 'Tailwind CSS 꿀팁 모음',
    slug: 'tailwind-css-tips',
    description: '실무에서 유용한 Tailwind CSS 사용법을 공유합니다.',
    content: 'Tailwind tips content...',
    seriesId: null,
    seriesOrder: null,
    status: 'published',
    viewCount: 645,
    parentId: null,
    publishedAt: '2024-03-12T16:20:00Z',
    createdAt: '2024-03-12T16:20:00Z',
    updatedAt: '2024-03-12T16:20:00Z',
  },
  {
    id: '5',
    title: '웹 성능 최적화 실전 가이드',
    slug: 'web-performance-optimization',
    description: '실제 프로젝트에 적용한 성능 최적화 기법들을 소개합니다.',
    content: 'Performance optimization content...',
    seriesId: null,
    seriesOrder: null,
    status: 'published',
    viewCount: 1892,
    parentId: null,
    publishedAt: '2024-03-10T11:45:00Z',
    createdAt: '2024-03-10T11:45:00Z',
    updatedAt: '2024-03-10T11:45:00Z',
  },
  {
    id: '6',
    title: 'React Hooks 심화 가이드',
    slug: 'react-hooks-advanced',
    description: 'useCallback, useMemo, useRef 제대로 사용하기',
    content: 'React Hooks content...',
    seriesId: 'series-1',
    seriesOrder: 2,
    status: 'published',
    viewCount: 1567,
    parentId: null,
    publishedAt: '2024-03-08T15:00:00Z',
    createdAt: '2024-03-08T15:00:00Z',
    updatedAt: '2024-03-08T15:00:00Z',
  },
];
