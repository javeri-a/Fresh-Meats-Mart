









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
