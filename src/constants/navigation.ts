import { Home, FileText, Layers, Tag, User, Settings } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'home',
    icon: Home,
  },
  {
    href: '/posts',
    label: 'posts',
    icon: FileText,
  },
  {
    href: '/series',
    label: 'series',
    icon: Layers,
  },
  {
    href: '/tags',
    label: 'tags',
    icon: Tag,
  },
  {
    href: '/about',
    label: 'about',
    icon: User,
  },
];

export const ADMIN_LINK = {
  href: '/admin',
  label: 'admin',
  icon: Settings,
};
