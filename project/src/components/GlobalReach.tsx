import React from 'react';
import { Globe } from 'lucide-react';

const GlobalReach = () => {
  return (
    <section id="global" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-red-600 rounded-full p-2 mr-4">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Global Outreach</h2>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team works with real-time market data in close collaboration with charterers,
              shipowners and other industry players to match cargoes with the most suitable vessels,
              optimizing the freight and reducing costs for our clients.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-500">Worldwide Maritime Traffic</h3>
                <p className="text-gray-300">
                  Inter pacific, Inter Atlantic, Back Haul, Front Haul.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-500">Any Charter Party</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Single Voyage Charters:</strong> Gencon, Synacomex, AMWELSH...</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Time Charters:</strong> Baltime, NYPE...</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Contracts of Affreightment</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Logistics:</strong> LOLO, FILO, part cargo, Liner terms...</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-500">With You All The Way</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Post Fixing services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Risk and Claims Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Laytime Calculations and Documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://th.bing.com/th/id/OIP.DAeh6D3mCCZ76M9Fu0IPZgHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Coal Mining Operations" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-navy-900/40"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-600/30 rounded-full blur-lg"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;