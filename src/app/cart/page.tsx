"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Home, MapPin, Wallet } from "lucide-react";

// Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Karachi",
    paymentMethod: "COD",
  });

  const [items, setItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  // Load cart
  useEffect(() => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cartItems);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted:", { ...form, items, total });
    alert("✅ Order placed successfully!");
    localStorage.removeItem("cart");
    setItems([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left: Checkout Form */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-red-100"
        >
          <h1 className="text-3xl font-extrabold text-red-600 mb-6">🥩 Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-red-500" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-red-500" size={20} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            {/* Address */}
            <div className="relative">
              <Home className="absolute left-3 top-3 text-red-500" size={20} />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            {/* City fixed */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-red-500" size={20} />
              <input
                type="text"
                name="city"
                value={form.city}
                disabled
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
              <p className="text-sm text-gray-500 mt-1">🚚 Delivery available only in Karachi</p>
            </div>

            {/* Payment */}
            <div>
              <label className="block mb-2 font-semibold flex items-center gap-2 text-gray-700">
                <Wallet className="text-red-500" size={20} /> Payment Method
              </label>
              <div className="flex gap-4">
                {["COD", "Easypaisa", "HBL"].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                      form.paymentMethod === method
                        ? "bg-red-100 border-red-500 text-red-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={form.paymentMethod === method}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Place Order
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Cart Summary */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-red-100"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-6">🛒 Order Summary</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {items.map((item: Product) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium text-gray-700">
                  {item.name} x {item.quantity}
                </span>
                <span className="text-red-600 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-red-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
