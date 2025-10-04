import { ProfileCard } from './ProfileCard';
import { RecentPostsCard } from './RecentPostCard';
import TagsCard from './TagsCard';

export default function Sidebar() {
  return (
    <aside className='lg:col-span-1'>
      <div className='top-24 space-y-6'>
        <ProfileCard />
        <TagsCard />
        <RecentPostsCard />
      </div>
    </aside>
  );
}
