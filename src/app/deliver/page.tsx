




"use client"

import React from "react"
import Image from "next/image"
import { FaHeart, FaShieldAlt, FaTruck, FaLeaf } from "react-icons/fa"

const MeatDeliveryHero = () => {
  const features = [
    { icon: <FaLeaf className="w-5 h-5" />, text: "100% Natural, Humanely Raised" },
    { icon: <FaShieldAlt className="w-5 h-5" />, text: "Antibiotic & Hormone Free" },
    { icon: <FaHeart className="w-5 h-5" />, text: "Grass-Fed & Pasture-Raised" },
    { icon: <FaTruck className="w-5 h-5" />, text: "Same Day Delivery" }
  ]

  return (
    <section className="relative bg-white border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Content Side */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
              PREMIUM QUALITY
            </div>

            {/* Headings */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              <span className="text-red-600 block">Premium Quality</span>
              <span className="block">Meat Delivery</span>
            </h1>

            <div className="w-16 h-1 bg-red-600 rounded-full mb-6 mx-auto lg:mx-0"></div>

            <p className="text-lg text-gray-700 font-medium mb-8 max-w-md mx-auto lg:mx-0">
              Farm-fresh meat delivered to your doorstep with care and quality guarantee
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 border border-red-100"
                >
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 shadow-sm hover:shadow-md flex items-center justify-center">
                <FaTruck className="w-4 h-4 mr-2" />
                ORDER NOW
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center">
                <FaHeart className="w-4 h-4 mr-2" />
                OUR STORY
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Quality Certified</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/DEL.png"
              alt="Premium quality meats display"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Image Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-bold text-sm">Since 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeatDeliveryHero