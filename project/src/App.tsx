import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalReach from './components/GlobalReach';
import VesselTypes from './components/VesselTypes';
import Consulting from './components/Consulting';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Maxys Brokers | Maritime Logistics Partner';
    
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/anchor-icon.svg';
    }
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <main className="pt-20 md:pt-20">
        <Hero />
        <Services />
        <GlobalReach />
        <VesselTypes />
        <Consulting />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;