















"use client";

import { motion } from "framer-motion";
import {  FiPhone, FiClock, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp, FaSnapchatGhost, FaHamburger } from "react-icons/fa";
import { GiMeat, GiChopsticks, GiMeatCleaver } from "react-icons/gi";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
      
      {/* Hero Section with Glow */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex flex-col items-center justify-center text-center"
      >
        {/* Pulsating Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"
          />
        </div>

        {/* Floating Elements */}
        <GiMeat className="absolute text-white/15 text-[8rem] top-1/4 left-1/4 animate-float" />
        <GiChopsticks className="absolute text-white/20 text-7xl bottom-1/3 right-1/4 animate-float-delay" />
        <GiMeatCleaver className="absolute text-white/25 text-6xl top-1/3 right-1/3 animate-float-delay-2" />

        {/* Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
        >
          MEAT <span className="text-red-200">EMPIRE</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl"
        >
          <p className="text-lg md:text-2xl text-white font-medium tracking-wide">
            KALAPUL CSD • PREMIUM BUTCHERY • EST. 1995
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Section - Glassmorphic Card */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 -mt-24 relative z-30"
      >
        <div className="rounded-3xl shadow-xl overflow-hidden border border-red-100 backdrop-blur-xl bg-white/90">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Map */}
            <div className="relative h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.315461245046!2d67.04889607471577!3d24.85307314555439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d51273ebcb7%3A0xe49d27ece5b4fc6c!2sCSD%20(%20The%20Caring%20Store%20)!5e0!3m2!1sen!2s!4v1754841666191!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ filter: "contrast(110%) saturate(120%)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Info */}
            <div className="p-10">
              <h2 className="text-4xl font-bold mb-6 text-red-600">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <a href="tel:+923001234567" className="text-2xl font-bold text-red-600 hover:underline">
                      +92 300 123 4567
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div whileHover={{ scale: 1.03 }} className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiClock className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Hours</h3>
                    <p>
                      <span className="text-red-600">Mon-Fri:</span> 9AM - 10PM<br />
                      <span className="text-red-600">Sat-Sun:</span> 10AM - 11PM
                    </p>
                  </div>
                </motion.div>

                {/* Socials */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Find Us Online</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaWhatsapp size={24} />, link: "https://wa.me/923001234567", bg: "bg-green-500" },
                      { icon: <FiInstagram size={24} />, link: "https://instagram.com", bg: "bg-gradient-to-tr from-purple-500 to-pink-500" },
                      { icon: <FiFacebook size={24} />, link: "https://facebook.com", bg: "bg-blue-600" },
                      { icon: <FaSnapchatGhost size={24} />, link: "https://snapchat.com", bg: "bg-yellow-400 text-black" }
                    ].map((s, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ y: -5, scale: 1.1 }}
                        href={s.link}
                        target="_blank"
                        className={`${s.bg} p-4 rounded-full shadow-lg`}
                      >
                        {s.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Badges */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: "HALAL CERTIFIED", color: "bg-red-600", icon: <GiMeatCleaver /> },
            { text: "PREMIUM CUTS", color: "bg-red-500", icon: <GiMeat /> },
            { text: "24/7 DELIVERY", color: "bg-red-400", icon: <FaHamburger /> },
            { text: "AGED 21+ DAYS", color: "bg-red-300", icon: <GiChopsticks /> }
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`${badge.color} text-white py-6 px-4 rounded-xl text-center shadow-xl flex flex-col items-center`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <h3 className="text-lg font-bold">{badge.text}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Banner */}
      <div className="bg-red-600 py-12 text-center text-white relative overflow-hidden">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready for the Finest Cuts?
        </motion.h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/923001234567"
          className="inline-block px-10 py-4 bg-white text-red-600 rounded-full font-bold text-lg shadow-lg hover:bg-red-100 transition"
        >
          Order Now on WhatsApp
        </motion.a>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/923001234567"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg"
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>
    </div>
  );
};

export default ContactPage;









