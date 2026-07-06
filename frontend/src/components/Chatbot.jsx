import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hi there! 👋 I am the Arha AI Assistant. Ask me anything about our software engineering services, office location, job openings, or how to get in touch!' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Suggested quick prompts
  const quickPrompts = [
    { label: '⚙️ Services Offered', query: 'What services do you offer?' },
    { label: '💼 Career Openings', query: 'Are there any job openings?' },
    { label: '📍 Office Location', query: 'Where is your office located?' },
    { label: '📞 Contact Details', query: 'How can I contact the team?' }
  ];

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend.trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and typing response
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    // Greeters
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('hola') || q.includes('greetings')) {
      return "Hello! 😊 How can I assist you today?\n\nFeel free to ask me about:\n• Working Hours (Office timings)\n• Job / Internship availability\n• Project Inquiry / Client details\n• Services & Location";
    }

    // Working Hours / Timing / Kitne baje open hota hai
    if (q.includes('time') || q.includes('timing') || q.includes('hour') || q.includes('open') || q.includes('close') || q.includes('kitne baje') || q.includes('baje') || q.includes('kabh')) {
      return "🕒 Office Working Hours:\n\n• We are open from **9:00 AM to 6:00 PM** (Monday to Saturday).\n• We are closed on Sundays.";
    }

    // Internship / Intern / Training
    if (q.includes('intern') || q.includes('internship') || q.includes('training') || q.includes('fresher') || q.includes('fresher welcome')) {
      return "🎓 Internships at Arha Technologies:\n\nYes, we offer active Paid Internship programs with direct mentor guidance and real-world project experience!\n\n• Full Stack Developer Intern (JavaScript/Node/SQL)\n• UI/UX Design Intern\n\nFreshers are welcome! You can submit your application directly on our Careers page.";
    }

    // Jobs / Openings / Career
    if (q.includes('job') || q.includes('career') || q.includes('hiring') || q.includes('apply') || q.includes('opening') || q.includes('developer') || q.includes('designer') || q.includes('vacancy') || q.includes('join')) {
      return "💼 Current Job Openings:\n\nYes, we have open positions for talented individuals:\n\n• Junior React Developer (0 - 2 Years Experience)\n• UI / UX Designer (1 - 2 Years Experience)\n• Developer Interns\n\nHead to our Careers page to submit your resume link!";
    }

    // Services / Technologies
    if (q.includes('service') || q.includes('offer') || q.includes('build') || q.includes('develop') || q.includes('technology') || q.includes('tech') || q.includes('stack')) {
      return "Arha Technologies specializes in Next-Gen IT solutions. 💻\n\n• Web & App Development (React, Node, WordPress, PHP, .NET)\n• Mobile Apps (Android, iOS, Flutter, React Native)\n• UI/UX Design (Figma, Prototyping)\n• Cloud Systems (AWS, Azure, Google Cloud)\n\nYou can explore our full technical stack on our Services page!";
    }

    // Location / Address
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('office') || q.includes('spire') || q.includes('rajkot') || q.includes('gujarat')) {
      return "📍 Our primary engineering hub is located at:\n\nThe Spire, Near Ayodhya Chowk,\nRajkot, Gujarat - 360005.\n\nDrop by or schedule a virtual discovery consultation with our management!";
    }

    // Client Inquiry / Start Project / Cost / Price
    if (q.includes('client') || q.includes('project') || q.includes('price') || q.includes('cost') || q.includes('charge') || q.includes('quote') || q.includes('fee') || q.includes('hire') || q.includes('website banvana')) {
      return "🚀 Start a Project / Client Inquiry:\n\nWe'd love to engineer your website or software product! Let's schedule a discovery consultation call.\n\n• Primary WhatsApp: +91 90993 22463\n• Direct Email: arhatechnologies5@gmail.com\n• Direct Form: Submit your specifications on our Contact Us page!";
    }

    // Contact details
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('mail') || q.includes('whatsapp')) {
      return "📞 You can connect with our team directly via:\n\n• Primary Phone (Call + WhatsApp): +91 90993 22463\n• Secondary Phone (Call only): +91 63534 88481\n• Email Address: arhatechnologies5@gmail.com\n\nOr submit a query on our Contact Us page and we will reply within 24 hours!";
    }

    // Default Fallback
    return "💡 That is a great question! While I am still training my AI neural engine to answer specific queries, I can help you with details on:\n\n• Our office timings (9 AM to 6 PM)\n• Paid internships and job listings\n• Starting a project / client inquiry\n• Direct phone/email details\n\nWhat would you like to know more about? You can also contact us directly at arhatechnologies5@gmail.com.";
  };

  return (
    <>
      {/* Floating Chat Icon Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle-btn animate-pulse-glow"
        aria-label="Open AI Assistant Chatbot"
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: isOpen ? 'var(--color-bg-card)' : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          border: isOpen ? '1px solid var(--color-border)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: isOpen ? '0 4px 15px rgba(0,0,0,0.3)' : '0 4px 20px rgba(59, 130, 246, 0.4)',
          zIndex: 45,
          cursor: 'pointer',
          transition: 'transform 0.3s, background 0.3s'
        }}
      >
        {isOpen ? <X size={24} style={{ color: 'var(--color-text-primary)' }} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="chatbot-window glass-card"
          style={{
            position: 'fixed',
            bottom: '170px',
            right: '30px',
            width: '380px',
            height: '520px',
            maxWidth: 'calc(100vw - 60px)',
            maxHeight: 'calc(100vh - 200px)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 45,
            border: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            animation: 'fadeInUp 0.25s ease-out'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Arha AI Assistant <Sparkles size={12} style={{ color: '#eab308' }} />
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#10b981' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                  Online &bull; Instant Reply
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Log area */}
          <div style={{
            flexGrow: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            background: 'transparent'
          }}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '16px',
                  borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line',
                  color: msg.sender === 'user' ? 'white' : 'var(--color-text-primary)',
                  background: msg.sender === 'user' 
                    ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' 
                    : 'var(--color-bg-dark)',
                  border: msg.sender === 'user' 
                    ? 'none' 
                    : '1px solid var(--color-border)',
                  boxShadow: msg.sender === 'user' 
                    ? '0 4px 12px rgba(59, 130, 246, 0.25)' 
                    : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  borderTopLeftRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center'
                }}>
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-secondary)' }} />
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-secondary)', animationDelay: '0.2s' }} />
                  <span className="dot-typing" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-secondary)', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          {messages.length === 1 && !isTyping && (
            <div style={{
              padding: '10px 16px',
              borderTop: '1px solid var(--color-border)',
              background: 'var(--color-bg-dark)'
            }}>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HelpCircle size={12} /> Click a suggested question:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(p.query)}
                    style={{
                      background: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.18)',
                      borderRadius: '12px',
                      padding: '5px 10px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      cursor: 'pointer',
                      transition: 'background 0.18s, border 0.18s'
                    }}
                    className="quick-prompt-btn"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form Input Footer */}
          <div style={{
            padding: '14px 16px',
            borderTop: '1px solid var(--color-border)',
            background: 'var(--color-bg-dark)'
          }}>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} 
              style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me a question..."
                style={{
                  flexGrow: 1,
                  background: 'var(--color-bg-darker)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  fontSize: '12.5px',
                  color: 'var(--color-text-primary)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={isTyping}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  transition: 'opacity 0.2s'
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Embedded Animations Styles */}
      <style>{`
        .chatbot-toggle-btn:hover {
          transform: scale(1.08) rotate(3deg);
        }
        .quick-prompt-btn:hover {
          background: rgba(59, 130, 246, 0.16) !important;
          border-color: rgba(59, 130, 246, 0.35) !important;
        }
        .dot-typing {
          animation: bounce 1.4s infinite ease-in-out both;
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </>
  );
}
