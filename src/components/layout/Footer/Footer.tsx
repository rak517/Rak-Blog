import Link from 'next/link';
import { FOOTER_LINKS, FOOTER_CATEGORIES, SOCIAL_LINKS, FOOTER_INFO } from '@/constants/footer';

export function Footer() {
  return (
    <footer className='supports-[backdrop-filter]:bg-background/60 bg-background/95 border-border/40 relative border-t backdrop-blur'>
      <div className='via-primary/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent' />

      <div className='px-4 py-8 lg:container lg:mx-auto lg:py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='md:col-span-2'>
            <div className='bg-primary/5 group border-border/60 hover:border-primary/30 hover:shadow-primary/5 mb-4 overflow-hidden rounded-lg border transition-all hover:shadow-lg'>
              <div className='border-border/60 bg-background/50 flex items-center justify-between border-b px-4 py-2'>
                <div className='flex items-center space-x-2'>
                  <div className='flex space-x-1.5'>
                    <div className='h-3 w-3 rounded-full bg-red-500/80' />
                    <div className='h-3 w-3 rounded-full bg-yellow-500/80' />
                    <div className='h-3 w-3 rounded-full bg-green-500/80' />
                  </div>
                  <span className='text-muted-foreground font-mono text-xs'>bash</span>
                </div>
                <span className='text-muted-foreground font-mono text-[10px]'>~/RakBlog</span>
              </div>

              <div className='p-4'>
                <div className='mb-3 flex items-center space-x-2 font-mono text-xs'>
                  <span className='text-green-500'>rak@blog</span>
                  <span className='text-muted-foreground'>:</span>
                  <span className='text-blue-500'>~</span>
                  <span className='text-primary'>$</span>
                  <span className='text-muted-foreground'>cat README.md</span>
                  <span className='animate-pulse'>_</span>
                </div>

                <div className='space-y-2'>
                  <h3 className='text-foreground font-mono text-sm font-semibold'>
                    <span className='text-purple-500'># </span>RakBlog.tsx
                  </h3>
                  <p className='border-border/40 text-muted-foreground border-l-2 pl-3 font-mono text-xs leading-relaxed'>
                    {FOOTER_INFO.description}
                  </p>
                  <div className='text-muted-foreground flex items-center space-x-2 font-mono text-xs'>
                    <span className='text-green-500'>✓</span>
                    <span>Version 1.0.0</span>
                    <span>•</span>
                    <span>Last updated: 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-2'>
              <span className='text-muted-foreground font-mono text-xs'>Connect:</span>
              <div className='flex space-x-1'>
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className='hover:bg-primary/10 group relative flex h-10 w-10 items-center justify-center rounded-md transition-all hover:scale-110'
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                  >
                    <social.icon className='text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors' />
                    <span className='bg-primary text-primary-foreground pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 font-mono text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className='mb-3 flex items-center space-x-2'>
              <div className='bg-primary h-3 w-0.5' />
              <h4 className='text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase'>
                Explorer
              </h4>
              <span className='text-muted-foreground font-mono text-[10px]'>({FOOTER_LINKS.length})</span>
            </div>

            <ul className='space-y-0.5'>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='hover:bg-primary/10 group flex items-center space-x-2 rounded-md px-2 py-1.5 transition-all hover:translate-x-1'
                  >
                    <span className='text-primary text-xs opacity-60 transition-opacity group-hover:opacity-100'>
                      📄
                    </span>
                    <span className='text-muted-foreground group-hover:text-foreground font-mono text-sm transition-colors'>
                      {link.label}
                    </span>
                    <span className='text-muted-foreground ml-auto font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100'>
                      .tsx
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className='mb-3 flex items-center space-x-2'>
              <div className='bg-primary h-3 w-0.5' />
              <h4 className='text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase'>Tags</h4>
              <span className='text-muted-foreground font-mono text-[10px]'>({FOOTER_CATEGORIES.length})</span>
            </div>

            <ul className='space-y-0.5'>
              {FOOTER_CATEGORIES.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className='hover:bg-primary/10 group flex items-center space-x-2 rounded-md px-2 py-1.5 transition-all hover:translate-x-1'
                  >
                    <span className='text-primary text-xs'>#</span>
                    <span className='text-muted-foreground group-hover:text-foreground font-mono text-sm transition-colors'>
                      {category.label}
                    </span>
                    <span className='bg-primary/20 text-primary ml-auto rounded px-1.5 py-0.5 font-mono text-[10px] opacity-0 transition-opacity group-hover:opacity-100'>
                      tag
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='bg-primary/5 hover:bg-primary/10 group border-border/60 mt-8 rounded-lg border transition-colors'>
          <div className='flex flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row'>
            <div className='text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs'>
              <span className='flex items-center space-x-1.5'>
                <span className='text-primary'>©</span>
                <span>{FOOTER_INFO.copyright}</span>
              </span>
              <span className='text-muted-foreground/50 hidden sm:inline'>│</span>
              <span className='flex items-center space-x-1.5'>
                <span className='text-blue-500'>⚡</span>
                <span>Built with Next.js</span>
              </span>
              <span className='text-muted-foreground/50 hidden sm:inline'>│</span>
              <span className='flex items-center space-x-1.5'>
                <span className='text-purple-500'>♥</span>
                <span>Styled with Tailwind</span>
              </span>
            </div>

            <div className='flex items-center space-x-3'>
              <div className='flex items-center space-x-2 font-mono text-xs'>
                <span className='flex items-center space-x-1.5 rounded bg-green-500/20 px-2 py-1 text-green-500'>
                  <span className='relative flex h-2 w-2'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
                  </span>
                  <span>Online</span>
                </span>
              </div>
              <span className='text-muted-foreground font-mono text-[10px]'>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
