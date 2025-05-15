import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-navy-900/95' : 'bg-navy-900t'}
        ${isMenuOpen ? 'bg-navy-900' : 'bg-navy-900'}
      `}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="bg-red-600 rounded-lg p-2 transition-colors group-hover:bg-red-700">
              <Anchor className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-wide">MAXYS BROKERS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#services" 
              className="text-white hover:text-red-500 transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link 
              href="#global" 
              className="text-white hover:text-red-500 transition-colors text-sm font-medium"
            >
              Global Reach
            </Link>
            <Link 
              href="#vessels" 
              className="text-white hover:text-red-500 transition-colors text-sm font-medium"
            >
              Vessels
            </Link>
            <Link 
              href="#consulting" 
              className="text-white hover:text-red-500 transition-colors text-sm font-medium"
            >
              Consulting
            </Link>
            <Link 
              href="#contact" 
              className="text-white hover:text-red-500 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Link 
              href="#quote" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 top-20 bg-navy-900 border-t border-white/10 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                href="#services" 
                className="block py-3 text-white hover:bg-red-600/10 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#global" 
                className="block py-3 text-white hover:bg-red-600/10 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Global Reach
              </Link>
              <Link 
                href="#vessels" 
                className="block py-3 text-white hover:bg-red-600/10 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vessels
              </Link>
              <Link 
                href="#consulting" 
                className="block py-3 text-white hover:bg-red-600/10 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Consulting
              </Link>
              <Link 
                href="#contact" 
                className="block py-3 text-white hover:bg-red-600/10 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#quote" 
                className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;