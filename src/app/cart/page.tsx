

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