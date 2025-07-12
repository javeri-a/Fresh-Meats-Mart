// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   salePrice?: number;
//   weight: {
//     value: number;
//     unit: string;
//   };
//   description?: string;
//   imageUrl: string;
//   tags?: string[];
// }

// export default function MeatProductListingPage() {
//   const [products, setProducts] = useState<MeatProduct[]>([]);
//   const [priceRange, setPriceRange] = useState<number[]>([0, 5000]); // Higher range for meat products
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const query = `*[_type == "top products"] {
//         _id,
//         name,
//         price,
//         salePrice,
//         weight,
//         description,
//         "imageUrl": image.asset->url,
//         tags
//       }`;
//       const data: MeatProduct[] = await client.fetch(query);
//       setProducts(data);
//     }

//     fetchProducts();
//   }, []);

//   const handlePriceChange = (event: Event, newValue: number | number[]) => {
//     setPriceRange(newValue as number[]);
//   };

//   const toggleTag = (tag: string) => {
//     setSelectedTags(prev =>
//       prev.includes(tag) 
//         ? prev.filter(t => t !== tag) 
//         : [...prev, tag]
//     );
//   };

//   const filteredProducts = products.filter(product => {
//     // Filter by price range
//     const priceToCheck = product.salePrice || product.price;
//     const priceMatch = priceToCheck >= priceRange[0] && priceToCheck <= priceRange[1];
    
//     // Filter by tags if any are selected
//     const tagMatch = selectedTags.length === 0 || 
//       (product.tags && product.tags.some(tag => selectedTags.includes(tag)));
    
//     return priceMatch && tagMatch;
//   });

//   // Extract unique tags from products
//   const allTags = Array.from(
//     new Set(products.flatMap(product => product.tags || []))
//   );

//   return (
//     <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6 bg-red-50">
//       {/* Left Sidebar - Meat Filters */}
//       <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-4 border border-red-100">
//         <h2 className="text-lg font-bold mb-4 text-red-800">Meat Filters</h2>

//         {/* Price Range */}
//         <div className="mb-6">
//           <h3 className="text-md font-semibold mb-2 text-red-700">Price (PKR)</h3>
//           <div className="relative pt-1">
//             <input 
//               type="range" 
//               min="0" 
//               max="10000" 
//               step="100"
//               value={priceRange[0]}
//               onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
//               className="w-full accent-red-600"
//             />
//             <input 
//               type="range" 
//               min="0" 
//               max="10000" 
//               step="100"
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//               className="w-full accent-red-600 mt-4"
//             />
//           </div>
//           <div className="flex justify-between text-sm mt-2 text-red-600">
//             <span>PKR {priceRange[0].toLocaleString()}</span>
//             <span>PKR {priceRange[1].toLocaleString()}</span>
//           </div>
//         </div>

//         {/* Meat Categories */}
//         <div className="mb-6">
//           <h3 className="text-md font-semibold mb-2 text-red-700">Meat Types</h3>
//           <div className="space-y-2">
//             {allTags.map(tag => (
//               <div 
//                 key={tag}
//                 onClick={() => toggleTag(tag)}
//                 className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${selectedTags.includes(tag) ? 'bg-red-600 text-white' : 'bg-red-50 text-red-800 hover:bg-red-100'}`}
//               >
//                 {tag}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Weight Options */}
//         <div className="mb-6">
//           <h3 className="text-md font-semibold mb-2 text-red-700">Weight</h3>
//           <div className="grid grid-cols-3 gap-2">
//             {['500g', '1kg', '2kg', '5kg', '10kg'].map(weight => (
//               <div
//                 key={weight}
//                 className="px-2 py-1 border border-red-200 rounded-md text-center cursor-pointer hover:bg-red-100 text-red-800"
//               >
//                 {weight}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Reset Filters */}
//         <button 
//           onClick={() => {
//             setPriceRange([0, 5000]);
//             setSelectedTags([]);
//           }}
//           className="w-full mt-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
//         >
//           Reset Filters
//         </button>
//       </div>

