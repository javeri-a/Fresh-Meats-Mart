// components/ProcessSection.js
"use client"
import { motion } from 'framer-motion';
import { ShoppingCartIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';

const Quick = () => {
  const steps = [
    {
      icon: ShoppingCartIcon,
      title: "Select Cuts",
      description: "Choose from premium graded meats",
      color: "from-red-600 to-red-500",
    },
    {
      icon: ClockIcon,
      title: "Schedule",
      description: "Pick delivery time & payment",
      color: "from-red-500 to-red-400",
    },
    {
      icon: TruckIcon,
      title: "Receive",
      description: "Fresh delivery in sealed packaging",
      color: "from-red-400 to-red-300",
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      {/* Floating background circles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-red-100/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400"
        >
          Our Circular Perfection
        </motion.h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Animated connector line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.2 
              }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              {/* Main circular container */}
              <motion.div 
                className={`w-48 h-48 rounded-full p-8 flex flex-col items-center justify-center 
                  bg-gradient-to-br ${step.color} shadow-2xl shadow-red-100/50
                  hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {/* Icon container */}
                <div className="mb-4 p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white font-semibold text-center">{step.title}</h3>
              </motion.div>

              {/* Description bubble */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg max-w-xs text-center"
              >
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="hidden md:flex justify-center gap-4 mt-12">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-red-300 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quick;