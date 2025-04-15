import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Apply a global layout with welcome message
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '24px', margin: '10px 0' }}>Hello, User</h1>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Welcome to the Next.js App with Solito</p>
        
        {/* Render the actual page component */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
