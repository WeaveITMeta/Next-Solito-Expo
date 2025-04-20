import React from 'react';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  // Apply a global layout
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
        flex: 1
      }}>
        {/* Render the actual page component */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
