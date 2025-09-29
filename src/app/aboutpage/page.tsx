




// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { 
//   Award, 
//   Truck, 
//   Leaf, 
//   Heart, 
//   Star, 
//   Shield,
//   Clock,
//   Users,
//   CheckCircle
// } from "lucide-react"


// const AboutUs = () => {
//   const containerRef = useRef(null)
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" })

//   const stats = [
//     { number: "13+", label: "Years Experience", icon: Award },
//     { number: "50K+", label: "Happy Customers", icon: Users },
//     { number: "100%", label: "Natural Products", icon: Leaf },
//     { number: "24h", label: "Fresh Delivery", icon: Clock }
//   ]

//   const values = [
//     {
//       title: "100% Natural",
//       desc: "No antibiotics. No hormones. Pure and fresh meat.",
//       icon: Leaf,
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       title: "Ethical Sourcing",
//       desc: "Humanely raised animals on grass and open pastures.",
//       icon: Heart,
//       color: "from-red-500 to-pink-500"
//     },
//     {
//       title: "Next-Day Delivery",
//       desc: "Freshly packed and delivered to your doorstep.",
//       icon: Truck,
//       color: "from-blue-500 to-cyan-500"
//     }
//   ]

//   const features = [
//     { icon: Shield, text: "Quality Guaranteed" },
//     { icon: Star, text: "Premium Selection" },
//     { icon: CheckCircle, text: "Freshness Verified" }
//   ]
 
//   return (
//    <section ref={containerRef} className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 py-20 md:py-32 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 ">
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-40"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-40"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.5, 0.3, 0.5],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Main Heading with Stagger Animation */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={isInView ? { scale: 1 } : { scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="inline-block mb-6"
//           >
//             <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
//               <Award size={18} />
//               Premium Since 2010
//             </div>
//           </motion.div>
          
//           <motion.h2
//             className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             About <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Us</span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           >
//             Crafting exceptional meat experiences with passion, quality, and unwavering commitment to excellence.
//           </motion.p>

//           {/* Features List */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-6 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <feature.icon size={18} className="text-red-600" />
//                 <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Content Grid with Enhanced Animations */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
//           {/* Story Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="space-y-8"
//           >
//             <div className="space-y-4">
//               <motion.h3
//                 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//               >
//                 Our Story
//               </motion.h3>
              
//               <motion.div
//                 className="space-y-4 text-gray-700 text-lg leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 0.8, delay: 1 }}
//               >
//                 <p>
//                   What started as a small family butchery in 2010 has blossomed into a trusted name synonymous with premium meat delivery. 
//                   Our journey began with a simple vision: to bring restaurant-quality meat directly to your doorstep.
//                 </p>
//                 <p>
//                   Every cut is meticulously handpicked by our master butchers, ensuring that what graces your table meets the exacting 
//                   standards we had proudly serve our own families.
//                 </p>
//                 <p className="font-semibold text-gray-900">
//                   Join thousands of households who trust us for their weekly meals, weekend BBQs, and special celebrations.
//                 </p>
//               </motion.div>
//             </div>

//             {/* Stats Grid */}
//             <motion.div
//               className="grid grid-cols-2 gap-6 mt-8"
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//             >
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
//                   whileHover={{ 
//                     scale: 1.05,
//                     y: -5,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   <div className="flex items-center gap-3 mb-2">
//                     <stat.icon size={24} className="text-red-600" />
//                     <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
//                       {stat.number}
//                     </div>
//                   </div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1.4 }}
//             >
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-3"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Order Premium Meat
//                   <motion.span
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <Truck size={20} />
//                   </motion.span>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 80 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
//             transition={{ duration: 1, delay: 0.7 }}
//           >
//             <motion.div
//               className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.5 }}
//           />
        
              
//               <img
//                 src="/abt.png"
//                 alt="Professional butchers preparing premium meat cuts"
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
//               {/* Floating Badge */}
//               <motion.div
//                 className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
//                 transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
//               >
//                 <Star size={16} className="text-yellow-500 fill-current" />
//                 <span className="font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent text-sm">
//                   Premium Quality
//                 </span>
//               </motion.div>

//               {/* Bottom Content */}
//               <div className="absolute bottom-6 left-6 text-white">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                   transition={{ duration: 0.6, delay: 1.4 }}
//                 >
//                   <div className="text-2xl font-bold mb-2">Master Butchers</div>
//                   <div className="text-white/80">Crafting perfection since 2010</div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Floating Elements */}
//             <motion.div
//               className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center"
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <Heart size={32} className="text-white" />
//             </motion.div>
//             <motion.div
//               className="absolute -top-6 -right-6 w-20 h-20 bg-red-400 rounded-2xl shadow-xl flex items-center justify-center"
//               animate={{
//                 y: [0, 15, 0],
//                 rotate: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 1
//               }}
//             >
//               <Shield size={28} className="text-white" />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Values Section */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.3
//               }
//             }
//           }}
//         >
//           {values.map((item, index) => (
//             <motion.div
//               key={index}
//               className="group relative"
//               variants={{
//                 hidden: { opacity: 0, y: 60 },
//                 visible: { 
//                   opacity: 1, 
//                   y: 0,
//                   transition: {
//                     duration: 0.8,
//                     ease: "easeOut"
//                   }
//                 }
//               }}
//             >
//               <motion.div
//                 className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 overflow-hidden"
//                 whileHover={{ 
//                   y: -10,
//                   transition: { duration: 0.3 }
//                 }}
//               >
//                 {/* Background Gradient on Hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
//                 <motion.div
//                   className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white`}
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotate: [0, -5, 5, 0],
//                     transition: { duration: 0.5 }
//                   }}
//                 >
//                   <item.icon size={28} />
//                 </motion.div>
                
//                 <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h4>
                
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Hover Border Effect */}
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
//                   <div className="absolute inset-[2px] rounded-3xl bg-white/80 backdrop-blur-sm" />
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AboutUs











"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);

  const features = [
    "Premium quality meat since 2010",
    "Expert butchers and hygienic process",
    "Same-day delivery across Karachi",
    "Trusted by thousands of customers",
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 py-20 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-200/40 to-orange-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 justify-center">
            <Award size={18} />
            Premium Since 2010
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Us
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting exceptional meat experiences with passion, quality, and
          unwavering commitment to excellence. We bring you premium graded meat
          with unmatched freshness and hygiene.
        </motion.p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.6 }}
            >
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Start Your Order
        </motion.button>
      </div>
    </section>
  );
}
