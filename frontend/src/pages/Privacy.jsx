import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
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
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 60%)',
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
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            fontSize: '13px',
            fontWeight: '600',
            color: 'var(--color-primary)',
            width: 'fit-content'
          }}>
            <Shield size={14} /> Security &amp; Compliance
          </div>
          
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Privacy <span className="gradient-text glow-blue">Policy</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '600px', lineHeight: '1.6' }}>
            Last Updated: July 5, 2026. This policy outlines how Arha Technologies handles, processes, and protects your personal credentials.
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>1. Data We Collect</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                We collect information you directly submit to us through our contact forms, service inquiry forms, and job application forms on this site. This includes your <strong>Full Name</strong>, <strong>Email Address</strong>, <strong>Phone Number</strong>, <strong>Resume Attachment files</strong>, and any descriptive message details you choose to share with us.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Eye size={20} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>2. How We Process Data</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                The details you provide are processed exclusively for professional service facilitation:
              </p>
              <ul style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '55px', listStyle: 'disc' }}>
                <li style={{ marginBottom: '8px' }}>To analyze and respond to project quotes, consultations, and support queries.</li>
                <li style={{ marginBottom: '8px' }}>To evaluate job application resumes, portfolio links, and coordinate screening calls.</li>
                <li style={{ marginBottom: '8px' }}>To maintain our internal record-keeping as required by local cyber regulations.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>3. Information Safeguarding</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                Arha Technologies applies industry-standard TLS encryption protocols on all data transmissions. We secure our databases against unauthorized access, theft, or modifications. We do not sell, rent, lease, or distribute your email address, phone number, or files to any third-party marketing companies under any circumstances.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={20} style={{ color: 'var(--color-secondary)' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>4. User Data Controls</h2>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7', paddingLeft: '30px' }}>
                You have the complete right to request access to the logs we have saved concerning your email, or request their permanent erasure from our database registry. To coordinate a data management query, please write to us directly at: <a href="mailto:arhatechnologies5@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>arhatechnologies5@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
