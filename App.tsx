import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { UniversalPage } from './pages/UniversalPage';
import { BlogPost } from './pages/BlogPost';
import { BlogIndex } from './pages/BlogIndex';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="bg-bg min-h-screen text-textMain selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Redirect root to default Kemerovo restaurants page */} 
        <Route path="/" element={<Navigate to="/page/kuzbass" replace />} />
        {/* Dynamic page renderer for all content-driven pages */} 
        <Route path="/page/:slug" element={<UniversalPage />} />
        
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Fallback for 404 - redirects to the default page */} 
        <Route path="*" element={<Navigate to="/page/kuzbass" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;