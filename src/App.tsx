import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SlicedSections from './components/SlicedSections';
import BottomCTA from './components/BottomCTA';
import AboutUs from './pages/AboutUs';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudiesArchive from './pages/CaseStudiesArchive';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Testimonials from './pages/Testimonials';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

import Footer from './components/Footer';



function App() {
  const [hash, setHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (hash === '#about') return <AboutUs />;
    if (hash.startsWith('#services')) return <ServiceDetail />;
    if (hash === '#case-studies') return <CaseStudiesArchive />;
    if (hash.startsWith('#case-study-detail')) return <CaseStudyDetail />;
    if (hash === '#testimonials') return <Testimonials />;
    if (hash.startsWith('#industries')) return <Industries />;
    if (hash === '#contact') return <Contact />;
    if (hash === '#blog') return <Blog />;
    if (hash.startsWith('#blog/')) return <BlogDetail />;
    return (
      <>
        <Hero />
        <BentoGrid />
        <SlicedSections />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        {renderPage()}
        {hash !== '#contact' && <BottomCTA />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
