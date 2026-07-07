import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg-darker)',
      padding: '70px 0 30px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative glow elements */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link to="/" style={{ display: 'block' }}>
              <Logo height={85} />
            </Link>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
              Empowering businesses with modern design, state-of-the-art web products, and growth-oriented tech solutions. We turn your concepts into premium digital realities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              {['Home', 'About Us', 'Services', 'Industry', 'Careers', 'Contact Us'].map((item) => {
                let path = '/';
                if (item === 'About Us') path = '/about';
                else if (item === 'Services') path = '/services';
                else if (item === 'Industry') path = '/industries';
                else if (item === 'Careers') path = '/careers';
                else if (item === 'Contact Us') path = '/contact';

                return (
                  <li key={item}>
                    <Link to={path} className="footer-link">
                      <ArrowRight size={12} /> {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-primary)' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              {['Web & App Development', 'UI / UX Design', 'Cloud Integration', 'Digital Strategy', 'IT Consultation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="footer-link">
                    <ArrowRight size={12} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-primary)' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} className="footer-contact-icon" />
                <a 
                  href="https://maps.google.com/?q=The+Spire,+Near+Ayodhya+Chowk,+Rajkot,+Gujarat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}
                >
                  The Spire, Near Ayodhya Chowk,<br />Rajkot, Gujarat
                </a>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} className="footer-contact-icon" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
                  <a href="tel:+919099322463" className="contact-link">+91 90993 22463</a>
                  <a href="tel:+916353488481" className="contact-link">+91 63534 88481</a>
				  <a href="tel:+917600432463" className="contact-link">+91 76004 32463</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} className="footer-contact-icon" />
                <a 
                  href="mailto:arhatechnologies5@gmail.com" 
                  className="contact-link"
                  style={{ fontSize: '14px', wordBreak: 'break-all' }}
                >
                  arhatechnologies5@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          fontSize: '13px',
          color: 'var(--color-text-muted)'
        }}>
          <span>&copy; 2025 Arha Technologies. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy" className="hover-white">Privacy Policy</Link>
            <Link to="/terms" className="hover-white">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .footer-link {
          color: var(--color-text-secondary);
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s, color 0.2s;
        }
        .footer-link:hover {
          color: var(--color-primary);
          transform: translateX(4px);
        }
        .contact-link {
          color: var(--color-text-secondary);
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .contact-link:hover {
          color: var(--color-text-primary);
        }
        .hover-white:hover {
          color: var(--color-text-primary);
        }

        /* Tablet Responsive */
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 575px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .footer-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-grid ul {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-grid li {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-contact-icon {
            display: none !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
            padding-bottom: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
