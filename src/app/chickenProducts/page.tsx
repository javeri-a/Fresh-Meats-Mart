

"use client";

import { Star, ShoppingCart, MoonStar } from "lucide-react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Product type
interface Product {
  _id: string;
  name: string;
  slug: string;
  rating: number;
  price: number;
  discountPrice?: number;
  kg?: number;
  gram?: number;
  pic: SanityImageSource;
}

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function ProductsCardPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const query = `*[_type == "chicken"]{
        _id,
        name,
        "slug": slug.current,
        rating,
        price,
        discountPrice,
        kg,
        gram,
        pic
      }`;
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((item) => item._id === product._id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.discountPrice || product.price,
        image: urlFor(product.pic).width(300).url(),
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to your cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50">
      <Toaster position="top-right" />

      <div className="text-center py-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-700">
          OUR CHICKEN SECTION
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Freshness & Quality You Can Trust
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
        {products.map((product, idx) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="backdrop-blur-lg bg-white/80 rounded-xl shadow-lg overflow-hidden 
                       border border-red-100 hover:border-red-600 
                       hover:shadow-[0_4px_20px_rgba(220,38,38,0.4)]
                       hover:scale-[1.02] transition-all duration-300 flex flex-col"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={urlFor(product.pic).width(600).height(500).url()}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-green-300"
              >
                <MoonStar size={14} className="animate-pulse" />
                Halal
              </motion.div>
            </div>

            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {product.name}
              </h3>

              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.round(product.rating) ? "gold" : "none"}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-2">
                  {product.rating}
                </span>
              </div>

              <div className="mb-3">
                {product.discountPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">
                      Rs. {product.price}
                    </span>
                    <span className="text-red-700 font-bold text-lg">
                      Rs. {product.discountPrice}
                    </span>
                  </div>
                ) : (
                  <p className="text-red-700 font-bold">
                    Rs. {product.price}{" "}
                    {product.kg ? `/ ${product.kg}kg` : product.gram ? `/ ${product.gram}g` : ""}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-2.5 rounded-lg shadow hover:from-red-700 hover:to-red-800 transition"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
