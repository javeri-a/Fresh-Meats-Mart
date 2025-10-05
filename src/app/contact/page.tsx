


"use client";

import { memo } from "react";
import { FiPhone, FiClock, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp, FaSnapchatGhost, FaHamburger } from "react-icons/fa";
import { GiMeat, GiChopsticks, GiMeatCleaver } from "react-icons/gi";

// Memoize all components to prevent re-renders
const ContactPage = memo(function ContactPage() {
  const socialLinks = [
    { icon: <FaWhatsapp size={18} />, link: "https://wa.me/923001234567", bg: "bg-green-500" },
    { icon: <FiInstagram size={18} />, link: "https://instagram.com", bg: "bg-gradient-to-tr from-purple-500 to-pink-500" },
    { icon: <FiFacebook size={18} />, link: "https://facebook.com", bg: "bg-blue-600" },
    { icon: <FaSnapchatGhost size={18} />, link: "https://snapchat.com", bg: "bg-yellow-400 text-black" }
  ];

  const badges = [
    { text: "HALAL CERTIFIED", color: "bg-red-600", icon: <GiMeatCleaver /> },
    { text: "PREMIUM CUTS", color: "bg-red-500", icon: <GiMeat /> },
    { text: "24/7 DELIVERY", color: "bg-red-400", icon: <FaHamburger /> },
    { text: "AGED 21+ DAYS", color: "bg-red-300", icon: <GiChopsticks /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section - Static, no animations */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center text-center bg-red-600">
        <GiMeat className="absolute text-white/10 text-4xl top-20 left-10" />
        <GiChopsticks className="absolute text-white/15 text-3xl bottom-20 right-10" />

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 px-4">
          CONTACT <span className="text-red-200">US</span>
        </h1>

        <div className="mt-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
          <p className="text-sm md:text-lg text-white font-medium">
            KALAPUL CSD • PREMIUM BUTCHERY • EST. 1995
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 -mt-16">
        <div className="rounded-xl shadow-md overflow-hidden border border-red-100 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Map - Critical optimization */}
            <div className="relative h-56 lg:h-full min-h-[250px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.315461245046!2d67.04889607471577!3d24.85307314555439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d51273ebcb7%3A0xe49d27ece5b4fc6c!2sCSD%20(%20The%20Caring%20Store%20)!5e0!3m2!1sen!2s!4v1754841666191!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>

            {/* Contact Info */}
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-600">
                Get in Touch
              </h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <FiPhone className="text-red-600 text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Call Us</h3>
                    <a href="tel:+923001234567" className="text-lg font-bold text-red-600 hover:underline">
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <FiClock className="text-red-600 text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Hours</h3>
                    <p className="text-gray-700 text-sm">
                      <span className="text-red-600 font-medium">Mon-Fri:</span> 9AM - 10PM<br />
                      <span className="text-red-600 font-medium">Sat-Sun:</span> 10AM - 11PM
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="font-semibold text-sm mb-2">Find Us Online</h3>
                  <div className="flex space-x-2">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.bg} p-2 rounded-full shadow-sm hover:scale-105 transition-transform`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`${badge.color} text-white p-3 rounded-lg text-center shadow-sm flex flex-col items-center min-h-[100px] justify-center`}
            >
              <div className="text-xl mb-1">{badge.icon}</div>
              <h3 className="text-xs font-bold leading-tight">{badge.text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="bg-red-600 py-6 md:py-8 text-center text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3 px-4">
          Ready for the Finest Cuts?
        </h2>
        <a
          href="https://wa.me/923001234567"
          className="inline-block px-5 md:px-6 py-2 bg-white text-red-600 rounded-full font-bold text-sm shadow-sm hover:bg-red-50 transition-colors"
        >
          Order Now on WhatsApp
        </a>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/923001234567"
          className="bg-green-500 text-white p-2 rounded-full shadow-md block hover:scale-105 transition-transform"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </div>
  );
});

export default ContactPage;