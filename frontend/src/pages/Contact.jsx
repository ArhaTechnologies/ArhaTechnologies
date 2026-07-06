import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
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
          subject: '',
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
      console.error('Contact submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        message: 'Could not connect to the server. Please ensure the backend is running.'
      });
    }
  };

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
            Get In Touch
          </div>
          <h1 style={{ fontSize: 'calc(1.8rem + 2vw)', fontWeight: '800' }}>
            Let's Start a <br />
            <span className="gradient-text glow-blue">Growth Partnership</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '600px', lineHeight: '1.7' }}>
            Contact our engineering and design team directly. We respond to queries within 24 hours.
          </p>
        </div>
      </section>

      {/* Grid of contact details & Form */}
      <section style={{ paddingBottom: '60px' }}>
        <div className="container contact-grid">
          
          {/* Left Column: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Contact Information</h2>
            
            {/* Address Card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--color-primary)',
                background: 'rgba(59, 130, 246, 0.06)',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: 'var(--color-text-primary)' }}>Office Address</h4>
                <a 
                  href="https://maps.google.com/?q=The+Spire,+Near+Ayodhya+Chowk,+Rajkot,+Gujarat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.5' }}
                  className="hover-glow-link"
                >
                  The Spire, Near Ayodhya Chowk,<br />
                  Rajkot, Gujarat - 360005
                </a>
              </div>
            </div>

            {/* Calling Card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--color-secondary)',
                background: 'rgba(6, 182, 212, 0.06)',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: 'var(--color-text-primary)' }}>Phone Numbers</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px' }}>
                  <a href="tel:+919099322463" className="hover-glow-link" style={{ color: 'var(--color-text-secondary)', fontWeight: '500' }}>
                    +91 90993 22463 (Call & WhatsApp)
                  </a>
                  <a href="tel:+916353488481" className="hover-glow-link" style={{ color: 'var(--color-text-secondary)', fontWeight: '500' }}>
                    +91 63534 88481 (Alternative)
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                color: 'var(--color-accent)',
                background: 'rgba(99, 102, 241, 0.06)',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: 'var(--color-text-primary)' }}>Email Address</h4>
                <a 
                  href="mailto:arhatechnologies5@gmail.com" 
                  className="hover-glow-link" 
                  style={{ color: 'var(--color-text-secondary)', fontSize: '14px', wordBreak: 'break-all' }}
                >
                  arhatechnologies5@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                color: '#25D366',
                background: 'rgba(37, 211, 102, 0.06)',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: 'var(--color-text-primary)' }}>Instant Chat</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: '10px' }}>
                  Have a quick project query? Connect directly with our development head on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/919099322463?text=Hi%20Arha%20Technologies,%20I'd%20like%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glow-btn"
                  style={{ 
                    fontSize: '13px', 
                    padding: '8px 16px', 
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)' 
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Send Us A Message</h2>

            {status.success === true ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                color: '#86efac'
              }}>
                <CheckCircle2 size={42} />
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px' }}>{status.message}</p>
                <button 
                  onClick={() => setStatus({ ...status, success: null })}
                  className="outline-btn"
                  style={{ fontSize: '13px', padding: '10px 20px', marginTop: '10px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="Enter your name" 
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
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    className="form-input" 
                    placeholder="e.g. Custom Web Application development" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="5" 
                    required
                    className="form-textarea" 
                    placeholder="Detail your product vision or project expectations..."
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
                  {status.submitting ? 'Sending Message...' : 'Send Message'} <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Find Us on Google Maps</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '6px' }}>
              The Spire, Near Ayodhya Chowk, Rajkot, Gujarat
            </p>
          </div>
          
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--color-border-glow)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            height: '400px',
            position: 'relative'
          }}>
            {/* Clickable Overlay Link that opens location on Google Maps */}
            <a 
              href="https://maps.google.com/?q=The+Spire,+Near+Ayodhya+Chowk,+Rajkot,+Gujarat" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Click to view larger map and get directions"
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 5, 
                cursor: 'pointer' 
              }} 
            />
            {/* Google maps iframe with responsive height and width */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0116812836266!2d70.77665797607739!3d22.315392042352843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c948e42f9bcf%3A0xe54fb1d13f9f4d1e!2sThe%20Spire!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ 
                border: 0
              }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Arha Technologies Location Map"
            />
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
        }
        .contact-form-card {
          margin-top: 48px;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .hover-glow-link {
          transition: var(--transition-smooth);
        }
        .hover-glow-link:hover {
          color: var(--color-primary) !important;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.25);
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .contact-form-card {
            margin-top: 0 !important;
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
