'use client';

import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { X } from 'lucide-react';
import { useState, KeyboardEvent, useRef } from 'react';

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
}

export default function TagInput({
  tags,
  onTagsChange,
  placeholder = '태그를 입력하고 Enter를 누르세요',
  maxTags = 10,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState('');
  const isComposing = useRef(false);

  const handleCompositionStart = () => {
    isComposing.current = true;
  };

  const handleCompositionEnd = () => {
    isComposing.current = false;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (isComposing.current) return;

      addTag();
    }
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;
    if (tags.includes(trimmedValue)) {
      setInputValue('');
      return;
    }

    if (tags.length >= maxTags) {
      alert(`태그는 최대 ${maxTags}개까지 추가할 수 있습니다.`);
      return;
    }

    onTagsChange([...tags, trimmedValue]);
    setInputValue('');
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className='space-y-3'>
      <div className='relative'>
        <Input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          className='font-mono text-sm'
          disabled={tags.length >= maxTags}
        />
        {tags.length >= maxTags && (
          <p className='text-muted-foreground mt-1 text-xs'>최대 {maxTags}개까지 추가 가능합니다</p>
        )}
      </div>

      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant='secondary'
              className='group hover:bg-destructive/10 gap-1 pr-1 font-mono text-sm transition-all'
            >
              <span className='text-primary'>#</span>
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className='hover:bg-destructive/20 ml-1 rounded-sm p-0.5 transition-colors'
                aria-label={`${tag} 태그 삭제`}
              >
                <X className='h-3 w-3' />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <p className='text-muted-foreground text-xs'>
        <span className='text-primary'>💡</span> Enter를 눌러 태그를 추가하세요 ({tags.length}/{maxTags})
      </p>
    </div>
  );
}
