import { Suspense } from 'react';

export default function WriteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className='flex h-screen items-center justify-center'>
          <div className='text-muted-foreground font-mono'>Loading...</div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
