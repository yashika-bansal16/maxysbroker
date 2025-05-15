import React from 'react';
import { Ship } from 'lucide-react';

const VesselTypes = () => {
  const vesselTypes = [
    { type: 'Coaster', dwt: '< 20k', loa: '< 160', beam: '< 25', draft: '< 9.5' },
    { type: 'Handysize', dwt: '20 – 40k', loa: '160 – 180', beam: '25 – 30', draft: '9.5 – 10.5' },
    { type: 'Handymax', dwt: '40 – 50k', loa: '185 – 190', beam: '30 – 32', draft: '11.1 – 11.7' },
    { type: 'Supramax', dwt: '50 – 60k', loa: '190 – 200', beam: '32', draft: '12 – 12.85' },
    { type: 'Ultramax', dwt: '60 – 66k', loa: '200 – 229', beam: '32.2 – 32.5', draft: '13 – 13.5' },
    { type: 'Panamax', dwt: '66k – 100k', loa: '229 – 290', beam: '33', draft: '13 – 15' },
    { type: 'Capesize', dwt: '100 – 180k', loa: '290', beam: '45', draft: '18' }
  ];

  return (
    <section id="vessels" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left mb-10">
              <div className="flex items-center mb-6 justify-center lg:justify-start">
                <div className="bg-red-600 rounded-full p-2 mr-4">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Size Doesn't Matter</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work together with first-class shipowners with state-of-the-art fleets across all vessel sizes.
                From small coasters to massive cape-size vessels, we find the perfect match for your cargo needs.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-center">DWT (MT)</th>
                    <th className="py-3 px-4 text-center">LOA (m)</th>
                    <th className="py-3 px-4 text-center">BEAM (m)</th>
                    <th className="py-3 px-4 text-center">DRAFT (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {vesselTypes.map((vessel, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                      hover:bg-red-50 transition-colors duration-150`}
                    >
                      <td className="py-3 px-4 font-medium">{vessel.type}</td>
                      <td className="py-3 px-4 text-center">{vessel.dwt}</td>
                      <td className="py-3 px-4 text-center">{vessel.loa}</td>
                      <td className="py-3 px-4 text-center">{vessel.beam}</td>
                      <td className="py-3 px-4 text-center">{vessel.draft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Container Ships" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/70 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Vessel Matchmaking</h3>
                  <p className="text-gray-200">
                    Our expertise ensures that your cargo is paired with the most suitable vessel type, 
                    optimizing cost and efficiency for every voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VesselTypes;