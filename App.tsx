import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        {/* Главная - теперь Нижний Новгород */}
        <Route path="/" element={<UniversalPage />} />
        
        {/* Прямые ссылки */}
        <Route path="/nn" element={<UniversalPage />} />
        <Route path="/kuzbass" element={<UniversalPage />} />
        
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Любой другой путь тоже в UniversalPage */}
        <Route path="/:slug" element={<UniversalPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;