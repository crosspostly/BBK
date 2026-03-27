import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { UniversalPage } from './pages/UniversalPage';
import { BlogPost } from './pages/BlogPost';
import { BlogIndex } from './pages/BlogIndex';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { regions } from './constants_universal';

function App() {
  const activeContent = regions.nn;

  return (
    <div className="bg-bg min-h-screen text-zinc-100 selection:bg-yellow-600/30">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<UniversalPage />} />
        <Route path="/nn" element={<UniversalPage />} />
        <Route path="/kuzbass" element={<UniversalPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/:slug" element={<UniversalPage />} />
      </Routes>
      <Footer content={activeContent.footer} />
    </div>
  );
}

export default App;
