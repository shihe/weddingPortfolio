import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'portfolio' && <PortfolioPage onNavigateToContact={() => handleNavigate('contact')} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
