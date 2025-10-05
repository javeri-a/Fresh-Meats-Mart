

"use client";
import React from "react";
import {
  FiMonitor,
  FiThermometer,
  FiDroplet,
  FiShield,
  FiActivity,
} from "react-icons/fi";

const MeatTechQuality = () => {
  const features = [
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 digital surveillance of storage conditions",
    },
    {
      icon: <FiThermometer className="w-6 h-6" />,
      title: "Precision Cooling", 
      description: "Smart temperature-controlled environments",
    },
    {
      icon: <FiDroplet className="w-6 h-6" />,
      title: "Hygiene Systems",
      description: "Automated antibacterial cleaning cycles",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Lab Certified",
      description: "Daily microbiological testing",
    },
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: "Quality Tracking",
      description: "Blockchain-based meat provenance",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-white py-16 overflow-hidden">
      {/* Red Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full -translate-y-32 translate-x-32 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-red-100 rounded-full -translate-x-24 translate-y-24 opacity-60"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with More Red */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-bold mb-6 shadow-lg shadow-red-500/25">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            ADVANCED MEAT TECHNOLOGY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scientific <span className="text-red-600">Quality Assurance</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Where tradition meets <span className="text-red-600 font-semibold">cutting-edge technology</span>
          </p>
        </div>

        {/* Features with More Red Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-5 rounded-xl bg-white border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:bg-red-50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-500 text-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-red-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {feature.description}
              </p>
              <div className="w-0 group-hover:w-8 h-0.5 bg-red-500 mx-auto mt-3 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* CTA with Vibrant Red */}
        <div className="text-center">
          <button className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 border border-red-500">
            Contact Quality Team
            <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          {/* Additional Red Accent */}
          <div className="flex justify-center items-center mt-6 space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>ISO 9001:2023 Certified Quality Standards</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatTechQuality;