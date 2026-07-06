import React, { useState } from 'react';
import { LayoutGrid, AppWindow, Smartphone, Layers, Eye, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Helix Analytics Dashboard',
      category: 'web',
      tech: ['React.js', 'Node.js', 'Chart.js', 'AWS'],
      desc: 'A premium, high-speed SaaS operations panel featuring glowing graphs, glassmorphic layout overlays, and real-time database sync.',
      imgGradient: 'linear-gradient(135deg, #0d1527, #070c16)'
    },
    {
      title: 'Aura Fitness Mobile App',
      category: 'mobile',
      tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      desc: 'An offline-ready wellness companion containing real-time trackers, glowing fitness rings, and dark-mode charts.',
      imgGradient: 'linear-gradient(135deg, #08203e, #557a95)'
    },
    {
      title: 'Apex Crypto Trading Suite',
      category: 'web',
      tech: ['Next.js', 'Node.js', 'WebSockets', 'Tailwind'],
      desc: 'High-frequency transaction dashboard featuring live WebSocket prices, glowing tickers, and customized grid panels.',
      imgGradient: 'linear-gradient(135deg, #110d27, #0b0716)'
    },
    {
      title: 'Nebula CRM Platform',
      category: 'web',
      tech: ['React.js', 'Express', 'PostgreSQL', 'Docker'],
      desc: 'Enterprise workflow tool automating file dispatch, client logs, and invoicing metrics with modular layouts.',
      imgGradient: 'linear-gradient(135deg, #061e1b, #030d0c)'
    },
    {
      title: 'Nova Glass Design System',
      category: 'uiux',
      tech: ['Figma', 'UX Research', 'Design System'],
      desc: 'A complete branding package and high-fidelity component library leveraging modern glassmorphism design tokens.',
      imgGradient: 'linear-gradient(135deg, #1f1c2c, #928dab)'
    },
    {
      title: 'Velo E-commerce Store',
      category: 'web',
      tech: ['React.js', 'Node.js', 'Razorpay', 'Express'],
      desc: 'A customized, lightning-fast storefront featuring interactive cart drawers, glowing search bars, and SMS gateway.',
      imgGradient: 'linear-gradient(135deg, #2c3e50, #000000)'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: '100px', minHeight: '90vh' }}>
      {/* Page Header */}
      <section style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            fontSize: '13px',
            fontWeight: '600',
            color: 'var(--color-primary)',
            width: 'fit-content'
          }}>
            <Layers size={14} /> Showcase
          </div>
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Products Built to <br />
            <span className="gradient-text glow-blue">Inspire and Convert</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '600px', lineHeight: '1.7' }}>
            Browse through our select catalog of custom platforms, web applications, and UI designs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '0 0 40px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{
            display: 'inline-flex',
            padding: '6px',
            borderRadius: '30px',
            gap: '6px',
            background: 'rgba(13, 20, 38, 0.6)'
          }}>
            {[
              { id: 'all', label: 'All Projects', icon: <LayoutGrid size={16} /> },
              { id: 'web', label: 'Web Apps', icon: <AppWindow size={16} /> },
              { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> },
              { id: 'uiux', label: 'UI / UX', icon: <Layers size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: filter === tab.id ? 'white' : 'var(--color-text-secondary)',
                  background: filter === tab.id 
                    ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' 
                    : 'transparent',
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(59, 130, 246, 0.25)' : 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Work Showcase */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {filteredProjects.map((p, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex', 
                  flexDirection: 'column',
                  animation: 'fadeInUp 0.5s ease-out'
                }}
              >
                {/* Simulated Image Placeholder */}
                <div style={{
                  height: '220px',
                  background: p.imgGradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--color-border)',
                  overflow: 'hidden'
                }}>
                  {/* Subtle Grid effect inside image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                  }} />
                  
                  {/* Glowing text vector mock */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 2,
                    textAlign: 'center',
                    padding: '20px'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: '800',
                      fontSize: '22px',
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '-0.02em',
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                      {p.title}
                    </span>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {p.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          style={{
                            fontSize: '11px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            color: '#e2e8f0',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Absolute visual overlays */}
                  <div className="hover-overlay" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(6, 9, 19, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'var(--transition-smooth)',
                    zIndex: 3
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                    }}>
                      <Eye size={20} />
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      color: 'var(--color-primary)', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em' 
                    }}>
                      {p.category === 'web' ? 'Web Application' : p.category === 'mobile' ? 'Mobile App' : 'UI/UX Design'}
                    </span>
                    <ArrowUpRight size={16} style={{ color: 'var(--color-text-muted)' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', lineHeight: '1.6', flexGrow: 1 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .glass-card:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
