'use client'

import { AuthPage } from '@/components/pages/client/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Login() {
  const router = useRouter();
  const token = Cookies.get("accesToken");
  
  useEffect(() => {
    if (token) {
      router.push("/");
      toast('Youre has been loged in', {
        description: new Date().toISOString().split('T')[0],
        action: { label: 'Close', onClick: () => '' },
      });
    }
  }, [router, token])

  return (
    <AuthPage
      page={"login"}
    />
  );
}
