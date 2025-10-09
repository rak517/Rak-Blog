'use client';

import { cn } from '@/utils/cn';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

export default function MarkdownPreview({ content, className }: MarkdownPreviewProps) {
  const isEmpty = !content.trim();

  const renderedContent = useMemo(
    () => (
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    ),
    [content],
  );

  return (
    <div
      className={cn(
        'h-full w-full overflow-y-auto',
        // Base prose
        'prose prose-slate dark:prose-invert mx-auto max-w-none',

        // Headings
        'prose-headings:font-bold',
        'prose-h1:text-4xl prose-h1:mb-6 prose-h1:leading-tight',
        'prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-3',
        'prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3',

        // Paragraphs
        'prose-p:leading-[1.8] prose-p:text-[1.0625rem] prose-p:mb-6 prose-p:text-pretty',

        // Links
        'prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline',

        // Strong & Code
        'prose-strong:font-semibold prose-strong:text-foreground',
        'prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5',
        'prose-code:rounded prose-code:text-[0.9em] prose-code:font-mono',
        'prose-code:before:content-none prose-code:after:content-none',

        // Pre & Code blocks
        'prose-pre:bg-muted prose-pre:border prose-pre:border-border',
        'prose-pre:rounded-lg prose-pre:my-6',

        // Blockquote
        'prose-blockquote:border-l-4 prose-blockquote:border-primary',
        'prose-blockquote:bg-primary/5 prose-blockquote:not-italic',
        'prose-blockquote:font-normal prose-blockquote:pl-4 prose-blockquote:py-2',

        // Images & HR
        'prose-img:rounded-lg prose-img:shadow-md prose-img:my-8',
        'prose-hr:border-border prose-hr:my-8',

        // Lists
        'prose-ul:my-6 prose-ol:my-6',
        'prose-li:my-2 prose-li:leading-relaxed',

        // Tables
        'prose-table:border-collapse prose-table:w-full',
        'prose-thead:border-b-2 prose-thead:border-border',
        'prose-th:border prose-th:border-border prose-th:bg-muted/50',
        'prose-th:px-4 prose-th:py-2 prose-th:text-left',
        'prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2',

        className,
      )}
    >
      <div className='p-6'>
        {isEmpty ? (
          <div className='text-muted-foreground flex h-full items-center justify-center py-20'>
            <p className='font-mono text-sm'>
              <span className='text-primary'>{'// '}</span>
              미리보기 영역입니다
            </p>
          </div>
        ) : (
          renderedContent
        )}
      </div>
    </div>
  );
}
