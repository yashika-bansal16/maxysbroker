import React from 'react';
import { Anchor, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from './ui/Link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Anchor className="h-8 w-8 text-red-600 mr-2" />
              <span className="font-bold text-2xl">MAXYS BROKERS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted maritime partner for global cargo solutions. Connecting shippers with optimal vessel options worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Agriproducts</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Cement & Construction</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Mining & Energy</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Steel & Metals</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Break Bulk Cargo</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Wood & Timber</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#hero" className="text-gray-400 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="#vessels" className="text-gray-400 hover:text-red-500 transition-colors">Vessel Types</Link></li>
              <li><Link href="#global" className="text-gray-400 hover:text-red-500 transition-colors">Global Reach</Link></li>
              <li><Link href="#consulting" className="text-gray-400 hover:text-red-500 transition-colors">Consulting Services</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maxys Brokers. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-navy-800 hover:bg-navy-700 p-3 rounded-full transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;