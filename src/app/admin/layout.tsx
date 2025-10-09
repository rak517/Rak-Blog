import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-[280px_1fr]'>
          <aside className='lg:sticky lg:top-24 lg:h-fit'>{/* <AdminSidebar /> */}</aside>

          <main className='min-w-0'>{children}</main>
        </div>
      </div>
    </div>
  );
}
