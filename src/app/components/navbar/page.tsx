



// "use client"
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { 
//   ShoppingCartIcon, 
//   MagnifyingGlassIcon,
//   UserIcon,
//   PhoneIcon,
//   InformationCircleIcon
// } from '@heroicons/react/24/outline';
// import { 
//   XMarkIcon,
//   Bars3Icon,
//   ChevronDownIcon 
// } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const shopCategories = [
//     { name: 'Beef', href: '/meatProduct', description: 'Premium Beef Cuts' },
//     { name: 'Chicken', href: '/chickenProducts', description: 'Fresh Chicken' },
//     { name: 'Goat', href: '/goatProducts', description: 'Quality Goat Meat' },
//     { name: 'Lamb', href: '/lamb', description: 'Tender Lamb Cuts' },
//     { name: 'Seafood', href: '/seafood', description: 'Fresh Seafood' },
//     { name: 'Combo Packs', href: '/combos', description: 'Special Bundles' }
//   ];

//   return (
//     <>
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-red-900/10 border-b border-red-100' 
//           : 'bg-gradient-to-r from-red-700 to-red-800'
//       }`}>
//         {/* Top Announcement Bar */}
//         <div className="bg-red-900 text-white py-2 text-center text-sm">
//           <div className="max-w-7xl mx-auto px-4">
//             🚚 <strong>Free Delivery</strong> on orders above $50 | ⭐ Premium Quality Guaranteed
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo Section */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="flex items-center space-x-3 group">
//                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
//                   isScrolled ? 'bg-red-700' : 'bg-white'
//                 }`}>
//                   <span className={`font-bold text-xl ${
//                     isScrolled ? 'text-white' : 'text-red-700'
//                   }`}>FM</span>
//                 </div>
//                 <div>
//                   <span className={`text-2xl font-bold transition-colors duration-300 ${
//                     isScrolled ? 'text-red-700' : 'text-white'
//                   }`}>
//                     Fresh Meat Mart
//                   </span>
//                   <p className={`text-xs transition-colors duration-300 ${
//                     isScrolled ? 'text-red-600' : 'text-red-100'
//                   }`}>
//                     Premium Quality Meats
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:block">
//               <div className="ml-12 flex items-center space-x-1">
//                 <Link 
//                   href="/" 
//                   className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
//                     isScrolled 
//                       ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
//                       : 'text-white hover:bg-white/10'
//                   }`}
//                 >
//                   Home
//                 </Link>

//                 {/* Shop Dropdown */}
//                 <div 
//                   className="relative group"
//                   onMouseEnter={() => setActiveDropdown('shop')}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <button className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-1 ${
//                     isScrolled 
//                       ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
//                       : 'text-white hover:bg-white/10'
//                   }`}>
//                     <span>Shop</span>
//                     <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${
//                       activeDropdown === 'shop' ? 'rotate-180' : ''
//                     }`} />
//                   </button>
                  
//                   {/* Mega Dropdown */}
//                   <div className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-red-100 transition-all duration-300 transform origin-top ${
//                     activeDropdown === 'shop' 
//                       ? 'opacity-100 scale-100 translate-y-0' 
//                       : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
//                   }`}>
//                     <div className="p-6">
//                       <h3 className="text-lg font-bold text-gray-900 mb-4">Our Products</h3>
//                       <div className="grid grid-cols-2 gap-4">
//                         {shopCategories.map((category) => (
//                           <Link
//                             key={category.name}
//                             href={category.href}
//                             className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 transition-all duration-300"
//                           >
//                             <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
//                               <span className="text-red-700 group-hover:text-white font-bold text-sm">
//                                 {category.name.charAt(0)}
//                               </span>
//                             </div>
//                             <div>
//                               <div className="font-semibold text-gray-900 group-hover:text-red-700">
//                                 {category.name}
//                               </div>
//                               <div className="text-xs text-gray-500">
//                                 {category.description}
//                               </div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <Link 
//                   href="/aboutpage" 
//                   className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
//                     isScrolled 
//                       ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
//                       : 'text-white hover:bg-white/10'
//                   }`}
//                 >
//                   About Us
//                 </Link>

//                 <Link 
//                   href="/contact" 
//                   className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
//                     isScrolled 
//                       ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
//                       : 'text-white hover:bg-white/10'
//                   }`}
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="flex items-center space-x-4">
//               {/* Search Bar */}
//               <div className={`hidden lg:flex items-center rounded-2xl px-4 py-2 transition-all duration-300 ${
//                 isScrolled 
//                   ? 'bg-red-50 border border-red-200' 
//                   : 'bg-white/20 backdrop-blur-sm'
//               }`}>
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   className={`bg-transparent outline-none w-40 transition-colors duration-300 ${
//                     isScrolled ? 'text-gray-700 placeholder-gray-500' : 'text-white placeholder-red-100'
//                   }`}
//                 />
//                 <MagnifyingGlassIcon className={`h-5 w-5 transition-colors duration-300 ${
//                   isScrolled ? 'text-red-700' : 'text-white'
//                 }`} />
//               </div>

//               {/* User Account */}
//               <button className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
//                 isScrolled 
//                   ? 'hover:bg-red-50 text-gray-700' 
//                   : 'hover:bg-white/10 text-white'
//               }`}>
//                 <UserIcon className="h-6 w-6" />
//               </button>

//               {/* Shopping Cart */}
//               <Link 
//                 href="/cart" 
//                 className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 hover:scale-105 relative ${
//                   isScrolled 
//                     ? 'hover:bg-red-50 text-gray-700' 
//                     : 'hover:bg-white/10 text-white'
//                 }`}
//               >
//                 <ShoppingCartIcon className="h-6 w-6" />
//                 <span className={`absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold shadow-lg ${
//                   isScrolled ? 'bg-red-700' : 'bg-white text-red-700'
//                 }`}>
//                   3
//                 </span>
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
//                   isScrolled 
//                     ? 'text-gray-700 hover:bg-red-50' 
//                     : 'text-white hover:bg-white/10'
//                 }`}
//               >
//                 <Bars3Icon className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div className={`fixed inset-0 z-50 transform transition-transform duration-500 ${
//         isOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         {/* Backdrop */}
//         <div 
//           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)}
//         />
        
//         {/* Sidebar Panel */}
//         <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-red-700 to-red-800 p-6 text-white">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
//                   <span className="font-bold text-red-700 text-xl">FM</span>
//                 </div>
//                 <div>
//                   <div className="text-xl font-bold">Fresh Meat Mart</div>
//                   <div className="text-red-100 text-sm">Premium Quality</div>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 hover:bg-white/10 rounded-xl transition-colors"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>

//             {/* User Info */}
//             <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-3">
//               <UserIcon className="h-8 w-8" />
//               <div>
//                 <div className="font-semibold">Welcome!</div>
//                 <div className="text-red-100 text-sm">Sign in to your account</div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="p-6 overflow-y-auto h-[calc(100vh-200px)]">
//             <div className="space-y-2">
//               <Link 
//                 href="/" 
//                 className="flex items-center space-x-3 p-4 rounded-xl hover:bg-red-50 text-gray-700 transition-all duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                   <span className="text-red-700 font-bold">H</span>
//                 </div>
//                 <span className="font-semibold">Home</span>
//               </Link>

//               {/* Shop Categories */}
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-3 p-4 rounded-xl bg-red-50 text-red-700">
//                   <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
//                     <span className="text-white font-bold">S</span>
//                   </div>
//                   <span className="font-semibold">Shop Categories</span>
//                 </div>
                
//                 <div className="pl-4 space-y-1">
//                   {shopCategories.map((category) => (
//                     <Link
//                       key={category.name}
//                       href={category.href}
//                       className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 text-gray-600 transition-all duration-300"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                       <span>{category.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Link 
//                 href="/aboutpage" 
//                 className="flex items-center space-x-3 p-4 rounded-xl hover:bg-red-50 text-gray-700 transition-all duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                   <InformationCircleIcon className="w-5 h-5 text-red-700" />
//                 </div>
//                 <span className="font-semibold">About Us</span>
//               </Link>

//               <Link 
//                 href="/contact" 
//                 className="flex items-center space-x-3 p-4 rounded-xl hover:bg-red-50 text-gray-700 transition-all duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                   <PhoneIcon className="w-5 h-5 text-red-700" />
//                 </div>
//                 <span className="font-semibold">Contact</span>
//               </Link>
//             </div>

//             {/* Quick Actions */}
//             <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
//               <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 <button className="p-3 bg-white rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors border">
//                   Track Order
//                 </button>
//                 <button className="p-3 bg-red-700 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors">
//                   Special Offers
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
//             <div className="flex space-x-4">
//               <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
//                 Help
//               </button>
//               <button className="flex-1 bg-red-700 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors">
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;




"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  ShoppingCartIcon, 
  MagnifyingGlassIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { 
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon 
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopCategories = [
    { name: 'Beef', href: '/meatProduct', description: 'Premium Beef Cuts' },
    { name: 'Chicken', href: '/chickenProducts', description: 'Fresh Chicken' },
    { name: 'Goat', href: '/goatProducts', description: 'Quality Goat Meat' },
    { name: 'Lamb', href: '/lamb', description: 'Tender Lamb Cuts' },
    { name: 'Seafood', href: '/seafood', description: 'Fresh Seafood' },
    { name: 'Combo Packs', href: '/combos', description: 'Special Bundles' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-red-900/10 border-b border-red-100' 
          : 'bg-red-600'
      }`}>
        {/* Top Announcement Bar - More Compact
        <div className="bg-red-600 text-white py-1.5 text-center text-xs">
          <div className="max-w-7xl mx-auto px-4">
            🚚 
        </div><strong>Free Delivery</strong> on orders above $50 | ⭐ Premium Quality Guaranteed
          </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reduced height from h-20 to h-16 */}
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - More Compact */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'bg-red-700' : 'bg-white'
                }`}>
                  <span className={`font-bold text-lg ${
                    isScrolled ? 'text-white' : 'text-red-700'
                  }`}>FM</span>
                </div>
                <div>
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-red-700' : 'text-white'
                  }`}>
                    Fresh Meat Mart
                  </span>
                  <p className={`text-xs transition-colors duration-300 ${
                    isScrolled ? 'text-red-600' : 'text-red-100'
                  }`}>
                    Premium Quality
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu - More Compact */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                <Link 
                  href="/" 
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Home
                </Link>

                {/* Shop Dropdown - More Compact */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('shop')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
                      : 'text-white hover:bg-white/10'
                  }`}>
                    <span>Shop</span>
                    <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === 'shop' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* Mega Dropdown - Slightly Smaller */}
                  <div className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-red-100 transition-all duration-300 transform origin-top ${
                    activeDropdown === 'shop' 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-3">Our Products</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {shopCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 transition-all duration-300"
                          >
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
                              <span className="text-red-700 group-hover:text-white font-bold text-xs">
                                {category.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-red-700 text-sm">
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/aboutpage" 
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  About Us
                </Link>

                <Link 
                  href="/contact" 
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Section - More Compact */}
            <div className="flex items-center space-x-3">
              {/* Search Bar - More Compact */}
              <div className={`hidden lg:flex items-center rounded-xl px-3 py-1.5 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-red-50 border border-red-200' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <input
                  type="text"
                  placeholder="Search..."
                  className={`bg-transparent outline-none w-32 text-sm transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 placeholder-gray-500' : 'text-white placeholder-red-100'
                  }`}
                />
                <MagnifyingGlassIcon className={`h-4 w-4 transition-colors duration-300 ${
                  isScrolled ? 'text-red-700' : 'text-white'
                }`} />
              </div>

              {/* User Account - Smaller */}
              <button className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'hover:bg-red-50 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              }`}>
                <UserIcon className="h-5 w-5" />
              </button>

              {/* Shopping Cart - Smaller */}
              <Link 
                href="/cart" 
                className={`flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 hover:scale-105 relative ${
                  isScrolled 
                    ? 'hover:bg-red-50 text-gray-700' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span className={`absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow ${
                  isScrolled ? 'bg-red-700' : 'bg-white text-red-700'
                }`}>
                  3
                </span>
              </Link>

              {/* Mobile Menu Button - Smaller */}
              <button
                onClick={() => setIsOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-red-50' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar - Maintained same quality */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
          {/* Header - More Compact */}
          <div className="bg-gradient-to-r from-red-700 to-red-800 p-4 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="font-bold text-red-700 text-lg">FM</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Fresh Meat Mart</div>
                  <div className="text-red-100 text-xs">Premium Quality</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* User Info - More Compact */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <UserIcon className="h-6 w-6" />
              <div>
                <div className="font-semibold text-sm">Welcome!</div>
                <div className="text-red-100 text-xs">Sign in to your account</div>
              </div>
            </div>
          </div>

          {/* Navigation - More Compact */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-160px)]">
            <div className="space-y-1">
              <Link 
                href="/" 
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 text-gray-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-700 font-bold text-sm">H</span>
                </div>
                <span className="font-semibold text-sm">Home</span>
              </Link>

              {/* Shop Categories - More Compact */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-50 text-red-700">
                  <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="font-semibold text-sm">Shop Categories</span>
                </div>
                
                <div className="pl-3 space-y-0.5">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 text-gray-600 transition-all duration-300 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/aboutpage" 
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 text-gray-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <InformationCircleIcon className="w-4 h-4 text-red-700" />
                </div>
                <span className="font-semibold text-sm">About Us</span>
              </Link>

              <Link 
                href="/contact" 
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 text-gray-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 text-red-700" />
                </div>
                <span className="font-semibold text-sm">Contact</span>
              </Link>
            </div>

            {/* Quick Actions - More Compact */}
            <div className="mt-6 p-3 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 bg-white rounded-lg text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors border">
                  Track Order
                </button>
                <button className="p-2 bg-red-700 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors">
                  Special Offers
                </button>
              </div>
            </div>
          </div>

          {/* Footer - More Compact */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors">
                Help
              </button>
              <button className="flex-1 bg-red-700 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;