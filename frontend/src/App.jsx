import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TechDetail from './pages/TechDetail';
import IndustryDetail from './pages/IndustryDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';

// Scroll to Top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative'
      }}>
        {/* Navigation bar */}
        <Header />
        
        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technology/:slug" element={<TechDetail />} />
            <Route path="/industry/:slug" element={<IndustryDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        
        {/* Footer info */}
        <Footer />
        
        {/* Floating actions: WhatsApp direct link & Back to top button */}
        <FloatingActions />
        
        {/* AI Chatbot Assistant */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
