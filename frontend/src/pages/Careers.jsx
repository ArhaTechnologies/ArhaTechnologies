import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Junior React Developer',
    portfolioUrl: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const openings = [
    {
      title: 'Junior React Developer',
      location: 'Rajkot, Gujarat (On-site)',
      type: 'Full-time',
      exp: '0 - 2 Years',
      tech: ['React.js', 'CSS / HTML5', 'JavaScript (ES6)', 'Git']
    },
    {
      title: 'UI / UX Designer',
      location: 'Rajkot, Gujarat (On-site)',
      type: 'Full-time',
      exp: '1 - 2 Years',
      tech: ['Figma', 'Wireframing', 'Color Theory', 'Prototyping']
    },
    {
      title: 'Full Stack Developer Intern',
      location: 'Rajkot, Gujarat (On-site)',
      type: 'Internship',
      exp: 'Freshers welcome',
      tech: ['JavaScript', 'HTML/CSS', 'Node.js basics', 'SQL/NoSQL']
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('https://arhatechnologies.com/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: data.message
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: 'Junior React Developer',
          portfolioUrl: '',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: data.message || 'An error occurred. Please try again.'
        });
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        message: 'Could not connect to the server. Please ensure the backend is running.'
      });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Intro */}
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
            <Briefcase size={14} /> Careers
          </div>
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Build Your Career with <br />
            <span className="gradient-text glow-blue">Arha Technologies</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '600px', lineHeight: '1.7' }}>
            We are a young IT company offering steep learning curves, direct client exposure, and creative engineering freedom.
          </p>
        </div>
      </section>

      {/* Grid of Openings & Application Form */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container careers-grid">
          {/* Left Column: Job Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Current Openings</h2>
            
            {openings.map((job, idx) => (
              <TiltCard key={idx} maxTilt={5} className="glass-card" style={{ padding: '24px' }} glowColor="rgba(59, 130, 246, 0.12)">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-text-primary)' }}>{job.title}</h3>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: 'var(--color-primary)',
                    padding: '4px 10px',
                    borderRadius: '12px'
                  }}>{job.type}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {job.exp}
                  </span>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid var(--color-border)', paddingTop: '14px', marginTop: '12px' }}>
                  {job.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        fontSize: '11px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Right Column: Application Form */}
          <div className="glass-card" style={{ padding: '40px', position: 'relative' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Apply For A Position</h2>
            
            {status.success === true ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                color: '#86efac'
              }}>
                <CheckCircle2 size={36} />
                <h3>Application Received!</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{status.message}</p>
                <button 
                  onClick={() => setStatus({ ...status, success: null })}
                  className="outline-btn"
                  style={{ fontSize: '13px', padding: '8px 16px', marginTop: '10px' }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      className="form-input" 
                      placeholder="your.email@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      className="form-input" 
                      placeholder="e.g. 9099322463" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="position">Position *</label>
                  <select 
                    id="position"
                    name="position" 
                    required
                    className="form-input"
                    style={{ background: 'var(--color-bg-darker)', color: 'var(--color-text-primary)', cursor: 'pointer' }}
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option value="Junior React Developer">Junior React Developer</option>
                    <option value="UI / UX Designer">UI / UX Designer</option>
                    <option value="Full Stack Developer Intern">Full Stack Developer Intern</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="portfolioUrl">Resume or Portfolio Link</label>
                  <input 
                    type="url" 
                    id="portfolioUrl"
                    name="portfolioUrl" 
                    className="form-input" 
                    placeholder="Link to Drive, Github, or Portfolio" 
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message / Statement</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="4" 
                    className="form-textarea" 
                    placeholder="Tell us a little bit about your tech interest..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {status.success === false && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#f87171',
                    background: 'rgba(239, 68, 68, 0.08)',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    fontSize: '13px'
                  }}>
                    <AlertCircle size={16} />
                    <span>{status.message}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="glow-btn" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status.submitting ? 'Submitting Application...' : 'Submit Application'} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <style>{`
        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .careers-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .form-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
