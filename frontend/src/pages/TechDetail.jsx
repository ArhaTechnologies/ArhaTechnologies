import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import techData from '../data/techData';
import TechVisual from '../components/TechVisual';
import TechIcon from '../components/TechIcon';

export default function TechDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tech = techData[slug];

  // 404 fallback
  if (!tech) {
    return (
      <div style={{ paddingTop: '140px', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '64px' }}>🔍</div>
        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Technology Not Found</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>The technology "{slug}" does not exist in our stack.</p>
        <Link to="/services" className="glow-btn" style={{ padding: '12px 28px', marginTop: '10px' }}>
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">

      {/* ── Hero Section ── */}
      <section style={{ paddingBottom: '20px', position: 'relative', overflow: 'hidden' }}>

        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: `radial-gradient(ellipse, ${tech.categoryColor}18 0%, transparent 65%)`,
          filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Back breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-text-muted)', fontSize: '13px', fontWeight: '500',
              marginBottom: '32px', padding: '6px 0',
              transition: 'color 0.2s',
            }}
            className="back-btn"
          >
            <ArrowLeft size={15} /> Back to Services
          </button>

          {/* Two-column hero */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="tech-hero-grid"
          >
            {/* Left: Text */}
            <div>
              {/* Category badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px', borderRadius: '20px', marginBottom: '20px',
                background: `${tech.categoryColor}15`,
                border: `1px solid ${tech.categoryColor}35`,
                fontSize: '12px', fontWeight: '700',
                color: tech.categoryColor,
                letterSpacing: '0.07em', textTransform: 'uppercase',
              }}>
                {tech.category}
              </div>

              {/* Tech name with emoji */}
              <h1 style={{ fontSize: 'calc(2rem + 1.5vw)', fontWeight: '800', marginBottom: '14px', lineHeight: 1.15 }}>
                 <span style={{ marginRight: '16px', display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}><TechIcon slug={slug} size={36} color={tech.categoryColor} /></span>
                {tech.name}
              </h1>

              {/* Tagline */}
              <p style={{
                fontSize: '18px', fontWeight: '500',
                color: tech.categoryColor,
                marginBottom: '20px', lineHeight: '1.5',
              }}>
                {tech.tagline}
              </p>

              {/* Description */}
              <p style={{
                color: 'var(--color-text-secondary)', fontSize: '15px',
                lineHeight: '1.8', marginBottom: '32px',
              }}>
                {tech.description}
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="glow-btn" style={{ padding: '12px 26px' }}>
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '600',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="outline-link"
                >
                  All Technologies
                </Link>
              </div>
            </div>

            {/* Right: Illustration */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <TechVisual slug={slug} color={tech.categoryColor} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features & Use Cases ── */}
      <section style={{ paddingTop: '50px', paddingBottom: '40px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
          }}
          className="tech-detail-grid"
          >

            {/* Key Features */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${tech.categoryColor}15`,
                  border: `1px solid ${tech.categoryColor}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={17} style={{ color: tech.categoryColor }} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Key Features</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {tech.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={17} style={{ color: tech.categoryColor, flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${tech.categoryColor}15`,
                  border: `1px solid ${tech.categoryColor}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ArrowRight size={17} style={{ color: tech.categoryColor }} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Use Cases</h2>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {tech.useCases.map((uc, i) => (
                  <div key={i} style={{
                    padding: '9px 18px', borderRadius: '50px',
                    background: `${tech.categoryColor}10`,
                    border: `1px solid ${tech.categoryColor}25`,
                    fontSize: '13px', fontWeight: '600',
                    color: tech.categoryColor,
                  }}>
                    {uc}
                  </div>
                ))}
              </div>

              {/* Why Arha */}
              <div style={{
                marginTop: '24px',
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--color-border)',
              }}>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Why Arha Technologies?</strong><br />
                  Our expert team in {tech.name} delivers production-ready solutions — on time and with clean, maintainable code. From architecture to deployment, we own the entire lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ paddingTop: '10px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '52px',
            textAlign: 'center',
            background: 'var(--color-bg-card)',
            borderColor: `${tech.categoryColor}40`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
          }}>
             <div style={{ marginBottom: '10px' }}><TechIcon slug={slug} size={48} color={tech.categoryColor} /></div>
            <h2 style={{ fontSize: '26px', fontWeight: '800' }}>
              Ready to build with <span style={{ color: tech.categoryColor }}>{tech.name}</span>?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '500px', lineHeight: '1.7' }}>
              Let's discuss your project and explore how {tech.name} can power your next product.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" className="glow-btn" style={{ padding: '13px 30px', fontSize: '15px' }}>
                Get a Free Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '600',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
              className="outline-link"
              >
                Explore More Tech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inline responsive styles ── */}
      <style>{`
        .back-btn:hover { color: var(--color-primary) !important; }
        .outline-link:hover { border-color: var(--color-primary) !important; color: var(--color-primary) !important; }

        @media (max-width: 768px) {
          .tech-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .tech-hero-grid > div:last-child {
            order: -1;
          }
          .tech-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
