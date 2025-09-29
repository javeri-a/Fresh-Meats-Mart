


// "use client";


// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const HowItWorks = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Ethical Sourcing",
//       description: "We partner with farms that meet our strict animal welfare and quality standards",
//       img: "/source.png",
//       arrowDirection: "right"
//     },
//     {
//       number: "02",
//       title: "Easy Selection",
//       description: "Browse our curated selection of premium cuts and specialty meats",
//       img: "/choose.png",
//       arrowDirection: "up"
//     },
//     {
//       number: "03",
//       title: "Safe Delivery",
//       description: "Temperature-controlled shipping in eco-friendly packaging",
//       img: "/delivery.png",
//       arrowDirection: "left"
//     },
//     {
//       number: "04",
//       title: "Enjoy Quality",
//       description: "Restaurant-quality meals at home with our premium proteins",
//       img: "/enjoy.png",
//       arrowDirection: "none"
//     }
//   ];

//   const ArrowIcon = ({ direction }) => {
//     const rotations = {
//       right: "rotate-0",
//       up: "-rotate-90",
//       left: "rotate-180",
//       none: "hidden"
//     };

//     return (
//       <div className={`absolute ${rotations[direction]} text-red-500  bg-gradient-to-b from-red-50 to-white`}>
//         <svg 
//           className="w-10 h-10 animate-pulse"
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round" 
//             strokeWidth="2" 
//             d="M14 5l7 7m0 0l-7 7m7-7H3" 
//           />
//         </svg>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl font-light text-gray-900 mb-3">
//             Our Process
//           </h2>
//           <div className="w-24 h-0.5 bg-red-500 mx-auto"></div>
//         </motion.div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="group relative"
//             >
//               {/* Step Number */}
//               <motion.div 
//                 className="absolute -top-4 -left-4 z-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white"
//                 whileHover={{ scale: 1.1, rotate: 360 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {step.number}
//               </motion.div>

//               {/* Image Container */}
//               <div className="relative overflow-hidden rounded-lg border-2 border-gray-100 group-hover:border-red-300 transition-all duration-300 h-64">
//                 <Image
//                   src={step.img}
//                   alt={step.title}
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-110"
//                 />
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-6">
//                   <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                     <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
//                     <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Arrow */}
//               {index < steps.length - 1 && (
//                 <div className={`absolute ${step.arrowDirection === 'right' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:block hidden' : 
//                                 step.arrowDirection === 'up' ? 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:hidden' : 
//                                 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:block hidden'}`}>
//                   <ArrowIcon direction={step.arrowDirection} />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;






























// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// type ArrowDirection = "right" | "up" | "left" | "none";

// const HowItWorks = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Ethical Sourcing",
//       description:
//         "We partner with farms that meet our strict animal welfare and quality standards",
//       img: "/source.png",
//       arrowDirection: "right" as ArrowDirection,
//     },
//     {
//       number: "02",
//       title: "Easy Selection",
//       description:
//         "Browse our curated selection of premium cuts and specialty meats",
//       img: "/choose.png",
//       arrowDirection: "up" as ArrowDirection,
//     },
//     {
//       number: "03",
//       title: "Safe Delivery",
//       description: "Temperature-controlled shipping in eco-friendly packaging",
//       img: "/delivery.png",
//       arrowDirection: "left" as ArrowDirection,
//     },
//     {
//       number: "04",
//       title: "Enjoy Quality",
//       description:
//         "Restaurant-quality meals at home with our premium proteins",
//       img: "/enjoy.png",
//       arrowDirection: "none" as ArrowDirection,
//     },
//   ];

//   const ArrowIcon = ({ direction }: { direction: ArrowDirection }) => {
//     const rotations = {
//       right: "rotate-0",
//       up: "-rotate-90",
//       left: "rotate-180",
//       none: "hidden",
//     };

//     return (
//       <div
//         className={`absolute ${rotations[direction]} text-red-500  bg-gradient-to-b from-red-50 to-white`}
//       >
//         <svg
//           className="w-10 h-10 animate-pulse"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M14 5l7 7m0 0l-7 7m7-7H3"
//           />
//         </svg>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl font-light text-gray-900 mb-3">
//             Our Process
//           </h2>
//           <div className="w-24 h-0.5 bg-red-500 mx-auto"></div>
//         </motion.div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="group relative"
//             >
//               {/* Step Number */}
//               <motion.div
//                 className="absolute -top-4 -left-4 z-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white"
//                 whileHover={{ scale: 1.1, rotate: 360 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {step.number}
//               </motion.div>

//               {/* Image Container */}
//               <div className="relative overflow-hidden rounded-lg border-2 border-gray-100 group-hover:border-red-300 transition-all duration-300 h-64">
//                 <Image
//                   src={step.img}
//                   alt={step.title}
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-6">
//                   <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                     <h3 className="text-xl font-medium text-white mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Arrow */}
//               {index < steps.length - 1 && (
//                 <div
//                   className={`absolute ${
//                     step.arrowDirection === "right"
//                       ? "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:block hidden"
//                       : step.arrowDirection === "up"
//                       ? "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
//                       : "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:block hidden"
//                   }`}
//                 >
//                   <ArrowIcon direction={step.arrowDirection} />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;





"use client"
import { motion } from 'framer-motion';
import { ShoppingCartIcon, ClockIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Quick = () => {
  const steps = [
    {
      icon: ShoppingCartIcon,
      title: "Select Premium Cuts",
      description: "Browse our exclusive collection of premium graded meats handpicked by master butchers",
      color: "from-red-600 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-600 to-orange-500",
      time: "2 mins",
      features: ["100+ Options", "Expert Guidance", "Quality Guaranteed"]
    },
    {
      icon: ClockIcon,
      title: "Schedule Delivery",
      description: "Choose your preferred delivery slot with flexible timing options across Karachi",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-500 to-amber-500",
      time: "1 min",
      features: ["24/7 Delivery", "Real-time Tracking", "Instant Confirmation"]
    },
    {
      icon: TruckIcon,
      title: "Fresh Delivery",
      description: "Receive perfectly chilled, vacuum-sealed premium meat at your doorstep",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-500 to-yellow-500",
      time: "Next Day",
      features: ["Temperature Controlled", "Hygienic Packaging", "Contactless Delivery"]
    }
  ];

  return (
    <div className="relative py-32 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm">Karachi's #1 Meat Delivery</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            How We Deliver{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the most premium meat delivery service in Karachi with our seamless 3-step process
          </p>
        </motion.div>

        {/* Main Process Flow */}
        <div className="relative">
          {/* Animated Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="hidden lg:block absolute top-1/4 left-20 right-20 h-1 bg-gradient-to-r from-red-500/50 via-orange-500/50 to-amber-500/50 rounded-full"
          />

          {/* Steps Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group"
              >
                {/* Step Number */}
                <motion.div
                  className={`absolute -top-4 -left-4 w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-20`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>

                {/* Main Card */}
                <motion.div
                  className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <motion.div
                    className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    
                    {/* Time Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      {step.time}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + featureIndex * 0.1 + 0.6 }}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl ${step.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute -bottom-4 -right-4 w-8 h-8 ${step.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Order
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <TruckIcon className="w-6 h-6" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-gray-400 mt-6 text-sm"
            >
              Serving all areas of Karachi with same-day delivery
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quick;