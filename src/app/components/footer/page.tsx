



"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaRegHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-700 text-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-3 shadow">
                <span className="font-bold text-red-700 text-2xl">FM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Fresh Meat Mart</h3>
                <p className="text-red-200 font-medium">
                  Where Freshness Comes First
                </p>
              </div>
            </div>
            <p className="text-red-100 leading-relaxed text-base">
              Your trusted partner for premium quality meats since 2010. We
              deliver farm-fresh, carefully selected cuts right to your
              doorstep.
            </p>
            <div className="flex space-x-3 mt-4">
              {[
                { href: "https://facebook.com", icon: <FaFacebook size={18} /> },
                { href: "https://twitter.com", icon: <FaTwitter size={18} /> },
                { href: "https://instagram.com", icon: <FaInstagram size={18} /> },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white hover:text-red-700 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-red-100 hover:text-white transition text-base"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1" />
                <span>123 Meat Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:info@freshmeatmart.com">
                  info@freshmeatmart.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-red-100 mb-4 text-base">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-red-700 py-3 rounded-lg font-bold hover:bg-red-50 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-900 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-red-200 text-sm">
          <p className="flex items-center mb-3 md:mb-0">
            © {currentYear} Fresh Meat Mart. Made with{" "}
            <FaRegHeart className="mx-1 text-white" /> for quality meat lovers.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
