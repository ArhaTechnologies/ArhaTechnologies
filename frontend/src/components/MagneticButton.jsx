import React, { useState, useRef } from 'react';

export default function MagneticButton({ children, className = '', style = {}, onClick }) {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Pull button 32% of the way towards cursor
    setPos({ x: x * 0.32, y: y * 0.32 });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 && pos.y === 0 
          ? 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          : 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)',
        display: 'inline-block',
        ...style
      }}
      className={className}
    >
      {children}
    </div>
  );
}
