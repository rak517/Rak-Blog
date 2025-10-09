'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Plus, X } from 'lucide-react';

interface Series {
  id: string;
  title: string;
}

interface SeriesSelectProps {
  series: Series[];
  selectedSeriesId: string | null;
  seriesOrder: number | null;
  onSeriesChange: (seriesId: string | null) => void;
  onSeriesOrderChange: (order: number | null) => void;
  onCreateNewSeries: () => void;
}

export default function SeriesSelect({
  series,
  selectedSeriesId,
  seriesOrder,
  onSeriesChange,
  onSeriesOrderChange,
  onCreateNewSeries,
}: SeriesSelectProps) {
  const handleSeriesChange = (value: string) => {
    if (value === 'new') {
      onCreateNewSeries();
      return;
    }

    if (value === 'none') {
      onSeriesChange(null);
      onSeriesOrderChange(null);
      return;
    }

    onSeriesChange(value);
    if (!seriesOrder) {
      onSeriesOrderChange(1);
    }
  };

  const handleRemoveSeries = () => {
    onSeriesChange(null);
    onSeriesOrderChange(null);
  };

  return (
    <div className='space-y-3'>
      <Select value={selectedSeriesId || 'none'} onValueChange={handleSeriesChange}>
        <SelectTrigger className='font-mono text-sm'>
          <SelectValue placeholder='시리즈를 선택하세요' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='none' className='font-mono text-sm'>
            시리즈 없음
          </SelectItem>
          {series.map((s) => (
            <SelectItem key={s.id} value={s.id} className='font-mono text-sm'>
              📚 {s.title}
            </SelectItem>
          ))}
          <SelectItem value='new' className='text-primary font-mono text-sm font-semibold'>
            <div className='flex items-center gap-2'>
              <Plus className='h-4 w-4' />새 시리즈 만들기
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      {selectedSeriesId && (
        <div className='animate-in fade-in-50 slide-in-from-top-2 bg-muted/30 space-y-3 rounded-lg border p-4 duration-200'>
          <div className='flex items-start justify-between gap-2'>
            <div className='flex-1 space-y-2'>
              <Label htmlFor='series-order' className='text-xs'>
                시리즈 순서
              </Label>
              <Input
                id='series-order'
                type='number'
                min={1}
                value={seriesOrder || ''}
                onChange={(e) => onSeriesOrderChange(e.target.value ? parseInt(e.target.value) : null)}
                placeholder='1'
                className='font-mono text-sm'
              />
            </div>
            <Button
              variant='ghost'
              size='sm'
              onClick={handleRemoveSeries}
              className='hover:bg-destructive/10 hover:text-destructive mt-6'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
          <p className='text-muted-foreground text-xs'>
            <span className='text-primary'>💡</span> 시리즈 내에서 이 글의 순서를 입력하세요
          </p>
        </div>
      )}
    </div>
  );
}
