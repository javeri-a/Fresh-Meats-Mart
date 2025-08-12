


"use client";


import { motion } from 'framer-motion';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Ethical Sourcing",
      description: "We partner with farms that meet our strict animal welfare and quality standards",
      img: "/source.png",
      arrowDirection: "right"
    },
    {
      number: "02",
      title: "Easy Selection",
      description: "Browse our curated selection of premium cuts and specialty meats",
      img: "/choose.png",
      arrowDirection: "up"
    },
    {
      number: "03",
      title: "Safe Delivery",
      description: "Temperature-controlled shipping in eco-friendly packaging",
      img: "/delivery.png",
      arrowDirection: "left"
    },
    {
      number: "04",
      title: "Enjoy Quality",
      description: "Restaurant-quality meals at home with our premium proteins",
      img: "/enjoy.png",
      arrowDirection: "none"
    }
  ];

  const ArrowIcon = ({ direction }) => {
    const rotations = {
      right: "rotate-0",
      up: "-rotate-90",
      left: "rotate-180",
      none: "hidden"
    };

    return (
      <div className={`absolute ${rotations[direction]} text-red-500  bg-gradient-to-b from-red-50 to-white`}>
        <svg 
          className="w-10 h-10 animate-pulse"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-3">
            Our Process
          </h2>
          <div className="w-24 h-0.5 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Step Number */}
              <motion.div 
                className="absolute -top-4 -left-4 z-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.number}
              </motion.div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-100 group-hover:border-red-300 transition-all duration-300 h-64">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className={`absolute ${step.arrowDirection === 'right' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:block hidden' : 
                                step.arrowDirection === 'up' ? 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:hidden' : 
                                'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:block hidden'}`}>
                  <ArrowIcon direction={step.arrowDirection} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
























