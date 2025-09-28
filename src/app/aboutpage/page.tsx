// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const AboutPage = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/about.png"
//             alt="Butcher Shop"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-red-900/40" />
//         </div>
        
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="relative z-10 max-w-7xl mx-auto px-4 text-center"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Crafting Meat Excellence <br />
//             <span className="text-red-300">Since 1980</span>
//           </h1>
//           <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-xl hover:bg-red-700 transition-colors">
//             Discover Our Legacy
//           </div>
//         </motion.div>
//       </section>

//       {/* History Timeline */}
//       <section className="py-24 bg-red-50 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Our Meat Journey
//             </h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeIn}
//               className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/state.png"
//                 alt="Original Shop"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white p-6">
//                 <h3 className="text-2xl font-bold">1980 - Humble Beginnings</h3>
//               </div>
//             </motion.div>

//             <div className="space-y-12">
//               {[
//                 {
//                   year: "1995",
//                   title: "First Expansion",
//                   content: "Opened 3 new locations across the city",
//                   image: "/1.png"
//                 },
//                 {
//                   year: "2010",
//                   title: "Organic Certification",
//                   content: "Received national organic certification",
//                   image: "/about.png"
//                 },
//                 {
//                   year: "2020",
//                   title: "Modern Facilities",
//                   content: "Built state-of-the-art processing plant",
//                   image: "/1.png"
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial="hidden"
//                   whileInView="visible"
//                   variants={fadeIn}
//                   className="flex gap-6 items-start"
//                 >
//                   <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={200}
//                       height={200}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       {item.year} - {item.title}
//                     </h3>
//                     <p className="text-gray-600 mt-2">{item.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Meet Our Master Butchers
//             </h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "John Carnelli",
//                 role: "Head Butcher",
//                 experience: "35+ Years",
//                 image: "/1.png"
//               },
//               {
//                 name: "Mike Tenderloin",
//                 role: "Meat Curator",
//                 experience: "28+ Years",
//                 image: "/about.png"
//               },
//               {
//                 name: "Sarah Brisket",
//                 role: "Quality Control",
//                 experience: "22+ Years",
//                 image: "/state.png"
//               },
//               {
//                 name: "Alex Porterhouse",
//                 role: "Operations Head",
//                 experience: "18+ Years",
//                 image: "/1.png"
//               }
//             ].map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={600}
//                   height={800}
//                   className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white p-6">
//                   <h3 className="text-2xl font-bold">{member.name}</h3>
//                   <p className="text-red-200">{member.role}</p>
//                   <p className="mt-2 font-medium">{member.experience}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-24 bg-red-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-16">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeIn}
//               className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden"
//             >
//               <Image
//                 src="/state.png"
//                 alt="Quality Control"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>

//             <div className="space-y-12">
//               <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
//                 <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
//                 <div className="w-24 h-1 bg-white" />
//               </motion.div>

//               {[
//                 {
//                   title: "Traditional Craftsmanship",
//                   icon: "🥩",
//                   content: "Preserving century-old butchering techniques"
//                 },
//                 {
//                   title: "Premium Quality",
//                   icon: "🌟",
//                   content: "Only USDA prime graded meats"
//                 },
//                 {
//                   title: "Sustainable Sourcing",
//                   icon: "🌱",
//                   content: "Ethical farming partnerships"
//                 }
//               ].map((value, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeIn}
//                   initial="hidden"
//                   whileInView="visible"
//                   className="flex gap-4 items-start"
//                 >
//                   <span className="text-4xl">{value.icon}</span>
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
//                     <p className="text-red-100">{value.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;















// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"

// const AboutUs = () => {
//   const containerRef = useRef(null)
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" })

//   const stats = [
//     { number: "13+", label: "Years Experience" },
//     { number: "50K+", label: "Happy Customers" },
//     { number: "100%", label: "Natural Products" },
//     { number: "24h", label: "Fresh Delivery" }
//   ]

