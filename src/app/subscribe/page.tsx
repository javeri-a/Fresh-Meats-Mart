import { motion } from 'framer-motion';
import Image from 'next/image';

const Newsletters = () => {
  return (
    <div className="relative bg-red-600 overflow-hidden py-16 md:py-24 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/about.png')] bg-repeat"></div>
      </div>
      
      {/* Meat Images */}
      <div className="absolute left-0 top-1/4 w-1/3 max-w-xs opacity-80">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/steak1.png"
            alt="Premium steak"
            width={400}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>
      
      <div className="absolute right-0 top-1/3 w-1/3 max-w-xs opacity-80">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/minch1.png"
            alt="Grilled meat"
            width={400}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            SUBSCRIBE TO RECEIVE
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <h3 className="text-3xl md:text-5xl font-light text-white mb-6">
            WEEKLY UPDATES
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto">
            Get exclusive offers, grilling tips, recipes and all the latest updates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-red-600 rounded-lg shadow-xl p-6 md:p-8"
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white text-bold mb-1">
                Email address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletters;