

"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

// SVG Components
const IslamicPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
    <path d="M50 0L61 35H39L50 0Z" fill="currentColor" />
    <path d="M50 100L39 65H61L50 100Z" fill="currentColor" />
    <path d="M0 50L35 61V39L0 50Z" fill="currentColor" />
    <path d="M100 50L65 39V61L100 50Z" fill="currentColor" />
  </svg>
);



interface AnimalIconProps {
  type: 'Cow' | 'Goat' | 'Camel';
}

const AnimalIcon = ({ type }: AnimalIconProps) => {
  const icons: Record<AnimalIconProps['type'], React.ReactElement> = {
    Cow: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8l4-4m0 0l4 4m-4-4v16m12-16l-4-4m0 0l-4 4m4-4v16M3 14h18M3 18h18M3 6h18"/>
      </svg>
    ),
    Goat: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-8-8h16M6 6l12 12M18 6L6 18"/>
      </svg>
    ),
    Camel: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18M5 12h14M3 6h18M3 18h18"/>
      </svg>
    )
  };
  
  return icons[type];
};

export default function QurbaniOrderPage() {
  const [order, setOrder] = useState({ name: "", phone: "", address: "", animal: "Cow", weight: "", payment: "Cash on Delivery" });

  const handleChange = (e:any) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 relative overflow-hidden">
      <IslamicPattern />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <motion.div 
              className="inline-block bg-gold-500 p-4 rounded-full shadow-lg"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 arabic-font">
            قربانی کا آرڈر
          </h1>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Start Your Order
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-700 mb-12 arabic-font">
            ہمارے قربانی پیکجز
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Premium Cow", 
                weight: "150-200kg", 
                price: "Rs. 200,000",
                features: ["Organic Feed", "Vet Certified", "24h Processing"]
              },
              { 
                name: "Healthy Goat", 
                weight: "30-40kg", 
                price: "Rs. 40,000",
                features: ["Grass Fed", "Disease Free", "Same-day Processing"]
              },
              { 
                name: "Large Camel", 
                weight: "300-400kg", 
                price: "Rs. 500,000",
                features: ["Premium Breed", "Full Inspection", "48h Processing"]
              },
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl group relative"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-20 h-20 text-red-100">
                    <path d="M28.9,-33.8C36.1,-24.3,39.5,-12.1,40.9,1.3C42.3,14.8,41.7,29.5,34.5,37.3C27.3,45.1,13.6,46,-1.1,47.5C-15.9,49,-31.8,51.1,-40.3,43.3C-48.8,35.5,-49.9,17.8,-49.7,0.8C-49.6,-16.3,-48.2,-32.6,-39.7,-42.1C-31.3,-51.6,-15.6,-54.3,-1.8,-52.5C12.1,-50.7,24.1,-44.4,28.9,-33.8Z" 
                      transform="translate(50 50)" 
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-red-600">
                    <AnimalIcon type={pkg.name.split(' ')[1]} />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">{pkg.name}</h3>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {pkg.weight}
                  </div>
                  <ul className="mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2 text-gray-600 justify-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-3xl font-bold text-red-600 mb-6">{pkg.price}</div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-200 rounded-full opacity-20"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-200 rounded-full opacity-20"></div>
            
            <h2 className="text-3xl font-bold text-red-700 mb-8 text-center arabic-font">
              آرڈر فارم
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Form fields same as before, but with improved styling */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all pl-12"
                    placeholder="Muhammad Ali"
                    required
                    onChange={handleChange}
                  />
                  <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>

              {/* Other form fields with similar icon enhancements */}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                Confirm Qurbani Order
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p className="mb-4 text-xl arabic-font">اللہ آپ کی قربانی قبول فرمائے</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-red-200 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-red-200 transition-colors">FAQs</a>
            <a href="#" className="hover:text-red-200 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}