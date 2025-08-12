// "use client"
// import React from 'react';
// import { FiMonitor, FiThermometer, FiDroplet, FiShield, FiActivity } from 'react-icons/fi';

// const MeatTechQuality = () => {
//   const features = [
//     {
//       icon: <FiMonitor className="w-6 h-6" />,
//       title: "Real-time Monitoring",
//       description: "24/7 digital surveillance of storage conditions"
//     },
//     {
//       icon: <FiThermometer className="w-6 h-6" />,
//       title: "Precision Cooling",
//       description: "Smart temperature-controlled environments"
//     },
//     {
//       icon: <FiDroplet className="w-6 h-6" />,
//       title: "Hygiene Systems",
//       description: "Automated antibacterial cleaning cycles"
//     },
//     {
//       icon: <FiShield className="w-6 h-6" />,
//       title: "Lab Certified",
//       description: "Daily microbiological testing"
//     },
//     {
//       icon: <FiActivity className="w-6 h-6" />,
//       title: "Quality Tracking",
//       description: "Blockchain-based meat provenance"
//     }
//   ];

//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* Tech pattern background */}
//       <div className="absolute inset-0 opacity-5 bg-[url('/tech-pattern.svg')]"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header with tech badge */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
//             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//             </svg>
//             MEAT TECHNOLOGY SYSTEMS
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             <span className="text-red-600">Scientific</span> Meat Quality Assurance
//           </h2>
//           <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Combining 30 years of butcher tradition with cutting-edge food safety technology
//           </p>
//         </div>

//         {/* Tech features grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <div key={index} className="group text-center">
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
//                 {feature.icon}
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Traditional + Tech blend */}
//         <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 md:p-12 border border-red-100">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Where Heritage Meets Innovation</h3>
//               <p className="text-gray-700 mb-6">
//                 For three decades, we've blended time-honored butcher craftsmanship with advanced food safety technology. 
//                 Our shop delivers both the authentic taste of traditionally aged meats and the absolute confidence 
//                 of laboratory-certified quality.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 {["HACCP Certified", "ISO 22000", "Blockchain Traceable", "USDA Approved"].map((badge, i) => (
//                   <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-red-700 border border-red-200">
//                     {badge}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
//               {/* Replace with actual image */}
//               <img 
//                 src="/4.png" 
//                 alt="Meat quality control technology" 
//                 className="w-full h-full object-cover"
//                 />
           
//               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
//                 [Meat quality control technology visualization]
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-20">
//           <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
//             Contact Our Quality Team
//             <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeatTechQuality;






"use client";
import React from "react";
import Image from "next/image";
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
    <section className="relative bg-white overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/tech-pattern.svg')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with tech badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            MEAT TECHNOLOGY SYSTEMS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Scientific</span> Meat Quality
            Assurance
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining 30 years of butcher tradition with cutting-edge food
            safety technology
          </p>
        </div>

        {/* Tech features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Traditional + Tech blend */}
        <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 md:p-12 border border-red-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Where Heritage Meets Innovation
              </h3>
              <p className="text-gray-700 mb-6">
                For three decades, we&apos;ve blended time-honored butcher
                craftsmanship with advanced food safety technology. Our shop
                delivers both the authentic taste of traditionally aged meats
                and the absolute confidence of laboratory-certified quality.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "HACCP Certified",
                  "ISO 22000",
                  "Blockchain Traceable",
                  "USDA Approved",
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-red-700 border border-red-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/4.png"
                alt="Meat quality control technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Meat quality control technology visualization]
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Our Quality Team
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeatTechQuality;
