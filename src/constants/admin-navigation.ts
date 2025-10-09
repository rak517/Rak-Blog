import { FileClock, FileText, LayoutDashboard, MessageSquare, Settings } from 'lucide-react';

export const NAV_ITEMS = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/admin/posts',
    label: 'Posts',
    icon: FileText,
  },
  {
    href: '/admin/drafts',
    label: 'Drafts',
    icon: FileClock,
  },
  {
    href: '/admin/comments',
    label: 'Comments',
    icon: MessageSquare,
  },
  {
    href: '/admin/settings',
    label: 'Settings',
    icon: Settings,
  },
];
