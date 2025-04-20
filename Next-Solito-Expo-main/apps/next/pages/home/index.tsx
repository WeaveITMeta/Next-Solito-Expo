import React from 'react';
import { useRouter } from 'next/router';
import { HomeScreen } from 'shared-pages';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', gap: '10px' }}>
        <button onClick={() => router.push('/home')}>Home</button>
        <button onClick={() => router.push('/web-only')}>Web Exclusive</button>
      </div>
      <HomeScreen />
    </div>
  );
}
