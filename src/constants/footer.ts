import { Github, Mail } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface FooterLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { href: '/posts', label: 'posts' },
  { href: '/series', label: 'series' },
  { href: '/about', label: 'about' },
];

export const FOOTER_CATEGORIES: FooterLink[] = [
  { href: '/tags/react', label: 'React' },
  { href: '/tags/javascript', label: 'JavaScript' },
  { href: '/tags/typescript', label: 'TypeScript' },
  { href: '/tags/css', label: 'CSS' },
  { href: '/tags/nextjs', label: 'Next.js' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/rak517',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'mailto:tjdfkr01@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

export const FOOTER_INFO = {
  description: '코드와 함께하는 일상, 배움과 경험을 공유하는 개발 블로그',
  copyright: '2025 RakBlog',
};
