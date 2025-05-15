import React from 'react';
import { LineChart, Briefcase, PieChart, Anchor } from 'lucide-react';

const Consulting = () => {
  const consultingServices = [
    {
      title: 'Chartering Consultancy',
      description: [
        'Development of maritime traffics and logistics studies',
        'In search of logistics synergies',
        'Analysis of freight and operations',
        'Traffic optimization'
      ],
      icon: <Briefcase className="h-10 w-10 text-red-600" />
    },
    {
      title: 'Added Value Services',
      description: [
        'Market reports'
      ],
      icon: <LineChart className="h-10 w-10 text-red-600" />
    }
  ];

  return (
    <section id="consulting" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-red-600 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">We Go Further</h2>
            <div className="w-12 h-1 bg-red-600 ml-4"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond standard chartering services, we provide comprehensive consulting
            and added-value solutions to optimize your maritime logistics operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-last relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Consulting Services" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <PieChart className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-200">
                  Our consulting services are backed by comprehensive data analysis and industry expertise.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-900/20 rounded-full blur-lg"></div>
            <div className="absolute -top-4 -left-4 z-0">
              <Anchor className="h-16 w-16 text-gray-200" />
            </div>
          </div>
          
          <div className="space-y-8">
            {consultingServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="bg-navy-900 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to optimize your logistics?</h3>
              <p className="text-gray-300 mb-6">
                Our experienced consultants are ready to analyze your specific needs and develop
                a customized solution that maximizes efficiency and reduces costs.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;