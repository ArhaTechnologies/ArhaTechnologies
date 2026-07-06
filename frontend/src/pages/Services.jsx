import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Palette, CloudCog, Compass, ShoppingBag, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import TechIcon from '../components/TechIcon';

// ── Reusable tech category row (each pill links to /technology/:slug) ─────────
function TechGroup({ label, color, techs }) {
  return (
    <div style={{
      marginBottom: '32px',
      background: 'rgba(255,255,255,0.015)',
      border: '1px solid var(--color-border)',
      borderRadius: '16px',
      padding: '24px 28px',
    }}>
      {/* Category label */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '12px', fontWeight: '700', textTransform: 'uppercase',
        letterSpacing: '0.08em', color,
        borderBottom: `2px solid ${color}`,
        paddingBottom: '6px', marginBottom: '18px',
      }}>
        {label}
      </div>

      {/* Tech pill links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {techs.map((tech, i) => (
          <Link
            key={i}
            to={`/technology/${tech.slug}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 18px',
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${color}25`,
              textDecoration: 'none',
              transition: 'border-color 0.22s, background 0.22s, transform 0.22s, box-shadow 0.22s',
              cursor: 'pointer',
            }}
            className="tech-pill-link"
          >
            {/* Icon circle */}
            <span style={{
              width: '34px', height: '34px', borderRadius: '50%',
              background: `${color}12`,
              border: `1px solid ${color}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0,
            }}>
              <TechIcon slug={tech.slug} size={16} color={color} />
            </span>

            {/* Name */}
            <span style={{
              fontSize: '13.5px', fontWeight: '600',
              color: 'var(--color-text-primary)',
              whiteSpace: 'nowrap',
            }}>
              {tech.name}
            </span>

            {/* Arrow hint */}
            <ExternalLink size={12} style={{ color, opacity: 0.6, flexShrink: 0 }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Services() {

  const serviceList = [
    {
      icon: <Code2 size={28} />,
      title: 'Web Application Development',
      desc: 'We construct high-speed, secure web portals and single page applications tailored to business requirements.',
      features: ['React & Next.js SPAs', 'Node.js Express Backends', 'Custom ERP & Admin Panels', 'RESTful & GraphQL APIs'],
      color: 'var(--color-primary)'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      desc: 'Creating fluid iOS and Android mobile solutions built with clean architectures and interactive layouts.',
      features: ['React Native apps', 'Offline-first databases', 'Realtime push notifications', 'App Store / Play Store deployment'],
      color: 'var(--color-secondary)'
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Interface Design',
      desc: 'Designing stunning, high-converting layouts that represent your brand philosophy and engage users.',
      features: ['Wireframing & Prototyping', 'Interactive User Journeys', 'Custom Figma design systems', 'Fluid animations & micro-interactions'],
      color: 'var(--color-accent)'
    },
    {
      icon: <CloudCog size={28} />,
      title: 'Cloud & DevOps Solutions',
      desc: 'Configuring safe cloud infrastructures, auto-scaling databases, and continuous delivery flows.',
      features: ['AWS & Google Cloud Hosting', 'Docker & Containerization', 'CI/CD pipeline configuration', 'SSL & Cybersecurity hardening'],
      color: 'var(--color-primary)'
    },
    {
      icon: <Compass size={28} />,
      title: 'Digital Strategy & SEO',
      desc: 'Optimizing technical structures and content schemas to improve search rankings and acquire organic leads.',
      features: ['Technical SEO audits', 'Google Core Web Vitals checks', 'Conversion Rate Optimization', 'Performance benchmarking'],
      color: 'var(--color-secondary)'
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'E-Commerce Engineering',
      desc: 'Engineering robust virtual storefronts, custom checkout gateways, and Inventory management scripts.',
      features: ['Custom shopping cart systems', 'Stripe & Razorpay integrations', 'Realtime inventory sync', 'Secure customer accounts'],
      color: 'var(--color-accent)'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Intro Header */}
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
            How We Can Help
          </div>
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Next-Gen Services for <br />
            <span className="gradient-text glow-blue">Next-Gen Companies</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '600px', lineHeight: '1.7' }}>
            We combine premium aesthetics with modern coding frameworks to provide a full suite of software and branding services.
          </p>
        </div>

        {/* Hero Isometric Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(30px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }} />
          <img
            src="/services_hero.png"
            alt="Digital services ecosystem illustration"
            style={{
              maxWidth: '380px',
              width: '90%',
              borderRadius: '16px',
              position: 'relative',
              zIndex: 1,
              animation: 'float 7s ease-in-out infinite',
              filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.2))'
            }}
          />
        </div>
      </section>

      {/* Grid Section */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {serviceList.map((srv, idx) => (
              <div key={idx} className="flip-card-container service-flip-card">
                <div className="flip-card-inner">
                  {/* Front Face */}
                  <div className="flip-card-front glass-card" style={{ padding: '35px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden' }}>
                    {/* Visual Glow border color bar */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: `linear-gradient(90deg, ${srv.color}, transparent)`
                    }} />

                    {/* Icon wrapper */}
                    <div style={{
                      color: srv.color,
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--color-border)',
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`
                    }}>
                      {srv.icon}
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>{srv.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.2px', lineHeight: '1.6', margin: 0 }}>{srv.desc}</p>
                    
                    <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 'auto' }}>
                      Hover to reveal features
                    </span>
                  </div>

                  {/* Back Face */}
                  <div className="flip-card-back glass-card" style={{ padding: '35px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left', overflow: 'hidden' }}>
                    {/* Visual Glow border color bar */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: `linear-gradient(90deg, ${srv.color}, transparent)`
                    }} />

                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: srv.color, margin: 0 }}>{srv.title} Offering</h3>
                    
                    {/* Features checklist */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, borderTop: '1px solid var(--color-border)', paddingTop: '15px', width: '100%' }}>
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle size={14} style={{ color: srv.color, flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact" style={{
                      marginTop: 'auto',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: srv.color,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Consult our engineering team &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack Section ── */}
      <section style={{ paddingBottom: '70px' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '20px',
              background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
              fontSize: '12px', fontWeight: '700', color: 'var(--color-secondary)',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px'
            }}>
              Our Tech Stack
            </div>
            <h2 style={{ fontSize: 'calc(1.4rem + 1vw)', fontWeight: '800', marginBottom: '12px' }}>
              Delivering Technology That <span className="gradient-text">Creates Value</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
              We leverage modern, battle-tested technologies to build fast, scalable and maintainable products.
            </p>
          </div>

          {/* ── Database Development ── */}
          <TechGroup label="Database Development" color="#3b82f6" techs={[
            { slug: 'sql-server',  name: 'SQL Server',   icon: '🗄️' },
            { slug: 'mysql',       name: 'MySQL',         icon: '🐬' },
            { slug: 'mongodb',     name: 'MongoDB',       icon: '🍃' },
            { slug: 'postgresql',  name: 'PostgreSQL',    icon: '🐘' },
            { slug: 'power-bi',    name: 'Power BI',      icon: '📊' },
          ]} />

          {/* ── Web Development ── */}
          <TechGroup label="Web Development" color="#06b6d4" techs={[
            { slug: 'react-js',    name: 'React.js',      icon: '⚛️' },
            { slug: 'next-js',     name: 'Next.js',       icon: '🔺' },
            { slug: 'node-js',     name: 'Node.js',       icon: '🟢' },
            { slug: 'typescript',  name: 'TypeScript',    icon: '🔷' },
            { slug: 'javascript',  name: 'JavaScript',    icon: '💛' },
            { slug: 'asp-net',     name: 'ASP.NET',       icon: '🔵' },
            { slug: 'net-core',    name: '.NET Core',     icon: '⚙️' },
            { slug: 'angular',     name: 'Angular',       icon: '🅰️' },
            { slug: 'wordpress',   name: 'WordPress',     icon: '🌐' },
            { slug: 'python',      name: 'Python',        icon: '🐍' },
            { slug: 'php',         name: 'PHP',           icon: '🐘' },
            { slug: 'ecommerce',   name: 'eCommerce',     icon: '🛒' },
          ]} />

          {/* ── Mobile App Development ── */}
          <TechGroup label="Mobile App Development" color="#8b5cf6" techs={[
            { slug: 'android',       name: 'Android',       icon: '🤖' },
            { slug: 'ios',           name: 'iOS',           icon: '🍎' },
            { slug: 'react-native',  name: 'React Native',  icon: '⚛️' },
            { slug: 'flutter',       name: 'Flutter',       icon: '💙' },
          ]} />

          {/* ── UI/UX Design ── */}
          <TechGroup label="UI/UX Design" color="#ec4899" techs={[
            { slug: 'ui-ux-design',  name: 'UI/UX Design',  icon: '🎨' },
            { slug: 'front-end-dev', name: 'Front-End Dev',  icon: '💻' },
          ]} />

          {/* ── Cloud & DevOps ── */}
          <TechGroup label="Cloud & DevOps" color="#f59e0b" techs={[
            { slug: 'azure',        name: 'Microsoft Azure', icon: '☁️' },
            { slug: 'aws',          name: 'AWS',             icon: '🔶' },
            { slug: 'google-cloud', name: 'Google Cloud',    icon: '🌩️' },
            { slug: 'git',          name: 'Git',             icon: '🔴' },
          ]} />

        </div>
      </section>

      {/* CTA section */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '50px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-glow)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Need a Tailor-Made Software Solution?</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '600px' }}>
              We build custom CRM tools, specific corporate workflows, and custom dashboards matching the exact layouts you need. Request a consultation to map out a solution.
            </p>
            <Link to="/contact" className="glow-btn" style={{ padding: '12px 30px' }}>
              Let's Talk Business <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
