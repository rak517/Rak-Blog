import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Post } from '@/data/posts-data';
import { Calendar, Eye, Clock } from 'lucide-react';
import PostActionMenu from './PostActionMenu';

interface PostCardProps {
  post: Post;
  onPreview: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PostCard({ post, onPreview, onEdit, onDelete }: PostCardProps) {
  const isPublished = post.status === 'published';

  return (
    <Card className='group border-border/50 hover:border-primary/30 p-0 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md'>
      <CardContent className='p-5'>
        <div className='flex items-start justify-between gap-4'>
          <div className='min-w-0 flex-1 space-y-3'>
            <div className='flex items-start gap-3'>
              <h3 className='group-hover:text-primary line-clamp-2 min-w-0 flex-1 cursor-pointer text-lg leading-tight font-semibold transition-colors duration-200'>
                {post.title}
              </h3>
              <Badge
                variant={isPublished ? 'default' : 'secondary'}
                className='shrink-0 font-mono text-xs transition-all duration-200'
              >
                {isPublished ? '발행됨' : '임시글'}
              </Badge>
            </div>

            <p className='text-muted-foreground line-clamp-2 text-sm leading-relaxed'>{post.description}</p>

            <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-xs'>
              <div className='text-muted-foreground flex items-center gap-1.5'>
                <Calendar className='h-3.5 w-3.5' />
                <span className='font-mono'>
                  {new Date(isPublished ? post.publishedAt! : post.updatedAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              {isPublished && (
                <div className='text-muted-foreground flex items-center gap-1.5'>
                  <Eye className='h-3.5 w-3.5' />
                  <span className='font-mono'>{post.viewCount.toLocaleString()}</span>
                </div>
              )}

              {!isPublished && (
                <div className='text-muted-foreground flex items-center gap-1.5'>
                  <Clock className='h-3.5 w-3.5' />
                  <span className='font-mono'>임시 글</span>
                </div>
              )}
            </div>
          </div>

          <PostActionMenu
            postId={post.id}
            postSlug={post.slug}
            isPublished={isPublished}
            onPreview={onPreview}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
}
