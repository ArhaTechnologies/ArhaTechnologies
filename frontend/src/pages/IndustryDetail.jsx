import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import industryData from '../data/industryData';
import IndustryVisual from '../components/IndustryVisual';
import TechIcon from '../components/TechIcon';

export default function IndustryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ind = industryData[slug];

  // 404 fallback
  if (!ind) {
    return (
      <div style={{ paddingTop: '140px', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '64px' }}>🔍</div>
        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Industry Not Found</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>The industry "{slug}" is not currently in our service list.</p>
        <Link to="/" className="glow-btn" style={{ padding: '12px 28px', marginTop: '10px' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">

      {/* ── Hero Section ── */}
      <section style={{ paddingBottom: '20px', position: 'relative', overflow: 'hidden' }}>

        {/* Ambient background glow */}
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: `radial-gradient(ellipse, ${ind.color}18 0%, transparent 65%)`,
          filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Back button */}
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
            <ArrowLeft size={15} /> Back
          </button>

          {/* Two-column layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="ind-hero-grid"
          >
            {/* Left: Text */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px', borderRadius: '20px', marginBottom: '20px',
                background: `${ind.color}15`,
                border: `1px solid ${ind.color}35`,
                fontSize: '12px', fontWeight: '700',
                color: ind.color,
                letterSpacing: '0.07em', textTransform: 'uppercase',
              }}>
                Industries We Serve
              </div>

              {/* Title */}
              <h1 style={{ fontSize: 'calc(2rem + 1.5vw)', fontWeight: '800', marginBottom: '14px', lineHeight: 1.15 }}>
                 <span style={{ marginRight: '16px', display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}><TechIcon slug={slug} size={36} color={ind.color} /></span>
                {ind.name} Industry
              </h1>

              {/* Tagline */}
              <p style={{
                fontSize: '18px', fontWeight: '500',
                color: ind.color,
                marginBottom: '20px', lineHeight: '1.5',
              }}>
                {ind.tagline}
              </p>

              {/* Description */}
              <p style={{
                color: 'var(--color-text-secondary)', fontSize: '15px',
                lineHeight: '1.8', marginBottom: '32px',
              }}>
                {ind.description}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="glow-btn" style={{ padding: '12px 26px' }}>
                  Discuss Industry Project <ArrowRight size={16} />
                </Link>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '600',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="outline-link"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Right: Graphic */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <IndustryVisual slug={slug} color={ind.color} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions & Benefits ── */}
      <section style={{ paddingTop: '50px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
          }}
          className="ind-detail-grid"
          >

            {/* Core Solutions Built */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${ind.color}15`,
                  border: `1px solid ${ind.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Layers size={17} style={{ color: ind.color }} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Solutions We Engineer</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ind.solutions.map((sol, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={17} style={{ color: ind.color, flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      <strong>{sol.split(' & ')[0]}</strong> {sol.includes(' & ') ? ` & ${sol.split(' & ')[1]}` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Value benefits */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${ind.color}15`,
                  border: `1px solid ${ind.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ShieldCheck size={17} style={{ color: ind.color }} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Strategic Value &amp; Security</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ind.benefits.map((ben, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={17} style={{ color: ind.color, flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {ben}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Inline styles ── */}
      <style>{`
        .back-btn:hover { color: var(--color-primary) !important; }
        .outline-link:hover { border-color: var(--color-primary) !important; color: var(--color-primary) !important; }

        @media (max-width: 768px) {
          .ind-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .ind-hero-grid > div:last-child {
            order: -1;
          }
          .ind-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
