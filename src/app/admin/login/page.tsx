'use client';

import { useActionState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { login } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className='flex min-h-screen items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
        <Card className='border-primary/20 overflow-hidden border-t-2 shadow-xl'>
          <div className='border-border/60 bg-background/50 flex items-center justify-between border-b px-4 py-2'>
            <div className='flex items-center space-x-2'>
              <div className='flex space-x-1.5'>
                <div className='h-3 w-3 rounded-full bg-red-500/80' />
                <div className='h-3 w-3 rounded-full bg-yellow-500/80' />
                <div className='h-3 w-3 rounded-full bg-green-500/80' />
              </div>
              <span className='text-muted-foreground font-mono text-xs'>bash</span>
            </div>
            <span className='text-muted-foreground font-mono text-[10px]'>~/auth/login</span>
          </div>

          <CardHeader className='space-y-3 pb-4'>
            <div className='flex items-center space-x-2 font-mono text-sm'>
              <span className='text-green-500'>admin@rakblog</span>
              <span className='text-muted-foreground'>:</span>
              <span className='text-blue-500'>~</span>
              <span className='text-primary'>$</span>
              <span className='text-muted-foreground'>sudo login</span>
              <span className='animate-pulse'>_</span>
            </div>

            <div>
              <CardTitle className='font-mono text-2xl'>
                <span className='text-purple-500'># </span>Admin Login
              </CardTitle>
              <CardDescription className='mt-2 font-mono text-xs'>Administrator access only</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form action={formAction} className='space-y-4'>
              {state?.error && (
                <div className='rounded-md border border-red-500/50 bg-red-500/10 px-3 py-2'>
                  <p className='font-mono text-xs text-red-500'>
                    <span className='text-red-500'>Error:</span> {state.error}
                  </p>
                </div>
              )}

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-muted-foreground font-mono text-xs'>
                  <span className='text-primary'>const</span> email = <span className='text-yellow-500'>string</span>
                </Label>
                <div className='relative'>
                  <Mail className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='admin@rakblog.dev'
                    className='border-border/60 bg-background/50 focus:border-primary/60 pl-10 font-mono text-sm'
                    required
                  />
                </div>
                {state?.errors?.email && <p className='font-mono text-xs text-red-500'>{state.errors.email}</p>}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password' className='text-muted-foreground font-mono text-xs'>
                  <span className='text-primary'>const</span> password = <span className='text-yellow-500'>string</span>
                </Label>
                <div className='relative'>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='••••••••'
                    className='border-border/60 bg-background/50 focus:border-primary/60 pr-10 font-mono text-sm'
                    required
                  />
                </div>
                {state?.errors?.password && <p className='font-mono text-xs text-red-500'>{state.errors.password}</p>}
              </div>

              <Button
                type='submit'
                disabled={isPending}
                className='hover:bg-primary/90 w-full font-mono text-sm transition-all'
              >
                <span className='text-yellow-500'>function</span>
                <span className='mx-2'>authenticate()</span>
                <span className='text-muted-foreground'>{'{ }'}</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
