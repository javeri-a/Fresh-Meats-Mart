



"use client"

import React from "react"
import Image from "next/image"
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 justify-center hover:scale-105 transition-transform duration-200">
              <Award size={18} />
              Premium Since 2010
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="text-red-600">Us</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting premium meat experiences with passion, quality, and trust.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border hover:shadow-md transition-all duration-200"
              >
                <feature.icon size={18} className="text-red-600" />
                <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Story */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-red-700">
              Our Story
            </h3>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Started as a small family butchery in 2010, today we are a trusted name for premium meat delivery.
                Our goal has always been simple: bring restaurant-quality meat to your home.
              </p>
              <p>
                Every cut is handpicked by expert butchers, ensuring what reaches your table is the same quality we serve our own families.
              </p>
              <p className="font-semibold text-gray-900">
                Trusted by thousands of households for weekly meals, BBQs, and celebrations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-4 border hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon size={24} className="text-red-600" />
                    <div className="text-2xl font-black text-red-600">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-sm hover:scale-105 transition-all duration-200 mt-6">
              Order Premium Meat
            </button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/abt.webp"
                alt="Butchers preparing premium meat"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xl font-bold mb-1">Master Butchers</div>
                <div className="text-white/90 text-sm">Crafting perfection since 2010</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs