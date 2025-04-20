// Temporary placeholder until proper routing is set up
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/home');
  }, [router]);
  
  return null;
}
