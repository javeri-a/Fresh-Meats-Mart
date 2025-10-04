




// components/Footer.js
"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope,FaRegHeart, } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-red-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-1/2 w-12 h-12 bg-white rounded-full"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-red-700">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="font-bold text-red-700 text-2xl">FM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Fresh Meat Mart</h3>
                <p className="text-red-200 font-semibold">Where Freshness Comes First</p>
              </div>
            </div>
            <p className="text-red-100 leading-relaxed text-lg">
              Your trusted partner for premium quality meats since 2010. We deliver farm-fresh, 
              carefully selected cuts right to your doorstep.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-red-700 transition-all duration-300 p-4 rounded-xl transform hover:-translate-y-1 shadow-lg border border-white/20"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-red-700 transition-all duration-300 p-4 rounded-xl transform hover:-translate-y-1 shadow-lg border border-white/20"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-red-700 transition-all duration-300 p-4 rounded-xl transform hover:-translate-y-1 shadow-lg border border-white/20"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform origin-left transition-transform duration-300 hover:scale-x-100 scale-x-75"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-red-100 hover:text-white transition-all duration-300 flex items-center group py-2 text-lg"
                  >
                    <span className="w-3 h-3 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-white/30 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start group hover:transform hover:-translate-x-1 transition-transform duration-300">
                <FaMapMarkerAlt className="text-white mt-1 mr-4 flex-shrink-0 text-lg" />
                <span className="text-red-100 group-hover:text-white transition-colors text-lg">123 Meat Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center group hover:transform hover:-translate-x-1 transition-transform duration-300">
                <FaPhone className="text-white mr-4 flex-shrink-0 text-lg" />
                <a href="tel:+11234567890" className="text-red-100 group-hover:text-white transition-colors text-lg">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center group hover:transform hover:-translate-x-1 transition-transform duration-300">
                <FaEnvelope className="text-white mr-4 flex-shrink-0 text-lg" />
                <a href="mailto:info@freshmeatmart.com" className="text-red-100 group-hover:text-white transition-colors text-lg">info@freshmeatmart.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-white/30 inline-block">Newsletter</h4>
            <p className="text-red-100 mb-6 text-lg">Subscribe for exclusive offers and updates</p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 text-white placeholder-red-200 transition-all duration-300 text-lg"
              />
              <button className="w-full bg-white text-red-700 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-red-900 border-t border-red-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-red-200 text-lg mb-4 md:mb-0 flex items-center">
              © {currentYear} Fresh Meat Mart. Made with <FaRegHeart className="text-white mx-2" /> for quality meat lovers.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-red-200 hover:text-white transition-all duration-300 text-lg font-medium hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-red-200 hover:text-white transition-all duration-300 text-lg font-medium hover:underline">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-red-200 hover:text-white transition-all duration-300 text-lg font-medium hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}