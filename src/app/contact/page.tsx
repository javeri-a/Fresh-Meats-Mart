// "use client";

// import { motion } from "framer-motion";
// import { FiMapPin, FiPhone, FiClock, FiInstagram, FiFacebook, FiMessageSquare } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative bg-gradient-to-br from-red-700 to-red-900 py-24 text-white overflow-hidden"
//       >
//         {/* Animated Blood Cells (Background) */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{
//                 x: [0, 100, 0],
//                 y: [0, 50, 0],
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 15 + Math.random() * 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute rounded-full bg-red-400"
//               style={{
//                 width: `${5 + Math.random() * 10}px`,
//                 height: `${5 + Math.random() * 10}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             FIND YOUR MEAT MASTER
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-xl md:text-2xl max-w-3xl mx-auto"
//           >
//             Premium cuts await at our Kalapul CSD location
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Location Map */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="container mx-auto px-4 py-20"
//       >
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Google Map Embed */}
//             <div className="h-96 lg:h-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132887!2d-73.987844924525!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="filter grayscale hover:grayscale-0 transition-all duration-500"
//               />
//             </div>

//             {/* Location Info */}
//             <div className="p-10 lg:p-14">
//               <div className="flex items-center mb-8">
//                 <div className="bg-red-100 p-3 rounded-full mr-4">
//                   <FiMapPin className="text-red-600 text-2xl" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">Our Butchery</h2>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
//                   <p className="text-gray-700">
//                     Kalapul CSD, Meat District<br />
//                     Near Premium Cuts Plaza<br />
//                     Karachi, Pakistan
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
//                   <p className="text-gray-700 flex items-center">
//                     <FiPhone className="mr-2 text-red-600" />
//                     +92 300 1234567
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
//                   <div className="space-y-2">
//                     <p className="text-gray-700 flex items-center">
//                       <FiClock className="mr-2 text-red-600" />
//                       Mon-Fri: 9AM - 9PM
//                     </p>
//                     <p className="text-gray-700 flex items-center">
//                       <FiClock className="mr-2 text-red-600" />
//                       Sat-Sun: 10AM - 8PM
//                     </p>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="pt-4">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
//                   <div className="flex space-x-4">
//                     <motion.a
//                       whileHover={{ y: -3 }}
//                       href="https://facebook.com"
//                       target="_blank"
//                       className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors"
//                     >
//                       <FiFacebook size={20} />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ y: -3 }}
//                       href="https://instagram.com"
//                       target="_blank"
//                       className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors"
//                     >
//                       <FiInstagram size={20} />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ y: -3 }}
//                       href="https://wa.me/923001234567"
//                       target="_blank"
//                       className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-green-100 hover:text-green-600 transition-colors"
//                     >
//                       <FaWhatsapp size={20} />
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Premium Butcher Experience */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-50 py-20"
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-gray-900 mb-4"
//             >
//               WHY CHOOSE CYBER BUTCHER?
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               We redefine meat excellence with cutting-edge techniques and premium quality
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "CRYO-SEALED FRESHNESS",
//                 description: "Our meats are flash-frozen at peak freshness using space-age cryo-technology",
//                 emoji: "❄️"
//               },
//               {
//                 title: "EXPERT BUTCHERY",
//                 description: "Master butchers with 20+ years experience hand-cut every piece",
//                 emoji: "🔪"
//               },
//               {
//                 title: "24/7 DELIVERY",
//                 description: "Get premium cuts delivered anytime with our temperature-controlled fleet",
//                 emoji: "🚚"
//               }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
//               >
//                 <div className="text-4xl mb-4">{feature.emoji}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default ContactPage;





// "use client";

// import { motion } from "framer-motion";
// import { FiMapPin, FiPhone, FiClock, FiInstagram, FiFacebook } from "react-icons/fi";
// import { FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
// import { RiSteakFill } from "react-icons/ri";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* 3D Blood Splatter Hero */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
//       >
//         {/* Animated Meat Texture Background */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/meat.png')]"></div>
//         </div>

//         {/* Floating Meat Cuts */}
//         <RiSteakFill className="absolute text-red-900/30 text-9xl top-1/4 left-1/4 animate-float" />
//         <RiSteakFill className="absolute text-red-800/40 text-7xl bottom-1/3 right-1/4 animate-float-delay" />
//         <RiSteakFill className="absolute text-red-700/50 text-6xl top-1/3 right-1/3 animate-float-delay-2" />

//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, type: "spring" }}
//             className="text-6xl md:text-8xl font-extrabold mb-6 text-white"
//           >
//             <span className="text-red-500">///</span> MEAT EMPIRE <span className="text-red-500">///</span>
//           </motion.h1>
          
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="inline-block px-8 py-4 bg-red-600/90 backdrop-blur-sm rounded-full"
//           >
//             <p className="text-xl md:text-2xl text-white font-medium tracking-wider">
//               KALAPUL CSD • PREMIUM BUTCHERY • EST. 1995
//             </p>
//           </motion.div>
//         </div>

