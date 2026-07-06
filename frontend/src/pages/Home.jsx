import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, TrendingUp, Cloud, ArrowRight, Zap, Target, Award, Users, Search, PenTool, GitBranch, Rocket } from 'lucide-react';
import InteractiveParticles from '../components/InteractiveParticles';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import ScrollReveal from '../components/ScrollReveal';
import TechnologyMarquee from "../components/TechnologyMarquee";

// Dynamic Counter helper that spins/counts up when scrolled into view
function AnimatedCounter({ end, duration = 1800, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quadratic ease-out: starts fast, slows down at the end
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="counter-spin">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const features = [
    { icon: <Code size={24} />, name: 'Development', desc: 'Custom high-speed web apps & mobile solutions.' },
    { icon: <Palette size={24} />, name: 'UI/UX Design', desc: 'Sleek, intuitive interfaces built for conversion.' },
    { icon: <TrendingUp size={24} />, name: 'Digital Strategy', desc: 'Optimized models to scale operations and sales.' },
    { icon: <Cloud size={24} />, name: 'Cloud Solutions', desc: 'Secure cloud hosting & SaaS architecture.' }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '0px', paddingBottom: '40px' }}>
        {/* Constellation particle field background */}
        <InteractiveParticles />
        <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left Column: Heading & Slogans */}
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                <Zap size={14} /> Next-Gen IT Agency
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '0.32em',
                color: 'var(--color-secondary)',
                textTransform: 'uppercase',
                marginTop: '4px'
              }}>
                INNOVATE • BUILD • TRANSFORM
              </div>
            </div>
            
            <h1 style={{ fontSize: 'calc(1.8rem + 2.5vw)', lineHeight: '1.15', fontWeight: '800' }}>
              We Build Digital <br />
              Solutions That <br />
              <span className="gradient-text glow-blue">Drive Growth</span>
            </h1>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '500px', lineHeight: '1.7' }}>
              Empowering businesses with innovative web solutions, modern design, and cutting-edge technology.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px', alignItems: 'center' }}>
              <MagneticButton>
                <Link to="/contact" className="glow-btn" style={{ display: 'inline-flex' }}>
                  Start a Project <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/services" className="outline-btn" style={{ display: 'inline-flex' }}>
                  Our Services
                </Link>
              </MagneticButton>
            </div>

            {/* Quick feature pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginTop: '20px',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '24px'
            }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    color: 'var(--color-primary)',
                    background: 'rgba(59, 130, 246, 0.05)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600' }}>{feat.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Device mockup resembling the dashboard screen */}
          <div className="animate-float hero-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Ambient background glow behind device */}
            <div style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)',
              zIndex: -1,
              filter: 'blur(30px)'
            }} />
            
            {/* Premium Generated high-fidelity Realistic Dashboard Graphic */}
            <img 
              src="/dashboard_hero.png" 
              alt="Arha Core Engineering Dashboard" 
              className="hero-image"
              style={{
                width: '100%',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section style={{ padding: '40px 0', background: 'rgba(13, 20, 38, 0.1)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px'
          }}>
            <TiltCard style={{ padding: '24px', borderRadius: '16px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', textAlign: 'center' }} glowColor="rgba(59, 130, 246, 0.12)">
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-text-primary)', margin: '0 0 8px 0' }}>
                <AnimatedCounter end={2} suffix="+" />
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Years Experience</p>
            </TiltCard>
            
            <TiltCard style={{ padding: '24px', borderRadius: '16px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', textAlign: 'center' }} glowColor="rgba(59, 130, 246, 0.16)">
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-primary)', margin: '0 0 8px 0' }}>
                <AnimatedCounter end={25} suffix="+" />
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Projects Handled</p>
            </TiltCard>
            
            <TiltCard style={{ padding: '24px', borderRadius: '16px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', textAlign: 'center' }} glowColor="rgba(6, 182, 212, 0.16)">
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-secondary)', margin: '0 0 8px 0' }}>
                <AnimatedCounter end={15} suffix="+" />
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Satisfied Clients</p>
            </TiltCard>
            
            <TiltCard style={{ padding: '24px', borderRadius: '16px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', textAlign: 'center' }} glowColor="rgba(99, 102, 241, 0.16)">
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-text-primary)', margin: '0 0 8px 0' }}>
                <AnimatedCounter end={99} suffix="%" />
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Retention Rate</p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="container" style={{ maxWidth: '900px' }}>
          <ScrollReveal direction="up">
            <div className="glass-card" style={{
              padding: '50px 40px',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}>
              {/* Glowing spot */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              
              <span style={{ fontSize: '64px', color: 'var(--color-primary)', opacity: 0.3, fontFamily: 'serif', lineHeight: '0' }}>“</span>
              
              <h2 style={{
                fontSize: '28px',
                fontWeight: '600',
                lineHeight: '1.5',
                marginBottom: '20px',
                color: 'var(--color-text-primary)'
              }}>
                Our mission is simple:<br />
                <span className="gradient-text">To turn ideas into powerful digital experiences.</span>
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '15px' }}>
                We dedicate our development expertise and creative capabilities to craft fast, scalable, and beautifully designed digital structures that help brands grow and capture market share.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partnering section */}
      <section style={{ position: 'relative' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          <ScrollReveal direction="left">
          {/* Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--color-secondary)',
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <Users size={16} /> Business Partnership
            </div>
            
            <h2 style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.25' }}>
              Partnering in Your <br />
              <span className="gradient-text">Digital Success</span>
            </h2>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
              We work closely with our clients to understand their business targets, design high-converting visual flows, and integrate robust coding scripts to build platforms that achieve business targets.
            </p>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
              Whether you are an emerging startup or an established local business, our customized product workflow yields results that improve customer satisfaction and operational speed.
            </p>

            <Link to="/about" className="outline-btn" style={{ width: 'fit-content', marginTop: '10px' }}>
              Learn About Us <ArrowRight size={16} />
            </Link>
          </div>
          </ScrollReveal>

          {/* Cards Column */}
          <ScrollReveal direction="right" delay="0.15s">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--color-primary)',
                background: 'rgba(59, 130, 246, 0.06)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Target size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Aligned Strategy</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  We prioritize your concrete business KPIs, matching engineering tasks to exact revenue and visibility goals.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--color-secondary)',
                background: 'rgba(6, 182, 212, 0.06)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>High Quality Code</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  Our software engineers deploy optimized codebases, offering fast loading, clean structure, and robust security.
                </p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

	  <TechnologyMarquee />

      {/* Advanced Engineering & Tech Capabilities Section with Isometric Image */}
      <section style={{ 
        background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.02), transparent)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Left side: Isometric image */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
              zIndex: -1,
              filter: 'blur(20px)'
            }} />
            <img 
              src="/tech_isometric.png" 
              alt="High-Tech Isometric Network Illustration" 
              style={{
                width: '100%',
                maxWidth: '420px',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                animation: 'float 5s ease-in-out infinite'
              }}
            />
          </div>

          {/* Right side: Engineering text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <Award size={14} /> Technical Process
            </div>

            <h2 style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.25' }}>
              Scalable Architecture & <br />
              <span className="gradient-text">Cloud Innovation</span>
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
              We build custom server infrastructures and deploy high-performance database layers. Our React frameworks are optimized for core web vitals, giving you the fastest load speeds possible.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
              {[
                'Serverless API integration for lightspeed execution',
                'Advanced Database hardening & encrypted transactions',
                'CI/CD Pipelines for automated, zero-downtime updates'
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: 'var(--color-primary)',
                    boxShadow: '0 0 8px var(--color-primary)' 
                  }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Process / Timeline Section ── */}
      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '20px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.22)',
                fontSize: '13px', fontWeight: '600',
                color: 'var(--color-accent)', marginBottom: '18px'
              }}>
                <Rocket size={14} /> How We Work
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: '700' }}>
                From Concept to{' '}
                <span className="gradient-text">Launch in 4 Steps</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginTop: '12px', fontSize: '15px', maxWidth: '520px', margin: '12px auto 0' }}>
                Our proven delivery framework keeps every project on time, on budget, and above expectations.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
            position: 'relative'
          }}>
            {/* Connector line — desktop only */}
            <div style={{
              position: 'absolute',
              top: '36px',
              left: '12.5%',
              width: '75%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), #a78bfa, var(--color-primary))',
              backgroundSize: '200% auto',
              animation: 'shimmer-move 3s linear infinite',
              zIndex: 0,
              opacity: 0.35
            }} />

            {[
              { icon: <Search size={22} />, step: '01', title: 'Discovery', desc: 'We deep-dive into your business model, goals, and competitors to map a winning product strategy.', color: 'var(--color-primary)', glow: 'rgba(59,130,246,0.18)' },
              { icon: <PenTool size={22} />, step: '02', title: 'Design', desc: 'Our designers craft pixel-perfect wireframes and interactive prototypes that wow stakeholders.', color: 'var(--color-secondary)', glow: 'rgba(6,182,212,0.18)' },
              { icon: <GitBranch size={22} />, step: '03', title: 'Development', desc: 'Engineers build scalable, clean code with CI/CD pipelines and daily progress updates.', color: '#a78bfa', glow: 'rgba(167,139,250,0.18)' },
              { icon: <Rocket size={22} />, step: '04', title: 'Launch', desc: 'We deploy to production, run QA, and monitor performance — then hand over full control to you.', color: '#f59e0b', glow: 'rgba(245,158,11,0.18)' },
            ].map((s, idx) => (
              <ScrollReveal key={idx} direction="up" delay={`${idx * 0.12}s`}>
                <div style={{ padding: '0 16px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  {/* Circle icon */}
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: s.glow,
                    border: `2px solid ${s.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: s.color,
                    position: 'relative',
                    boxShadow: `0 0 24px ${s.glow}`
                  }}>
                    {s.icon}
                    {/* Step number badge */}
                    <span style={{
                      position: 'absolute', top: '-8px', right: '-8px',
                      background: s.color, color: '#fff',
                      fontSize: '10px', fontWeight: '800',
                      width: '22px', height: '22px',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      letterSpacing: '0.02em'
                    }}>{s.step}</span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: s.color }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div style={{
            background: 'var(--color-bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--color-border-glow)',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.05)'
          }}>
            {/* Accent background spot */}
            <div style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>Ready to Scale Your Digital Footprint?</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
              Let's build something extraordinary together. Talk to our engineering team to outline your product concept and receive a detailed roadmap.
            </p>
            <Link to="/contact" className="glow-btn" style={{ padding: '14px 36px', fontSize: '16px' }}>
              Initiate Discovery Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }
        .hero-image-container {
          margin-top: -35px;
        }
        .hero-image {
          max-width: 485px;
        }

        @media (max-width: 991px) {
          section {
            padding: 40px 0;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-image-container {
            margin-top: 24px !important;
          }
          .hero-image {
            max-width: 80% !important;
          }
        }
      `}</style>
    </div>
  );
}