//       {/* Product Listing */}
//       <div className="w-full lg:w-3/4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-red-800">
//             Premium Quality Meat
//           </h1>
//           <div className="text-red-600">
//             Showing {filteredProducts.length} products
//           </div>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-12">
//             <h3 className="text-xl text-red-800 mb-2">No products found</h3>
//             <p className="text-red-600">Try adjusting your filters</p>
//           </div>
//         ) : (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
//             }}
//           >
//             {filteredProducts.map((product) => {
//               const hasDiscount = product.salePrice && product.salePrice < product.price;
//               const discountPercentage = hasDiscount 
//                 ? Math.round(((product.price - product.salePrice) / product.price * 100)
//                 : 0;

//               return (
//                 <motion.div
//                   key={product._id}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   whileHover={{ scale: 1.02 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-md border border-red-100 hover:shadow-lg transition-all"
//                 >
//                   <Link href={`/products/${product._id}`}>
//                     <div className="relative">
//                       <div className="h-48 relative overflow-hidden">
//                         <Image
//                           src={urlFor(product.imageUrl).url()}
//                           alt={product.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       {hasDiscount && (
//                         <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           {discountPercentage}% OFF
//                         </div>
//                       )}
//                     </div>

//                     <div className="p-4">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
//                         <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
//                           {product.weight.value}{product.weight.unit}
//                         </span>
//                       </div>

//                       <div className="mb-3">
//                         <div className="flex items-center gap-2">
//                           {hasDiscount ? (
//                             <>
//                               <span className="text-red-600 font-bold text-xl">
//                                 PKR {product.salePrice?.toLocaleString()}
//                               </span>
//                               <span className="text-gray-400 line-through text-sm">
//                                 PKR {product.price.toLocaleString()}
//                               </span>
//                             </>
//                           ) : (
//                             <span className="text-gray-800 font-bold text-xl">
//                               PKR {product.price.toLocaleString()}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {product.description && (
//                         <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                           {product.description}
//                         </p>
//                       )}

//                       <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-medium">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }





// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   description?: string;
//   shortDescription?: string;
//   imageUrl: string;
//   rating?: number;
//   category?: string;
//   isPremium?: boolean;
//   tags?: string[];
//   weight?: string[];
// }

// export default function NewArrivals() {
//   const [products, setProducts] = useState<MeatProduct[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const query = `*[_type == "meat"][0...4] {
//         _id,
//         name,
//         price,
//         originalPrice,
//         description,
//         shortDescription,
//         "imageUrl": image.asset->url,
//         rating,
//         category,
//         isPremium,
//         tags,
//         weight
//       }`;
//       const data: MeatProduct[] = await client.fetch(query);
//       setProducts(data);
//     }

//     fetchProducts();
//   }, []);

//   const calculateDiscount = (price: number, originalPrice?: number) => {
//     if (!originalPrice) return 0;
//     return Math.round(((originalPrice - price) / originalPrice) * 100);
//   };

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
//               NEW ARRIVALS
//             </span>
//           </motion.h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover our freshest premium cuts of meat, hand-selected for quality and flavor
//           </p>
//         </div>

//         {/* Products Grid */}
//         <motion.div
//           className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { 
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.1
//               }
//             }
//           }}
//         >
//           {products.map((product) => {
//             const discount = calculateDiscount(product.price, product.originalPrice);
            
//             return (
//               <motion.div
//                 key={product._id}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 }
//                 }}
//                 whileHover={{ 
//                   y: -5,
//                   transition: { duration: 0.2 }
//                 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-red-50 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                   {/* Premium Badge */}
//                   {product.isPremium && (
//                     <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
//                       PREMIUM
//                     </div>
//                   )}

//                   {/* Discount Badge */}
//                   {discount > 0 && (
//                     <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">
//                       {discount}% OFF
//                     </div>
//                   )}

//                   {/* Product Image */}
//                   {/* <Link href={`/dynamicProducts/${product._id}`}> */}
//                   <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200">
//                     <Link href={`/Products/${product._id}`}>
//                       <Image
//                         src={urlFor(product.imageUrl).url()}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-64 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
//                       />
//                    </Link>
//                   </div>
                 

