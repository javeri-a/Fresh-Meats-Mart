

































// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { User, Phone, Home, MapPin, Wallet } from "lucide-react";

// // Product type
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function Checkout() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "Karachi",
//     paymentMethod: "COD",
//   });

//   const [items, setItems] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);

//   // Load cart
//   useEffect(() => {
//     const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     setItems(cartItems);
//     const totalPrice = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotal(totalPrice);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Order Submitted:", { ...form, items, total });
//     alert("✅ Order placed successfully!");
//     localStorage.removeItem("cart");
//     setItems([]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
//       >
//         {/* Left: Checkout Form */}
//         <motion.div
//           initial={{ x: -40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="bg-white rounded-3xl shadow-xl p-8 border border-red-100"
//         >
//           <h1 className="text-3xl font-extrabold text-red-600 mb-6">🥩 Checkout</h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name */}
//             <div className="relative">
//               <User className="absolute left-3 top-3 text-red-500" size={20} />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
//               />
//             </div>

//             {/* Phone */}
//             <div className="relative">
//               <Phone className="absolute left-3 top-3 text-red-500" size={20} />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
//               />
//             </div>

//             {/* Address */}
//             <div className="relative">
//               <Home className="absolute left-3 top-3 text-red-500" size={20} />
//               <textarea
//                 name="address"
//                 placeholder="Delivery Address"
//                 value={form.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
//               />
//             </div>

//             {/* City fixed */}
//             <div className="relative">
//               <MapPin className="absolute left-3 top-3 text-red-500" size={20} />
//               <input
//                 type="text"
//                 name="city"
//                 value={form.city}
//                 disabled
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
//               />
//               <p className="text-sm text-gray-500 mt-1">🚚 Delivery available only in Karachi</p>
//             </div>

//             {/* Payment */}
//             <div>
//               <label className="block mb-2 font-semibold flex items-center gap-2 text-gray-700">
//                 <Wallet className="text-red-500" size={20} /> Payment Method
//               </label>
//               <div className="flex gap-4">
//                 {["COD", "Easypaisa", "HBL"].map((method) => (
//                   <label
//                     key={method}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
//                       form.paymentMethod === method
//                         ? "bg-red-100 border-red-500 text-red-600"
//                         : "bg-white border-gray-300"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value={method}
//                       checked={form.paymentMethod === method}
//                       onChange={handleChange}
//                       className="hidden"
//                     />
//                     {method}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
//             >
//               Place Order
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Right: Cart Summary */}
//         <motion.div
//           initial={{ x: 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="bg-white rounded-3xl shadow-xl p-8 border border-red-100"
//         >
//           <h2 className="text-2xl font-bold text-red-600 mb-6">🛒 Order Summary</h2>
//           <div className="space-y-4 max-h-[400px] overflow-y-auto">
//             {items.map((item: Product) => (
//               <motion.div
//                 key={item._id}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-between items-center border-b pb-2"
//               >
//                 <span className="font-medium text-gray-700">
//                   {item.name} x {item.quantity}
//                 </span>
//                 <span className="text-red-600 font-bold">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="mt-6 border-t pt-4">
//             <div className="flex justify-between text-lg font-bold">
//               <span>Total:</span>
//               <span className="text-red-600">${total.toFixed(2)}</span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }







// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function Cart() {
//   const [items, setItems] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);

//   // Load cart
//   useEffect(() => {
//     const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     setItems(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   const calculateTotal = (cartItems: Product[]) => {
//     const totalPrice = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotal(totalPrice);
//   };

//   const updateQuantity = (id: string, type: "inc" | "dec") => {
//     const updated = items.map((item) =>
//       item._id === id
//         ? {
//             ...item,
//             quantity: type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//           }
//         : item
//     );
//     setItems(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   const removeItem = (id: string) => {
//     const updated = items.filter((item) => item._id !== id);
//     setItems(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-red-100"
//       >
//         <h1 className="text-3xl font-extrabold text-red-600 mb-8 flex items-center gap-2">
//           <ShoppingBag /> Your Cart
//         </h1>

//         {items.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">Your cart is empty 🛒</p>
//         ) : (
//           <>
//             <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
//               {items.map((item) => (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="flex items-center gap-6 border-b pb-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 rounded-xl object-cover shadow-md"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-red-600 font-semibold">${item.price.toFixed(2)}</p>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => updateQuantity(item._id, "dec")}
//                       className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <span className="font-semibold text-gray-700">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, "inc")}
//                       className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>

//                   <span className="text-red-600 font-bold w-24 text-right">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </span>

//                   <button
//                     onClick={() => removeItem(item._id)}
//                     className="text-gray-400 hover:text-red-600"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Total Section */}
//             <div className="mt-8 pt-6 border-t flex justify-between items-center">
//               <span className="text-2xl font-bold">Total:</span>
//               <span className="text-3xl font-extrabold text-red-600">
//                 ${total.toFixed(2)}
//               </span>
//             </div>

//             {/* Checkout Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-8 w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all"
//             >
//               Proceed to Checkout
//             </motion.button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ShoppingBag, Plus, Minus, Truck, Shield, Heart, ArrowRight, Sparkles } from "lucide-react";

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

  // Load cart
  useEffect(() => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cartItems);
    calculateTotal(cartItems);
    setIsLoading(false);
  }, []);

  const calculateTotal = (cartItems: Product[]) => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const updateQuantity = (id: string, type: "inc" | "dec") => {
    const updated = items.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
          }
        : item
    );
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  const removeItem = (id: string) => {
    const updated = items.filter((item) => item._id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-8 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-red-100 mb-4"
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          <span className="text-red-600 font-semibold">Premium Meat Selection</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
          Your <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Cart</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Review your premium selections before checkout
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Premium Badge */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-lg">Premium Cart</h3>
                  <p className="text-red-100 text-sm">{items.length} premium items selected</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black">${total.toFixed(2)}</div>
                <div className="text-red-100 text-sm">Total Amount</div>
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="space-y-4">
            <AnimatePresence>
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-red-100"
                >
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some premium cuts to get started</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
                  >
                    Browse Products
                  </motion.button>
                </motion.div>
              ) : (
                items.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-red-100 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      {/* Product Image */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-2xl object-cover shadow-md"
                        />
                        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Premium
                        </div>
                      </motion.div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">Fresh • Premium Cut • Hand-Selected</p>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-black text-red-600">${item.price.toFixed(2)}</span>
                          <span className="text-gray-400">/ piece</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item._id, "dec")}
                            className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-red-600 border border-gray-200"
                          >
                            <Minus size={16} />
                          </motion.button>
                          <span className="font-bold text-gray-900 min-w-[30px] text-center text-lg">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#fef2f2" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item._id, "inc")}
                            className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-red-600 border border-gray-200"
                          >
                            <Plus size={16} />
                          </motion.button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, color: "#dc2626" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item._id)}
                        className="p-3 text-gray-400 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Summary Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-red-600" />
              Order Summary
            </h3>

            {/* Pricing Breakdown */}
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

            {/* Checkout Button */}
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 group"
            >
              Proceed to Checkout
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              Secure SSL Encryption
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-6 text-white shadow-2xl">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Premium Benefits
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4" />
                <span>Free Next-Day Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4" />
                <span>Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-4 h-4" />
                <span>Freshness Promise</span>
              </div>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-red-100">
            <h4 className="font-bold text-gray-900 mb-3">Need Help?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Our meat experts are here to assist you with your order.
            </p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Chat with Expert
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}