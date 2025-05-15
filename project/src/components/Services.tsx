import React from 'react';
import ServiceCard from './ServiceCard';
import { Box, Anchor, Building2, Factory, Loader, Warehouse, Ship, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Agriproducts',
      description: 'Grains, fertilizers, flours, and agricultural commodities',
      icon: <Warehouse className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Cement & Construction',
      description: 'Clinker, gypsum, slag, fly ash, pumite, and building materials',
      icon: <Building2 className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'Mining & Energy',
      description: 'Aggregates, coals, minerals, ores, pig iron, and energy resources',
      icon: <Factory className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/2102645/pexels-photo-2102645.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Steel & Metals',
      description: 'Rebars, coils, mesh, billets, profiles, ingots, plates, scrap',
      icon: <Box className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Break Bulk Cargo',
      description: 'Big bags, barrels, pallets, boxes, crates, glass panes',
      icon: <Loader className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      title: 'Wood & Timber',
      description: 'Logs, MDF, paper reels, wood pulp, and timber materials',
      icon: <Anchor className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 7,
      title: 'Project Cargo',
      description: 'Specialized transportation for oversized and heavy equipment',
      icon: <Ship className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/754855/pexels-photo-754855.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 8,
      title: 'Specialized Cargo',
      description: 'Dangerous goods, explosives, and special handling items',
      icon: <Truck className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 mt-10 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">A Chartering Solution for Every Cargo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in connecting your cargo with the optimal vessel, regardless of type or size.
            Our expertise spans across diverse industries and commodity types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;