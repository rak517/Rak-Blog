'use client';

import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { X } from 'lucide-react';
import { useState, KeyboardEvent } from 'react';

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
  const [input, setInput] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }

    if (e.key === 'Backspace' && !input && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    if (tags.includes(trimmedInput)) {
      setInput('');
      return;
    }

    if (tags.length >= maxTags) {
      alert(`태그는 최대 ${maxTags}개까지 추가할 수 있습니다.`);
      return;
    }

    onTagsChange([...tags, trimmedInput]);
    setInput('');
  };

  const removeTag = (index: number) => {
    onTagsChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className='space-y-3'>
      <Input
        type='text'
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className='font-mono'
      />

      {tags.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant='secondary'
              className='group hover:bg-destructive/10 hover:border-destructive/50 gap-1.5 pr-1 transition-all'
            >
              <span className='text-primary'>#</span>
              <span>{tag}</span>
              <button
                type='button'
                onClick={() => removeTag(index)}
                className='hover:bg-destructive/20 ml-1 flex h-4 w-4 items-center justify-center rounded-sm transition-colors'
                aria-label={`${tag} 태그 삭제`}
              >
                <X className='group-hover:text-destructive h-3 w-3 transition-colors' />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <p className='text-muted-foreground text-right font-mono text-xs'>
        {tags.length} / {maxTags}
      </p>
    </div>
  );
}