//         {/* Blood Drip Decoration */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20"></div>
//       </motion.section>

//       {/* Holographic Contact Card */}
//       <motion.section 
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="container mx-auto px-4 -mt-32 relative z-30"
//       >
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* 3D Map View */}
//             <div className="relative h-96 lg:h-full bg-gray-900">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.367512771337!2d67.0281743150028!3d24.84187298407193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dbbdc1879a1%3A0x7d9a1a3b6b7b8b9c!2sKalapul%20CSD!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0"
//                 style={{ filter: "sepia(50%) hue-rotate(320deg) contrast(120%)" }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <h3 className="text-2xl font-bold flex items-center">
//                   <FiMapPin className="mr-2 text-red-400" />
//                   OUR SANCTUARY
//                 </h3>
//                 <p className="text-red-200">Kalapul CSD, Meat District</p>
//               </div>
//             </div>

//             {/* Neon Contact Info */}
//             <div className="p-10 lg:p-14 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//               <div className="mb-10">
//                 <h2 className="text-4xl font-bold mb-2 text-red-400">CONTACT</h2>
//                 <div className="h-1 w-20 bg-red-500 mb-6"></div>
//                 <p className="text-gray-300">For the finest cuts in Karachi</p>
//               </div>

//               <div className="space-y-8">
//                 {/* Phone */}
//                 <div className="flex items-start">
//                   <div className="bg-red-500/20 p-3 rounded-full mr-4">
//                     <FiPhone className="text-red-400 text-xl" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">CALL THE BUTCHER</h3>
//                     <a href="tel:+923001234567" className="text-2xl font-bold hover:text-red-400 transition-colors">
//                       +92 300 123 4567
//                     </a>
//                   </div>
//                 </div>

//                 {/* Hours */}
//                 <div className="flex items-start">
//                   <div className="bg-red-500/20 p-3 rounded-full mr-4">
//                     <FiClock className="text-red-400 text-xl" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">SACRIFICE HOURS</h3>
//                     <p className="text-lg">
//                       <span className="text-red-400">Mon-Fri:</span> 9AM - 10PM<br />
//                       <span className="text-red-400">Weekends:</span> 10AM - 11PM
//                     </p>
//                   </div>
//                 </div>

//                 {/* Social Media */}
//                 <div className="pt-4">
//                   <h3 className="text-xl font-semibold mb-4">HUNT US ONLINE</h3>
//                   <div className="flex space-x-4">
//                     <motion.a
//                       whileHover={{ y: -5 }}
//                       href="https://wa.me/923001234567"
//                       target="_blank"
//                       className="bg-green-600 p-4 rounded-full text-white hover:bg-green-700 transition-all shadow-lg"
//                     >
//                       <FaWhatsapp size={24} />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ y: -5 }}
//                       href="https://instagram.com"
//                       target="_blank"
//                       className="bg-gradient-to-tr from-purple-600 to-pink-600 p-4 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
//                     >
//                       <FiInstagram size={24} />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ y: -5 }}
//                       href="https://facebook.com"
//                       target="_blank"
//                       className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-700 transition-all shadow-lg"
//                     >
//                       <FiFacebook size={24} />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ y: -5 }}
//                       href="https://snapchat.com"
//                       target="_blank"
//                       className="bg-yellow-400 p-4 rounded-full text-black hover:bg-yellow-500 transition-all shadow-lg"
//                     >
//                       <FaSnapchatGhost size={24} />
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Meat Quality Badges */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="container mx-auto px-4 py-20"
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { text: "HALAL CERTIFIED", color: "bg-green-600" },
//             { text: "PREMIUM CUTS", color: "bg-red-600" },
//             { text: "24/7 DELIVERY", color: "bg-blue-600" },
//             { text: "AGED 21+ DAYS", color: "bg-amber-600" }
//           ].map((badge, i) => (
//             <motion.div
//               key={i}
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className={`${badge.color} text-white py-6 px-4 rounded-xl text-center shadow-xl`}
//             >
//               <h3 className="text-xl font-bold tracking-wider">{badge.text}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Butcher's Promise */}
//       <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
//         {/* Blood Splatter Effect */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blood.png')]"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <RiSteakFill className="text-red-500 text-6xl mx-auto mb-6" />
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               THE <span className="text-red-500">CYBER BUTCHER</span> PROMISE
//             </h2>
//             <p className="text-xl text-gray-300 mb-10">
//               Every cut is hand-selected, aged to perfection, and delivered with the precision of a master butcher.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-12 py-4 bg-red-600 hover:bg-red-700 rounded-full text-xl font-bold shadow-lg transition-all"
//             >
//               ORDER NOW VIA WHATSAPP
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;












