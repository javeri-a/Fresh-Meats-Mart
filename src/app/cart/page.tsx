


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // ✅ درست import

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// const MeatCard = ({
//   item,
//   onRemove,
//   onUpdateQuantity,
// }: {
//   item: Product;
//   onRemove: () => void;
//   onUpdateQuantity: (quantity: number) => void;
// }) => (
//   <div className="border border-red-900 p-4 flex justify-between items-center">
//     <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
//     <div>
//       <h3 className="text-lg font-bold">{item.name}</h3>
//       <p className="text-red-400">${item.price}</p>
//       <div className="flex items-center mt-2">
//         <button
//           onClick={() => onUpdateQuantity(item.quantity - 1)}
//           className="px-2 bg-red-700"
//         >
//           -
//         </button>
//         <span className="mx-2">{item.quantity}</span>
//         <button
//           onClick={() => onUpdateQuantity(item.quantity + 1)}
//           className="px-2 bg-red-700"
//         >
//           +
//         </button>
//       </div>
//       <button onClick={onRemove} className="mt-2 text-red-500">
//         Remove
//       </button>
//     </div>
//   </div>
// );

// export default function CyberButcherCart() {
//   const [items, setItems] = useState<Product[]>([]);
//   const router = useRouter(); // ✅ اب یہ صحیح چلے گا

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     setItems(cartItems);
//   }, []);

//   const handleRemove = (id: string) => {
//     const updatedItems = items.filter((item) => item._id !== id);
//     setItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   const handleQuantity = (id: string, q: number) => {
//     if (q < 1) return;
//     const updatedItems = items.map((item) =>
//       item._id === id ? { ...item, quantity: q } : item
//     );
//     setItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   const handleBuyNow = () => {
//     router.push("/checkout"); // ✅ example redirect
//   };