//                   {/* Product Info */}
//                   <div className="p-4 flex-grow flex flex-col">
//                     <div className="flex justify-between items-start">
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">
//                         <Link href={`/products/${product._id}`}>
//                           <span aria-hidden="true" className="absolute inset-0" />
//                           {product.name}
//                         </Link>
//                       </h3>
//                       {product.category && (
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                           {product.category}
//                         </span>
//                       )}
//                     </div>

//                     {/* Rating */}
//                     {product.rating && (
//                       <div className="flex items-center mt-1 mb-2">
//                          {/* <div className="flex items-center">
//                           {[0, 1, 2, 3, 4].map((star) => (
//                             <svg
//                               key={star}
//                               className={`h-4 w-4 ${star < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                             >
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                         </div> */}
//                         <span className="text-gray-600 text-xs ml-1">
//                           ({product.rating.toFixed(1)})
//                         </span>
//                       </div> 
//                     )}  
                     

//                     {/* Short Description */}
//                     {product.shortDescription && (
//                       <p className="text-gray-600 text-sm mt-2 mb-4 line-clamp-2">
//                         {product.shortDescription}
//                       </p>
//                     )}

//                     {/* Weight Options */}
//                     {product.weight && product.weight.length > 0 && (
//                       <div className="mt-2 mb-4">
//                         <div className="flex flex-wrap gap-1">
//                           {product.weight.map((w) => (
//                             <span
//                               key={w}
//                               className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
//                             >
//                               {w}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Price */}
//                     <div className="mt-auto">
//                       <div className="flex items-center">
//                         <p className="text-xl font-bold text-red-600">
//                           PKR {product.price.toLocaleString()}
//                         </p>
//                         {product.originalPrice && (
//                           <p className="ml-2 text-sm text-gray-500 line-through">
//                             PKR {product.originalPrice.toLocaleString()}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <div className="mt-4">
//                       <button
//                         className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-200"
//           >
//             View All Products
//             <svg
//               className="ml-2 -mr-1 w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   description?: string;
//   shortDescription?: string;
//   imageUrl: string;
//   rating?: number;
//   category?: string;
//   isPremium?: boolean;
//   tags?: string[];
//   weight?: string[];
// }

// export default function NewArrivals() {
//   const [products, setProducts] = useState<MeatProduct[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const query = `*[_type == "meat"][0...4] {
//         _id,
//         name,
//         price,
//         originalPrice,
//         description,
//         shortDescription,
//         "imageUrl": image.asset->url,
//         rating,
//         category,
//         isPremium,
//         tags,
//         weight
//       }`;
//       const data: MeatProduct[] = await client.fetch(query);
//       setProducts(data);
//     }

//     fetchProducts();
//   }, []);

//   const calculateDiscount = (price: number, originalPrice?: number) => {
//     if (!originalPrice) return 0;
//     return Math.round(((originalPrice - price) / originalPrice) * 100);
//   };

//   // ✅ Add to Cart handler
//   const handleAddToCart = (product: MeatProduct) => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

//     const existingIndex = cartItems.findIndex((item: any) => item._id === product._id);

//     if (existingIndex !== -1) {
//       cartItems[existingIndex].quantity += 1;
//     } else {
//       cartItems.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cartItems));

//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
//               NEW ARRIVALS
//             </span>
//           </motion.h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover our freshest premium cuts of meat, hand-selected for quality and flavor
//           </p>
//         </div>

//         {/* Products Grid */}
//         <motion.div
//           className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { 
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.1
//               }
//             }
//           }}
//         >
//           {products.map((product) => {
//             const discount = calculateDiscount(product.price, product.originalPrice);
            
//             return (
//               <motion.div
//                 key={product._id}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 }
//                 }}
//                 whileHover={{ 
//                   y: -5,
//                   transition: { duration: 0.2 }
//                 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-red-50 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                   {/* Premium Badge */}
//                   {product.isPremium && (
//                     <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
//                       PREMIUM
//                     </div>
//                   )}

//                   {/* Discount Badge */}
//                   {discount > 0 && (
//                     <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">
//                       {discount}% OFF
//                     </div>
//                   )}

