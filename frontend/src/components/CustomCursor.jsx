import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const dotRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  const dotElementRef = useRef(null);
  const ringElementRef = useRef(null);

  useEffect(() => {
    // Detect if device supports touch
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    // Hide custom cursor when mouse leaves the window
    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Event delegation to detect hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, [role="button"], .flip-card-container, .quick-prompt-btn, .nav-link-item, input, textarea, select')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, [role="button"], .flip-card-container, .quick-prompt-btn, .nav-link-item, input, textarea, select')) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Smooth LERP (Linear Interpolation) loop for the lagging ring
    let animFrameId;
    const updatePosition = () => {
      // Direct dot positioning
      dotRef.current.x = mouseRef.current.x;
      dotRef.current.y = mouseRef.current.y;

      // Lagging ring positioning (LERP 0.15 delay)
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.16;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.16;

      if (dotElementRef.current) {
        dotElementRef.current.style.left = `${dotRef.current.x}px`;
        dotElementRef.current.style.top = `${dotRef.current.y}px`;
      }
      if (ringElementRef.current) {
        ringElementRef.current.style.left = `${ringRef.current.x}px`;
        ringElementRef.current.style.top = `${ringRef.current.y}px`;
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };
    animFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Centered Dot core */}
      <div
        ref={dotElementRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease',
          opacity: isHovered ? 0 : 1
        }}
      />
      {/* Outer follow ring */}
      <div
        ref={ringElementRef}
        style={{
          position: 'fixed',
          width: isHovered ? '50px' : '26px',
          height: isHovered ? '50px' : '26px',
          border: isHovered ? '2px solid var(--color-secondary)' : '1.5px solid var(--color-primary)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.22s ease-out, height 0.22s ease-out, background-color 0.22s ease-out, border-color 0.22s ease-out'
        }}
      />
    </>
  );
}
