import QuickWriteCard from './QuickWriteCard';
import AdminNavCard from './AdminNavCard';

export default function AdminSidebar() {
  return (
    <div className='space-y-6'>
      <QuickWriteCard />
      <AdminNavCard />
    </div>
  );
}
