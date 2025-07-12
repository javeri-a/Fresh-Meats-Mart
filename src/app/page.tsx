

"use client";
// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';
import { FiTruck, FiClock, FiShield, FiShoppingCart, FiPhoneCall } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import { div } from 'framer-motion/client';

import Script from 'next/script';
import Quick from './quick/page';
import ReviewsSection from './revi/page';
import Newsletter from './newsletter/page';
import StatisticsSection from './experienced/page';
import AboutSection from './aboutsec/page';
import WhyChooseUs from './whychooseus/page';
import MeatProductListingPage from './prouctsCard/page';

export default function HeroSec() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <div>
    <section className="bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.div 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 
                shadow-lg hover:shadow-xl transition-shadow duration-300">
                🚚 Fresh Daily Delivery
                <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Premium Quality
              </span>
              <br />
              <span className="inline-block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
                Meat & Poultry
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 font-medium"
              transition={{ delay: 0.4 }}
            >
              🏆 Award-Winning Butchers • 🧊 Flash-Frozen Freshness • 
              🚀 Instant Delivery
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/order" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl
                  text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300
                  flex items-center justify-center gap-3 group"
              >
                <FiShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                Order Now
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-red-600 bg-white text-red-600 px-8 py-4 
                  rounded-xl text-lg font-bold hover:bg-red-50 hover:border-red-700 
                  transition-all duration-300 flex items-center justify-center gap-3 group
                  hover:shadow-xl"
              >
                <FiPhoneCall className="w-6 h-6 group-hover:animate-ring" />
                Instant Support
              </Link>
            </motion.div>

            {/* USP Points */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <FiTruck className="w-8 h-8" />, text: "90-Min Delivery", color: "bg-red-100" },
                { icon: <FiClock className="w-8 h-8" />, text: "24/7 Service", color: "bg-orange-100" },
                { icon: <FiShield className="w-8 h-8" />, text: "Quality Guarantee", color: "bg-amber-100" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`p-4 rounded-xl ${item.color} hover:shadow-xl cursor-pointer 
                    border border-transparent hover:border-red-200 transition-all duration-300`}
                >
                  <div className="text-red-600 mb-3">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-800">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl 
              border-8 border-white hover:shadow-3xl transition-all duration-500
              transform hover:rotate-1 hover:scale-105 group"
          >
            <Image
              src="/image.png"
              alt="Premium Meat Selection"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            
            {/* Animated Floating Badge */}
            <motion.div 
              className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-xl
                flex items-center gap-3"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-black text-gray-800">LIVE INVENTORY</span>
            </motion.div>

            {/* Floating Price Tags */}
            <div className="absolute bottom-6 left-6 space-y-4">
              {[
                { text: "Ribeye", price: "$24.99", delay: 0 },
                { text: "Chicken", price: "$12.99", delay: 0.2 },
                { text: "Bacon", price: "$8.99", delay: 0.4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + item.delay, type: 'spring' }}
                  className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md"
                >
                  <span className="font-bold text-red-600">{item.price}</span>
                  <span className="text-sm text-gray-600 ml-2">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent z-20"></div>
      <div className="hidden md:block absolute -bottom-32 left-0 w-full h-64 bg-red-600 
        transform skew-y-3 origin-top-left opacity-10"></div>
     
    </section>
    
       <div>
            

            {/* Tidio Chatbot Script */}
            <Script
                src="//code.tidio.co/jnvlar7ejktx0t2rjosp2a5bk1yenbkk.js"
                strategy="lazyOnload"
            />
        </div>
        <AboutSection/>
        <MeatProductListingPage/>
        <Quick/>
        <WhyChooseUs/>
        <Newsletter/>
        <StatisticsSection/>
        < ReviewsSection/>
    </div>
  );
}