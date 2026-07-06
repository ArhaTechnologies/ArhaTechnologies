import React, { useState, useEffect } from 'react';

export default function Logo({ height = 65, width = 'auto' }) {
  // Parse height to ensure it is a valid numeric value
  const heightNum = typeof height === 'number' ? height : parseInt(height) || 65;

  const [isLight, setIsLight] = useState(
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light'
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      style={{ 
        height: `${heightNum}px`, 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'flex-start',
        width: width
      }}
    >
      <img 
        src="/logo.png" 
        alt="Arha Technologies Logo" 
        style={{ 
          // Scale image height to push the bottom 32% (tagline) out of the parent container bounds
          height: `${heightNum * 1.32}px`, 
          width: 'auto', 
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'top', // Align to top, cropping the bottom tagline
          filter: isLight 
            ? 'none' 
            : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.05)',
          mixBlendMode: isLight ? 'multiply' : 'screen'
        }} 
      />
    </div>
  );
}
