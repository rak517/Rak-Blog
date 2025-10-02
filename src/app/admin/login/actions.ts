'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type LoginState = {
  error?: string;
  errors?: {
    email?: string;
    password?: string;
  };
} | null;

export async function login(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !email.includes('@')) {
    return {
      errors: { email: 'Valid email is required' },
    };
  }

  if (!password || password.length < 6) {
    return {
      errors: { password: 'Password must be at least 6 characters' },
    };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: 'Invalid email or password',
    };
  }

  revalidatePath('/', 'layout');
  redirect('/admin');
}
