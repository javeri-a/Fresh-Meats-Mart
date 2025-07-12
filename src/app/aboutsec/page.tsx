'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Meat Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat bg-[length:150px] bg-[url('/meat-pattern-light.svg')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/about.png"
              alt="Expert Butchers"
              width={800}
              height={600}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 right-8 bg-red-600/95 text-white px-8 py-4 rounded-2xl backdrop-blur-sm">
              <span className="block text-4xl font-bold">40+</span>
              <span className="block text-lg font-medium">Years Experience</span>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-red-600 font-semibold text-lg tracking-wider">
                TRADITION SINCE 1980
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                Crafting Meat Excellence <br />
                <span className="text-red-600">For Generations</span>
              </h2>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              For over four decades, our family-owned butcher shops have been dedicated to 
              preserving the art of traditional meat craftsmanship. Using time-honored 
              techniques combined with modern quality standards, we deliver premium cuts 
              that have satisfied generations of meat lovers.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Butchers Card */}
              <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                <h3 className="text-3xl font-bold text-red-600 mb-2">20+</h3>
                <p className="font-medium text-gray-800">Master Butchers</p>
                <span className="text-sm text-red-500">Certified Experts</span>
              </div>

              {/* Certification Card */}
              <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                <h3 className="text-3xl font-bold text-red-600 mb-2">100%</h3>
                <p className="font-medium text-gray-800">Quality Guarantee</p>
                <span className="text-sm text-red-500">Premium Meats</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                <Link href="/aboutpage">Discover Our Story →</Link>
              
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;