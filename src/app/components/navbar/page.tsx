

"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Add your logo image here */}
              <span className="text-2xl font-bold ml-2">FRESH MEAT MART</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
                Home
              </Link>

              {/* Shop Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600 flex items-center">
                  Shop
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute hidden group-hover:block bg-white text-red-700 min-w-[200px] rounded-md shadow-lg">
                  <Link href="/shop/beef" className="block px-4 py-2 text-sm hover:bg-red-50">
                    Beef
                  </Link>
                  <Link href="/shop/chicken" className="block px-4 py-2 text-sm hover:bg-red-50">
                    Chicken
                  </Link>
                  <Link href="/shop/lamb" className="block px-4 py-2 text-sm hover:bg-red-50">
                    Lamb
                  </Link>
                </div>
              </div>

              <Link href="/qurbani" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
                Qurbani
              </Link>
              <Link href="/recipes" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
                Recipes
              </Link>
              <Link href="/aboutpage" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
                About Us
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
                Contact
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-white rounded-lg px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="text-gray-800 outline-none w-32"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-red-700" />
            </div>

            <Link href="cart" className="flex items-center hover:bg-red-600 p-2 rounded-md">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1 bg-white text-red-700 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-red-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            {/* Mobile Shop Dropdown */}
            <div className="relative">
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Shop
              </button>
              <div className="pl-4">
                <Link href="/shop/beef" className="block px-3 py-2 text-sm">
                  Beef
                </Link>
                <Link href="/shop/chicken" className="block px-3 py-2 text-sm">
                  Chicken
                </Link>
                <Link href="/shop/lamb" className="block px-3 py-2 text-sm">
                  Lamb
                </Link>
              </div>
            </div>
            <Link href="/recipes" className="block px-3 py-2 rounded-md text-base font-medium">
              Recipes
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium">
              About Us
//             </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;