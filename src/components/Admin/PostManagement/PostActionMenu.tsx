'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';
import { MoreVertical, Eye, Edit, Trash2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface PostActionMenuProps {
  postId: string;
  postSlug: string | null;
  isPublished: boolean;
  onPreview: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PostActionMenu({
  postId,
  postSlug,
  isPublished,
  onPreview,
  onEdit,
  onDelete,
}: PostActionMenuProps) {
  // Published 상태
  if (isPublished && postSlug) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='hover:bg-muted h-8 w-8 p-0 transition-all duration-200 hover:scale-110'
            aria-label='More options'
          >
            <MoreVertical className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-40'>
          <DropdownMenuItem asChild className='cursor-pointer transition-colors duration-150'>
            <Link href={`/posts/${postSlug}`} target='_blank' rel='noopener noreferrer'>
              <ExternalLink className='h-4 w-4' />
              <span>포스트 보기</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onEdit(postId)} className='cursor-pointer transition-colors duration-150'>
            <Edit className='h-4 w-4' />
            <span>수정</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onDelete(postId)}
            variant='destructive'
            className='cursor-pointer transition-colors duration-150'
          >
            <Trash2 className='h-4 w-4' />
            <span>삭제</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Draft 상태
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='hover:bg-muted h-8 w-8 p-0 transition-all duration-200 hover:scale-110'
          aria-label='More options'
        >
          <MoreVertical className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-40'>
        <DropdownMenuItem onClick={() => onPreview(postId)} className='cursor-pointer transition-colors duration-150'>
          <Eye className='h-4 w-4' />
          <span>미리보기</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onEdit(postId)} className='cursor-pointer transition-colors duration-150'>
          <Edit className='h-4 w-4' />
          <span>수정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onDelete(postId)}
          variant='destructive'
          className='cursor-pointer transition-colors duration-150'
        >
          <Trash2 className='h-4 w-4' />
          <span>삭제</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
