import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = '', style = {}, maxTilt = 8, glowColor = 'rgba(59, 130, 246, 0.16)' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glowPos, setGlowPos] = useState({ x: -1000, y: -1000, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Calculate rotation angles
    const rotateX = -((y - height / 2) / (height / 2)) * maxTilt;
    const rotateY = ((x - width / 2) / (width / 2)) * maxTilt;

    setTilt({ rotateX, rotateY, scale: 1.025 });
    setGlowPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const containerStyle = {
    position: 'relative',
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s ease',
    transformStyle: 'preserve-3d',
    cursor: 'pointer',
    ...style
  };

  const glowStyle = {
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(circle 130px at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 80%)`,
    opacity: glowPos.opacity,
    transition: 'opacity 0.2s ease',
    pointerEvents: 'none',
    zIndex: 3,
    borderRadius: style.borderRadius || '20px'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={containerStyle}
    >
      {/* Spotlight Glow Overlay */}
      <div style={glowStyle} />
      
      {/* Parallax Content Container */}
      <div style={{ transform: 'translateZ(15px)', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
