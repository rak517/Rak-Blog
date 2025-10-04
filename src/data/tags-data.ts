// lib/mock-data.ts
export interface Tag {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export const mockTags: Tag[] = [
  {
    id: '1',
    name: 'React',
    slug: 'react',
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    name: 'Next.js',
    slug: 'nextjs',
    createdAt: '2024-01-20T00:00:00Z',
  },
  {
    id: '3',
    name: 'TypeScript',
    slug: 'typescript',
    createdAt: '2024-02-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'JavaScript',
    slug: 'javascript',
    createdAt: '2024-02-05T00:00:00Z',
  },
  {
    id: '5',
    name: 'CSS',
    slug: 'css',
    createdAt: '2024-02-10T00:00:00Z',
  },
  {
    id: '6',
    name: 'Tailwind',
    slug: 'tailwind',
    createdAt: '2024-02-15T00:00:00Z',
  },
  {
    id: '7',
    name: 'Node.js',
    slug: 'nodejs',
    createdAt: '2024-03-01T00:00:00Z',
  },
  {
    id: '8',
    name: 'Frontend',
    slug: 'frontend',
    createdAt: '2024-03-05T00:00:00Z',
  },
  {
    id: '9',
    name: 'Performance',
    slug: 'performance',
    createdAt: '2024-03-10T00:00:00Z',
  },
  {
    id: '10',
    name: 'Web',
    slug: 'web',
    createdAt: '2024-03-15T00:00:00Z',
  },
];
