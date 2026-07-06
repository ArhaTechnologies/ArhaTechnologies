import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - Wraps children and animates them in when they enter the viewport.
 * Props:
 *  - direction: 'up' | 'left' | 'right' | 'fade' (default: 'up')
 *  - delay: CSS delay string e.g. '0.1s' (default: '0s')
 *  - threshold: IntersectionObserver threshold (default: 0.12)
 */
export default function ScrollReveal({ children, direction = 'up', delay = '0s', threshold = 0.12, className = '', style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':  return 'translateX(-40px)';
      case 'right': return 'translateX(40px)';
      case 'fade':  return 'none';
      default:      return 'translateY(36px)'; // 'up'
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : getInitialTransform(),
        transition: `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}
