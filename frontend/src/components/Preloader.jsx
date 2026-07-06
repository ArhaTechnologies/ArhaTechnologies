import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out slightly before removing from DOM
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#04060a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      opacity: fadeOut ? 0 : 1,
      visibility: fadeOut ? 'hidden' : 'visible',
      transition: 'opacity 0.45s ease-in-out, visibility 0.45s',
      pointerEvents: 'none'
    }}>
      {/* Central glow effect */}
      <div style={{
        position: 'absolute',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.07) 0%, rgba(59, 130, 246, 0.07) 50%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: -1
      }} />

      {/* Futuristic Logo & Loading Wrapper */}
      <div className="preloader-content-wrap" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: fadeOut ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.45s ease-in-out'
      }}>
        
        {/* Simple, sleek dotted spinning ring */}
        <div className="spinner-ring" style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: '4px dotted rgba(59, 130, 246, 0.25)',
          borderTopColor: '#3b82f6',
          borderRightColor: '#06b6d4',
          marginBottom: '20px',
          animation: 'preloader-spin 1.5s linear infinite',
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
        }} />

        {/* Loading Text */}
        <div className="preloader-text" style={{
          fontSize: '13.5px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          color: 'var(--color-text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '3px'
        }}>
          Loading<span>.</span><span>.</span><span>.</span>
        </div>
      </div>

      <style>{`
        .preloader-content-wrap {
          animation: preloader-pulse 2s infinite ease-in-out;
        }
        .preloader-text span {
          animation: blink 1.4s infinite both;
        }
        .preloader-text span:nth-child(2) {
          animation-delay: .2s;
        }
        .preloader-text span:nth-child(3) {
          animation-delay: .4s;
        }

        @keyframes preloader-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes preloader-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes blink {
          0% { opacity: .2; }
          20% { opacity: 1; }
          100% { opacity: .2; }
        }
      `}</style>
    </div>
  );
}
