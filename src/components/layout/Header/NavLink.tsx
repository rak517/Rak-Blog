import { cn } from '@/utils/cn';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  variant?: 'desktop' | 'mobile';
}

export default function NavLink({ href, label, icon: Icon, isActive = false, variant = 'desktop' }: NavLinkProps) {
  const baseClasses = 'group flex items-center rounded-md hover:bg-primary/10 transition-colors';

  const variantClasses = {
    desktop: 'space-x-2 px-3 py-1.5 duration-200',
    mobile: 'space-x-3 px-3 py-2',
  };

  const iconClasses = cn(
    'w-4 h-4 transition-colors',
    isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary',
  );

  const textClasses = cn(
    'text-sm font-mono transition-colors',
    isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-primary',
  );

  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant])}>
      <Icon className={iconClasses} />
      <span className={textClasses}>{label}</span>
    </Link>
  );
}