//   const calculateTotalPrice = () => {
//     return items.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="min-h-screen bg-black text-red-100">
//       <header className="border-b border-red-900/30">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-3xl font-bold tracking-tighter">
//             <span className="text-red-500">///</span> MEAT_VAULT{" "}
//             <span className="text-red-500">///</span>
//           </h1>
//           <div className="text-xs tracking-widest text-red-400/50 mt-1">
//             CRYO-LOCKED SELECTIONS
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         {items.length === 0 ? (
//           <div className="text-center py-20 border border-dashed border-red-900/50">
//             <div className="text-6xl mb-4">🛒</div>
//             <h2 className="text-2xl font-bold text-red-400">
//               Your cart is empty
//             </h2>
//           </div>
//         ) : (
//           items.map((item) => (
//             <MeatCard
//               key={item._id}
//               item={item}
//               onRemove={() => handleRemove(item._id)}
//               onUpdateQuantity={(q) => handleQuantity(item._id, q)}
//             />
//           ))
//         )}

//         {/* Display Total Price */}
//         {items.length > 0 && (
//           <div className="mt-8 text-xl font-bold text-red-400">
//             Total: ${calculateTotalPrice().toFixed(2)}
//           </div>
//         )}

//         {/* Buy Now Button */}
//         {items.length > 0 && (
//           <button
//             onClick={handleBuyNow}
//             className="mt-4 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition"
//           >
//             Proceed to Checkout
//           </button>
//         )}
//       </main>
//     </div>
//   );
// }


// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Link } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// // ✅ Props
// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   description?: string;
//   imageUrl: string;
//   rating?: number;
//   category?: string;
//   isPremium?: boolean;
//   tags?: string[];
//   weight?: string[];
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { id } = params;

//   const query = `*[_type == "meat" && _id == "${id}"][0] {
//     _id,
//     name,
//     price,
//     originalPrice,
//     description,
//     "imageUrl": image.asset->url,
//     rating,
//     category,
//     isPremium,
//     tags,
//     weight
//   }`;

//   const product: MeatProduct = await client.fetch(query);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return <ProductDetail product={product} />;
// }

// // ✅ Separate client component
// function ProductDetail({ product }: { product: MeatProduct }) {
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const existingIndex = existingCart.findIndex(
//       (item: any) => item._id === product._id
//     );

//     if (existingIndex > -1) {
//       existingCart[existingIndex].quantity += 1;
//     } else {
//       existingCart.push({
//         _id: product._id,
//         name: product.name,
//         price: product.price,
//         image: urlFor(product.imageUrl).url(),
//         quantity: 1,
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));

//     // Redirect to Cart page
//     router.push("/cart");
//   };

//   const discount =
//     product.originalPrice
//       ? Math.round(
//           ((product.originalPrice - product.price) / product.originalPrice) * 100
//         )
//       : 0;

//   return (
//     <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Product Image */}
//         <div className="relative group">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.name}
//             width={800}
//             height={800}
//             className="rounded-2xl shadow-2xl object-cover w-full transition-transform duration-300 group-hover:scale-105"
//           />

//           {/* Premium Badge */}
//           {product.isPremium && (
//             <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//               PREMIUM
//             </div>
//           )}

//           {/* Discount Badge */}
//           {discount > 0 && (
//             <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//               {discount}% OFF
//             </div>
//           )}
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
//             {product.name}
//           </h1>

//           {product.category && (
//             <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
//               {product.category}
//             </span>
//           )}

//           <div className="flex items-baseline mb-6">
//             <span className="text-4xl font-bold text-red-700">
//               PKR {product.price.toLocaleString()}
//             </span>
//             {product.originalPrice && (
//               <span className="ml-4 line-through text-xl text-gray-500">
//                 PKR {product.originalPrice.toLocaleString()}
//               </span>
//             )}
//           </div>

//           {product.description && (
//             <p className="text-gray-700 text-lg leading-relaxed mb-6">
//               {product.description}
//             </p>
//           )}

//           {product.weight && product.weight.length > 0 && (
//             <div className="mb-6">
//               <h3 className="text-sm font-semibold text-gray-800 mb-2">
//                 Available Weights:
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {product.weight.map((w) => (
//                   <span
//                     key={w}
//                     className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
//                   >
//                     {w}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ✅ Add to Cart */}
//           <button
//             onClick={handleAddToCart}
//             className="inline-block w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-200"
//           >
//             Add to Cart
            
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiTrash2, FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const MeatCard = ({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: Product;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="flex p-4">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
          <button 
            onClick={onRemove}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
        
        <p className="text-red-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
        
        <div className="flex items-center mt-4">
          <button
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
            disabled={item.quantity <= 1}
          >
            <FiMinus size={14} />
          </button>
          <span className="mx-3 text-gray-900 font-medium w-6 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function CyberButcherCart() {
  const [items, setItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cartItems);
  }, []);

  const handleRemove = (id: string) => {
    const updatedItems = items.filter((item) => item._id !== id);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleQuantity = (id: string, q: number) => {
    if (q < 1) return;
    const updatedItems = items.map((item) =>
      item._id === id ? { ...item, quantity: q } : item
    );
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleBuyNow = () => {
    router.push("/checkout");
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Cyber Butcher Cart
              </h1>
              <p className="text-red-100 mt-1">
                Your premium meat selections
              </p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <span className="font-medium">{items.length} items</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {items.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
            <div className="text-6xl mb-6 text-red-400">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Browse our premium cuts and add something special to your cart
            </p>
            <button
              onClick={() => router.push("/products")}
              className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center mx-auto"
            >
              Shop Now <FiArrowRight className="ml-2" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <MeatCard
                key={item._id}
                item={item}
                onRemove={() => handleRemove(item._id)}
                onUpdateQuantity={(q) => handleQuantity(item._id, q)}
              />
            ))}
          </div>
        )}

        {/* Summary Section */}
        {items.length > 0 && (
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Subtotal</h3>
              <span className="text-lg font-bold text-gray-900">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Shipping</h3>
              <span className="text-lg font-bold text-green-600">FREE</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Total</h3>
                <span className="text-xl font-bold text-red-600">
                  ${calculateTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
            
            <button
              onClick={handleBuyNow}
              className="mt-6 w-full py-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-semibold rounded-lg hover:from-red-700 hover:to-red-900 transition-all shadow-md flex items-center justify-center"
            >
              Proceed to Checkout <FiArrowRight className="ml-2" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}