//                   {/* Product Image */}
//                   <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200">
//                     <Link href={`/Products/${product._id}`}>
//                       <Image
//                         src={urlFor(product.imageUrl).url()}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-64 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
//                       />
//                    </Link>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-4 flex-grow flex flex-col">
//                     <div className="flex justify-between items-start">
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">
//                         <Link href={`/products/${product._id}`}>
//                           <span aria-hidden="true" className="absolute inset-0" />
//                           {product.name}
//                         </Link>
//                       </h3>
//                       {product.category && (
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                           {product.category}
//                         </span>
//                       )}
//                     </div>

//                     {/* Short Description */}
//                     {product.shortDescription && (
//                       <p className="text-gray-600 text-sm mt-2 mb-4 line-clamp-2">
//                         {product.shortDescription}
//                       </p>
//                     )}

//                     {/* Weight Options */}
//                     {product.weight && product.weight.length > 0 && (
//                       <div className="mt-2 mb-4">
//                         <div className="flex flex-wrap gap-1">
//                           {product.weight.map((w) => (
//                             <span
//                               key={w}
//                               className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
//                             >
//                               {w}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Price */}
//                     <div className="mt-auto">
//                       <div className="flex items-center">
//                         <p className="text-xl font-bold text-red-600">
//                           PKR {product.price.toLocaleString()}
//                         </p>
//                         {product.originalPrice && (
//                           <p className="ml-2 text-sm text-gray-500 line-through">
//                             PKR {product.originalPrice.toLocaleString()}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <div className="mt-4">
//                       <button
//                         onClick={() => handleAddToCart(product)}
//                         className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-200"
//           >
//             View All Products
//             <svg
//               className="ml-2 -mr-1 w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiArrowRight } from "react-icons/fi";
import { toast } from "react-hot-toast";

interface MeatProduct {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  shortDescription?: string;
  imageUrl: string;
  rating?: number;
  category?: string;
  isPremium?: boolean;
  tags?: string[];
  weight?: string[];
}

export default function NewArrivals() {
  const [products, setProducts] = useState<MeatProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "meat"][0...4] {
          _id,
          name,
          price,
          originalPrice,
          description,
          shortDescription,
          "imageUrl": image.asset->url,
          rating,
          category,
          isPremium,
          tags,
          weight
        }`;
        const data: MeatProduct[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const handleAddToCart = (product: MeatProduct) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cartItems.findIndex((item: any) => item._id === product._id);

    if (existingIndex !== -1) {
      cartItems[existingIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      style: {
        background: "#b91c1c",
        color: "#fff",
      },
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                NEW ARRIVALS
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our freshest premium cuts of meat, hand-selected for quality and flavor
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-xl"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              NEW ARRIVALS
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover our freshest premium cuts of meat, hand-selected for quality and flavor
          </motion.p>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {products.map((product) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            return (
              <motion.div
                key={product._id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300 h-full flex flex-col hover:border-red-100">
                  {/* Premium Badge */}
                  {product.isPremium && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-sm flex items-center">
                      <FiStar className="mr-1" size={12} />
                      PREMIUM
                    </div>
                  )}

                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      {discount}% OFF
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-50 relative">
                    <Link href={`/products/${product._id}`} className="block">
                      <Image
                        src={urlFor(product.imageUrl).url()}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-105"
                        priority
                      />
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        <Link href={`/products/${product._id}`} className="hover:text-red-700 transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      {product.category && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-800">
                          {product.category}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              size={14}
                              className={`${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-0.5`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating.toFixed(1)})
                        </span>
                      </div>
                    )}

                    {/* Short Description */}
                    {product.shortDescription && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                    )}

                    {/* Weight Options */}
                    {product.weight && product.weight.length > 0 && (
                      <div className="mt-auto mb-4">
                        <p className="text-xs text-gray-500 mb-1">Available in:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.weight.map((w) => (
                            <span
                              key={w}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-800 border border-gray-200"
                            >
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mt-auto mb-4">
                      <div className="flex items-center">
                        <p className="text-xl font-bold text-red-600">
                          PKR {product.price.toLocaleString()}
                        </p>
                        {product.originalPrice && (
                          <p className="ml-2 text-sm text-gray-500 line-through">
                            PKR {product.originalPrice.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mt-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-sm"
                      >
                        <FiShoppingCart className="mr-2" size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Products
            <FiArrowRight className="ml-2 -mr-1" size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}