//   const values = [
//     {
//       title: "100% Natural",
//       desc: "No antibiotics. No hormones. Pure and fresh meat.",
//       icon: "🥩",
//       color: "from-red-500 to-orange-500"
//     },
//     {
//       title: "Ethical Sourcing",
//       desc: "Humanely raised animals on grass and open pastures.",
//       icon: "🌱",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       title: "Next-Day Delivery",
//       desc: "Freshly packed and delivered to your doorstep.",
//       icon: "🚚",
//       color: "from-blue-500 to-cyan-500"
//     }
//   ]

//   return (
//     <section ref={containerRef} className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 py-20 md:py-32 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
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
//             <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
//               🥩 Premium Since 2010
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
//                   standards we'd proudly serve our own families.
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
//                   <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
//                     {stat.number}
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
//                 className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Order Premium Meat
//                   <motion.span
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     →
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
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1602872030491-461d43b5d13c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                 alt="Professional butchers preparing premium meat cuts"
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
//               {/* Floating Badge */}
//               <motion.div
//                 className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
//                 transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
//               >
//                 <span className="font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent text-sm">
//                   👑 Premium Quality
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
//               className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl shadow-xl"
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//             <motion.div
//               className="absolute -top-6 -right-6 w-20 h-20 bg-red-400 rounded-2xl shadow-xl"
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
//             />
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
//                   className="text-5xl mb-6 inline-block"
//                   whileHover={{ 
//                     scale: 1.2,
//                     rotate: [0, -10, 10, 0],
//                     transition: { duration: 0.5 }
//                   }}
//                 >
//                   {item.icon}
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






"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Award, 
  Truck, 
  Leaf, 
  Heart, 
  Star, 
  Shield,
  Clock,
  Users,
  CheckCircle
} from "lucide-react"

const AboutUs = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const stats = [
    { number: "13+", label: "Years Experience", icon: Award },
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "100%", label: "Natural Products", icon: Leaf },
    { number: "24h", label: "Fresh Delivery", icon: Clock }
  ]

  const values = [
    {
      title: "100% Natural",
      desc: "No antibiotics. No hormones. Pure and fresh meat.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ethical Sourcing",
      desc: "Humanely raised animals on grass and open pastures.",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Next-Day Delivery",
      desc: "Freshly packed and delivered to your doorstep.",
      icon: Truck,
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const features = [
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: Star, text: "Premium Selection" },
    { icon: CheckCircle, text: "Freshness Verified" }
  ]

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-40"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading with Stagger Animation */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
              <Award size={18} />
              Premium Since 2010
            </div>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Us</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting exceptional meat experiences with passion, quality, and unwavering commitment to excellence.
          </motion.p>

          {/* Features List */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon size={18} className="text-red-600" />
                <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h3
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Our Story
              </motion.h3>
              
              <motion.div
                className="space-y-4 text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p>
                  What started as a small family butchery in 2010 has blossomed into a trusted name synonymous with premium meat delivery. 
                  Our journey began with a simple vision: to bring restaurant-quality meat directly to your doorstep.
                </p>
                <p>
                  Every cut is meticulously handpicked by our master butchers, ensuring that what graces your table meets the exacting 
                  standards we'd proudly serve our own families.
                </p>
                <p className="font-semibold text-gray-900">
                  Join thousands of households who trust us for their weekly meals, weekend BBQs, and special celebrations.
                </p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon size={24} className="text-red-600" />
                    <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Order Premium Meat
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Truck size={20} />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.div
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/abt.png"
                alt="Professional butchers preparing premium meat cuts"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              >
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent text-sm">
                  Premium Quality
                </span>
              </motion.div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="text-2xl font-bold mb-2">Master Butchers</div>
                  <div className="text-white/80">Crafting perfection since 2010</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={32} className="text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-red-400 rounded-2xl shadow-xl flex items-center justify-center"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Shield size={28} className="text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 overflow-hidden"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <item.icon size={28} />
                </motion.div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-3xl bg-white/80 backdrop-blur-sm" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs