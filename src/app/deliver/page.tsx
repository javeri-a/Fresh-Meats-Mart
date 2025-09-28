




// "use client"


// import React from 'react';
// import Image from 'next/image';

// const MeatDeliveryHero = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-amber-50 to-red-50 overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[url('/meat-pattern.svg')] bg-repeat bg-center"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="relative z-10">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               <span className="block text-red-700">Premium Quality</span>
//               <span className="block">Meat Delivery</span>
//             </h1>
            
//             <p className="text-lg md:text-xl text-amber-900 font-medium mb-2 italic">
//               Farm to Table Excellence
//             </p>
            
//             <ul className="space-y-3 mb-8">
//               <li className="flex items-start">
//                 <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-800">100% Natural, Humanely Raised</span>
//               </li>
//               <li className="flex items-start">
//                 <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-800">Antibiotic & Hormone Free</span>
//               </li>
//               <li className="flex items-start">
//                 <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-800">Grass-Fed & Pasture-Raised</span>
//               </li>
//             </ul>

//             <div className="mb-8">
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
//                   <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm text-gray-600">Tasting the way nature intended</p>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
//                   <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                   </svg>
//                 </div>
//                 <p className="text-sm text-gray-600">Next-Day Delivery Available</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//                 ORDER TODAY
//               </button>
//               <button className="border-2 border-red-700 text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
//                 Chat with Our Butchers
//               </button>
//             </div>

//             <p className="mt-4 text-sm text-amber-800 font-medium">
//               🎁 Order Now & Get Free Marinade Kit
//             </p>
//           </div>

//           {/* Image */}
//           <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform hover:rotate-1 transition duration-500">
//             <Image 
//               src="/4.png" 
//               alt="Premium quality meats display"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 p-6 text-white">
//               <span className="bg-black/70 px-3 py-1 rounded-full text-sm font-medium">Since 2010</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeatDeliveryHero;


"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const MeatDeliveryHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="block text-red-700">Premium Quality</span>
              <span className="block">Meat Delivery</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
              Fresh from farm, prepared with care, delivered to your door
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "100% Natural, Humanely Raised",
                "Antibiotic & Hormone Free",
                "Grass-Fed & Pasture-Raised",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <svg
                    className="h-6 w-6 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-800">{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
              >
                ORDER TODAY
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-700 text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Chat with Our Butchers
              </motion.button>
            </motion.div>

            <p className="mt-4 text-sm text-red-600 font-medium">
              🎁 Order now and get a free marinade kit
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ rotate: 1, scale: 1.02 }}
          >
            <Image
              src="/DEL.png"
              alt="Premium quality meats display"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <span className="bg-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Since 2010
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MeatDeliveryHero