"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp, FaSnapchatGhost, FaHamburger } from "react-icons/fa";
import { GiMeat, GiChopsticks, GiMeatCleaver } from "react-icons/gi";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 3D Blood Splatter Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated Meat Texture Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/meat.png')]"></div>
        </div>

        {/* Floating Meat Elements */}
        <GiMeat className="absolute text-red-900/30 text-9xl top-1/4 left-1/4 animate-float" />
        <GiChopsticks className="absolute text-red-800/40 text-7xl bottom-1/3 right-1/4 animate-float-delay" />
        <GiMeatCleaver className="absolute text-red-700/50 text-6xl top-1/3 right-1/3 animate-float-delay-2" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-6xl md:text-8xl font-extrabold mb-6 text-white"
          >
            <span className="text-red-500">///</span> MEAT EMPIRE <span className="text-red-500">///</span>
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-8 py-4 bg-red-600/90 backdrop-blur-sm rounded-full"
          >
            <p className="text-xl md:text-2xl text-white font-medium tracking-wider">
              KALAPUL CSD • PREMIUM BUTCHERY • EST. 1995
            </p>
          </motion.div>
        </div>

        {/* Blood Drip Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20"></div>
      </motion.section>

      {/* Holographic Contact Card */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 -mt-32 relative z-30"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* 3D Map View */}
            <div className="relative h-96 lg:h-full bg-gray-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.367512771337!2d67.0281743150028!3d24.84187298407193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dbbdc1879a1%3A0x7d9a1a3b6b7b8b9c!2sKalapul%20CSD!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ filter: "sepia(50%) hue-rotate(320deg) contrast(120%)" }}
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center">
                  <FiMapPin className="mr-2 text-red-400" />
                  OUR SANCTUARY
                </h3>
                <p className="text-red-200">Kalapul CSD, Meat District</p>
              </div>
            </div>

            {/* Neon Contact Info */}
            <div className="p-10 lg:p-14 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="mb-10">
                <h2 className="text-4xl font-bold mb-2 text-red-400">CONTACT</h2>
                <div className="h-1 w-20 bg-red-500 mb-6"></div>
                <p className="text-gray-300">For the finest cuts in Karachi</p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-3 rounded-full mr-4">
                    <FiPhone className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">CALL THE BUTCHER</h3>
                    <a href="tel:+923001234567" className="text-2xl font-bold hover:text-red-400 transition-colors">
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-3 rounded-full mr-4">
                    <FiClock className="text-red-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">SACRIFICE HOURS</h3>
                    <p className="text-lg">
                      <span className="text-red-400">Mon-Fri:</span> 9AM - 10PM<br />
                      <span className="text-red-400">Weekends:</span> 10AM - 11PM
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">HUNT US ONLINE</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://wa.me/923001234567"
                      target="_blank"
                      className="bg-green-600 p-4 rounded-full text-white hover:bg-green-700 transition-all shadow-lg"
                    >
                      <FaWhatsapp size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://instagram.com"
                      target="_blank"
                      className="bg-gradient-to-tr from-purple-600 to-pink-600 p-4 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                      <FiInstagram size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://facebook.com"
                      target="_blank"
                      className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-700 transition-all shadow-lg"
                    >
                      <FiFacebook size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://snapchat.com"
                      target="_blank"
                      className="bg-yellow-400 p-4 rounded-full text-black hover:bg-yellow-500 transition-all shadow-lg"
                    >
                      <FaSnapchatGhost size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Meat Quality Badges */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: "HALAL CERTIFIED", color: "bg-green-600", icon: <GiMeatCleaver className="mx-auto mb-2" /> },
            { text: "PREMIUM CUTS", color: "bg-red-600", icon: <GiMeat className="mx-auto mb-2" /> },
            { text: "24/7 DELIVERY", color: "bg-blue-600", icon: <FaHamburger className="mx-auto mb-2" /> },
            { text: "AGED 21+ DAYS", color: "bg-amber-600", icon: <GiChopsticks className="mx-auto mb-2" /> }
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${badge.color} text-white py-6 px-4 rounded-xl text-center shadow-xl flex flex-col items-center`}
            >
              <div className="text-3xl">
                {badge.icon}
              </div>
              <h3 className="text-xl font-bold tracking-wider">{badge.text}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Butcher's Promise */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        {/* Blood Splatter Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blood.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <GiMeat className="text-red-500 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              THE <span className="text-red-500">CYBER BUTCHER</span> PROMISE
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Every cut is hand-selected, aged to perfection, and delivered with the precision of a master butcher.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-red-600 hover:bg-red-700 rounded-full text-xl font-bold shadow-lg transition-all flex items-center mx-auto"
            >
              <FaWhatsapp className="mr-2" /> ORDER NOW VIA WHATSAPP
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/923001234567"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>
    </div>
  );
};

export default ContactPage;