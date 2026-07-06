import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 40,
      alignItems: 'center'
    }}>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919099322463?text=Hi%20Arha%20Technologies,%20I'm%20interested%20in%20your%20services.%20Please%20connect%20with%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn animate-pulse-glow"
        aria-label="Contact us on WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'var(--transition-smooth)',
          cursor: 'pointer'
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
          style={{ display: 'block' }}
        >
          <path d="M12.031 2c-5.524 0-10 4.48-10 10 0 1.83.49 3.62 1.36 5.21L2 22l5.01-1.31c1.53.84 3.28 1.28 5.02 1.28 5.52 0 10-4.43 10-10s-4.48-10-10-10zm5.95 14.19c-.27.76-1.57 1.48-2.14 1.54-.57.06-1.31.33-3.83-.67-3.09-1.23-5.07-4.38-5.22-4.59-.15-.21-1.24-1.66-1.24-3.17 0-1.51.79-2.25 1.07-2.55.28-.3.62-.37.83-.37.21 0 .41.01.6.02.2 0 .46-.07.72.56.27.65.92 2.25 1 2.42.08.17.13.37.02.58-.11.2-.17.34-.35.56-.18.21-.37.47-.53.64-.18.18-.38.38-.16.76.22.38.98 1.62 2.11 2.63 1.46 1.3 2.68 1.7 3.06 1.88.38.18.6.15.82-.08.23-.23.96-1.12 1.22-1.51.27-.38.53-.32.9-.18.37.13 2.37 1.12 2.78 1.32.4.2.68.3.78.47.1.18.1 1.04-.17 1.79z" />
        </svg>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'var(--color-bg-card)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--color-border-glow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            transition: 'var(--transition-smooth)',
            cursor: 'pointer',
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        .whatsapp-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.6);
        }
        .scroll-top-btn:hover {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
}
