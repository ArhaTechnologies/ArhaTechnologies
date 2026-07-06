import React from 'react';
import { FileText, Award, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="page-wrapper" style={{ minHeight: '90vh', paddingBottom: '80px' }}>
      <section style={{ paddingBottom: '30px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow panels */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />

        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
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
            <Scale size={14} /> Legal Agreement
          </div>
          
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Terms of <span className="gradient-text glow-blue">Service</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '600px', lineHeight: '1.6' }}>
            Last Updated: July 5, 2026. Review the legal rules governing your access and browsing behaviors on this website.
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={20} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>1. Agreement Acceptance</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                By accessing, navigating, or interacting with the online features of Arha Technologies, you explicitly agree to comply with and be bound by these Terms of Service. If you do not accept these parameters, please discontinue your access immediately.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>2. Intellectual Property Rights</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                All digital components, text configurations, vector illustrations, logo graphics, design schemes, and source codes featured on this platform are the sole intellectual property of <strong>Arha Technologies</strong>. Reproduction, distribution, or reverse-engineering of any platform materials without our explicit written consent is strictly prohibited.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle size={20} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>3. Acceptable Use Policy</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                Users agree not to:
              </p>
              <ul style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '55px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '8px' }}>Introduce viruses, malware scripts, or orchestrate DDoS vectors targeting our servers.</li>
                <li style={{ marginBottom: '8px' }}>Submit fraudulent, harassing, or false details inside our contact and careers portals.</li>
                <li style={{ marginBottom: '8px' }}>Employ automated screen scrapers or data crawlers without prior authorizations.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>4. Limitation of Liability</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                All website materials are provided on an "as is" and "as available" basis. Arha Technologies does not warrant that features will run uninterrupted or error-free. We assume no direct liability for cyber server dropouts, browser failures, or data losses resulting from site navigation.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Scale size={20} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>5. Jurisdiction Laws</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                Any legal actions, claims, or disputes arising in connection with website usage shall be governed and interpreted under the exclusive jurisdiction of the state courts of <strong>Gujarat, India</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
