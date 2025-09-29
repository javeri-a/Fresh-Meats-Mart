
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
