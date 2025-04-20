import React from 'react';
import { useRouter } from 'next/router';

export default function WebOnlyPage() {
  const router = useRouter();
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1 
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', gap: '10px' }}>
        <button onClick={() => router.push('/home')}>Home</button>
        <button onClick={() => router.push('/web-only')}>Web Exclusive</button>
      </div>
      <p style={{ fontSize: 20 }}>This page is only available on the web</p>
    </div>
  );
}
