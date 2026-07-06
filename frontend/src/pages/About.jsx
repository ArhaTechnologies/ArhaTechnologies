import React from 'react';
import { Target, Shield, Zap, Sparkles, Building2, MapPin } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function About() {
  const values = [
    { icon: <Zap size={24} />, name: 'Agile execution', desc: 'We deliver rapid iterations, maintaining transparent channels and giving you direct access to the developers.' },
    { icon: <Target size={24} />, name: 'Growth Oriented', desc: 'We design software that solves tangible bottlenecks, improves sales conversions, and automates manual flows.' },
    { icon: <Shield size={24} />, name: 'Code Integrity', desc: 'We build with modern frameworks, writing well-documented, clean, and highly secure codebases.' },
    { icon: <Sparkles size={24} />, name: 'Premium UX', desc: 'We place visual quality and fluid motion at the center of the user journey, ensuring your brand looks state-of-the-art.' }
  ];

  return (
    <div className="page-wrapper" style={{ minHeight: '80vh' }}>
      {/* Intro Hero banner */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />

        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(6, 182, 212, 0.08)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            fontSize: '13px',
            fontWeight: '600',
            color: 'var(--color-secondary)',
            width: 'fit-content'
          }}>
            <Building2 size={14} /> Who We Are
          </div>
          
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Designing the Future, <br />
            <span className="gradient-text glow-blue">One Line of Code at a Time</span>
          </h1>
          
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '650px', lineHeight: '1.7' }}>
            Arha Technologies is a fast-growing IT studio specializing in modern web applications, high-performance API integrations, and brand-defining design.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ background: 'rgba(13, 20, 38, 0.25)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
              A Modern IT Studio <br />
              <span className="gradient-text">Built for the Digital Era</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.7' }}>
              Founded in Rajkot, Gujarat, Arha Technologies was established to bridge the gap between complex software engineering and high-fidelity user experiences. Over the past 1–2 years, we have scaled our delivery channels, transforming ideas into sleek web products.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.7' }}>
              As a young team, we are free from legacy systems and corporate overhead. We build with the latest React hooks, Node servers, and serverless hosting infrastructures to give your brand an unfair technical advantage.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '440px' }}>
            <div style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
              zIndex: -1,
              filter: 'blur(20px)'
            }} />
            <TiltCard style={{ width: '100%', borderRadius: '16px' }} glowColor="rgba(59, 130, 246, 0.12)">
              <img 
                src="/about_team.png" 
                alt="Futuristic software developers team collaborating" 
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'block'
                }}
              />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '700' }}>Our Core Pillars</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginTop: '10px' }}>
              These fundamental standards dictate our engineering decisions and project deliveries daily.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {values.map((val, idx) => (
              <div key={idx} className="flip-card-container pillar-flip-card">
                <div className="flip-card-inner">
                  {/* Front Face */}
                  <div className="flip-card-front glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                      color: 'var(--color-primary)',
                      background: 'rgba(59, 130, 246, 0.05)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                      boxShadow: '0 8px 20px rgba(59,130,246,0.06)'
                    }}>
                      {val.icon}
                    </div>
                    <h3 style={{ fontSize: '19px', fontWeight: '700', margin: 0 }}>{val.name}</h3>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '5px' }}>
                      Hover to reveal
                    </span>
                  </div>

                  {/* Back Face */}
                  <div className="flip-card-back glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '30px', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--color-primary)', margin: 0 }}>{val.name}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', lineHeight: '1.6', margin: 0, textAlign: 'center' }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
