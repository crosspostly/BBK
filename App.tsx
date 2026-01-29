import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { BlogIndex } from './pages/BlogIndex';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="bg-bg min-h-screen text-textMain selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Fallback for 404 - redirects to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;