import React from 'react';
import { PhoneCall } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="quote" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <PhoneCall className="h-10 w-10" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Cargo Movement?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl">
                Our brokers are available to discuss your specific requirements and provide tailored solutions
                for your shipping needs. Get in touch today for a personalized quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors inline-block text-center"
                >
                  Request a Quote
                </a>
                <a
                  href="tel:+971569848947"
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors inline-block text-center"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;