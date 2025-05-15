import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-navy-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden z-10">
        <div className="absolute -right-16 top-1/4 w-96 h-96 bg-red-600/20 rotate-45 blur-xl"></div>
        <div className="absolute -right-8 top-1/3 w-64 h-64 bg-red-600/30 rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
        <div className="max-w-3xl mt-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your <span className="text-red-600">Maritime</span> Logistics Partner <span className="text-red-600">Worldwide</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            MAXYS FREIGHT BROKERS is an emerging leader in the global dry bulk shipping industry. 
            With our team's professional expertise and competency, we deliver exceptional maritime solutions 
            tailored to your specific requirements.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Our commitment is to prioritize our clients' needs, providing customized solutions and 
            services that exceed expectations. Through dedication and industry knowledge, we're 
            establishing ourselves as a trusted name in maritime logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#services" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center min-w-[160px]"
            >
              Our Services
            </Link>
            <Link 
              href="#contact" 
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center min-w-[160px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        {/* <Link href="#services" className=" my-5 flex flex-col items-center text-white">
          <span className="text-sm mt-5 my-5">Scroll to Explore</span>
          <ChevronDown className="h-6 w-6" />
        </Link> */}
      </div>
    </section>
  );
};

export default Hero;