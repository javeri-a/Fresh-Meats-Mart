

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag,  ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
}

export default function Cart() {
  const [items, setItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cartItems);
    calculateTotal(cartItems);
    setIsLoading(false);
  }, []);

  const calculateTotal = (cartItems: Product[]) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const updateQuantity = (id: string, type: "inc" | "dec") => {
    const updated = items.map(item =>
      item._id === id ? { ...item, quantity: type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1) } : item
    );
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  const removeItem = (id: string) => {
    const updated = items.filter(item => item._id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  const handleCheckout = () => {
    if (items.length === 0) return alert("Your cart is empty!");
    localStorage.setItem("checkoutCart", JSON.stringify({ items, total }));
    router.push("/checkout");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16 bg-white/80 rounded-3xl shadow-lg border border-red-100">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some premium cuts to get started</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item._id} className="bg-white/80 rounded-2xl p-6 shadow-lg flex items-center gap-6">
                <Image src={item.image} alt={item.name} width={96} height={96} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Fresh • Premium Cut • Hand-Selected</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-red-600">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                    <button onClick={() => updateQuantity(item._id, "dec")} className="w-8 h-8 bg-white rounded-lg border border-gray-200">-</button>
                    <span className="font-bold text-gray-900 min-w-[30px] text-center text-lg">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, "inc")} className="w-8 h-8 bg-white rounded-lg border border-gray-200">+</button>
                  </div>
                  <div className="text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button onClick={() => removeItem(item._id)} className="p-3 text-gray-400 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 rounded-3xl p-8 shadow-2xl border border-red-100">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-red-600" /> Order Summary
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Shipping</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold text-gray-900">${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-black text-red-600">${(total * 1.08).toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3"
              onClick={handleCheckout}
            >
              Proceed to Checkout
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
              <Shield className="w-4 h-4" /> Secure SSL Encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
