// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CreditCard,
//   Lock,
//   Shield,
//   Truck,
//   User,
//   ArrowLeft,
//   CheckCircle,
//   Sparkles,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   category?: string;
// }

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   cardNumber: string;
//   expiryDate: string;
//   cvv: string;
//   nameOnCard: string;
// }

// export default function Checkout() {
//   const router = useRouter();
//   const [items, setItems] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   // const [activeStep, setActiveStep] = useState(1);

//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     nameOnCard: "",
//   });

//   // Load cart from localStorage
//   useEffect(() => {
//     const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     if (cartItems.length === 0) {
//       router.push("/cart");
//       return;
//     }
//     setItems(cartItems);
//     calculateTotal(cartItems);
//     setIsLoading(false);
//   }, [router]);

//   const calculateTotal = (cartItems: Product[]) => {
//     const totalPrice = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotal(totalPrice);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     // Simulate payment processing
//     setTimeout(async () => {
//       try {
//         const res = await fetch("/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             items,
//             total: total * 1.08, // Including tax
//             customerInfo: formData,
//             createdAt: new Date().toISOString(),
//           }),
//         });

//         if (res.ok) {
//           localStorage.removeItem("cart");
//           setOrderSuccess(true);
//         } else {
//           alert("Failed to place order. Please try again.");
//         }
//       } catch (err) {
//         console.error("Error placing order:", err);
//         alert("Error connecting to server.");
//       } finally {
//         setIsProcessing(false);
//       }
//     }, 2000);
//   };

//   const tax = total * 0.08;
//   const finalTotal = total + tax;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (orderSuccess) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center py-8 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100 text-center"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
//           >
//             <CheckCircle className="w-12 h-12 text-white" />
//           </motion.div>
          
//           <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
//             Order <span className="text-green-600">Confirmed!</span>
//           </h1>
          
//           <p className="text-xl text-gray-600 mb-8">
//             Thank you for your purchase. Your premium meats are on the way!
//           </p>

//           <div className="bg-gray-50 rounded-2xl p-6 mb-8">
//             <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
//             <div className="space-y-2 text-sm text-gray-600">
//               <div className="flex justify-between">
//                 <span>Items:</span>
//                 <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Total Amount:</span>
//                 <span className="font-bold text-red-600">${finalTotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery:</span>
//                 <span className="text-green-600">Next Day</span>
//               </div>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => router.push("/")}
//             className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl"
//           >
//             Continue Shopping
//           </motion.button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-8 px-4">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-6xl mx-auto text-center mb-12"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05, x: -5 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => router.back()}
//           className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-red-100 mb-4 text-gray-600 hover:text-red-600 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Cart
//         </motion.button>

//         <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
//           Secure{" "}
//           <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
//             Checkout
//           </span>
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Complete your order with confidence
//         </p>
//       </motion.div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Checkout Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="lg:col-span-2 space-y-8"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Progress Steps */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-red-100">
//               <div className="flex items-center justify-between mb-8">
//                 {[1, 2, 3].map((step) => (
//                   <div key={step} className="flex items-center">
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
//                         activeStep >= step
//                           ? "bg-red-600 border-red-600 text-white"
//                           : "border-gray-300 text-gray-400"
//                       }`}
//                     >
//                       {step}
//                     </div>
//                     {step < 3 && (
//                       <div
//                         className={`w-24 h-1 mx-4 ${
//                           activeStep > step ? "bg-red-600" : "bg-gray-300"
//                         }`}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <span>Shipping</span>
//                 <span>Payment</span>
//                 <span>Review</span>
//               </div>
//             </div>

//             {/* Shipping Information */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100"
//             >
//               <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
//                 <User className="w-6 h-6 text-red-600" />
//                 Shipping Information
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Address *
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     ZIP Code *
//                   </label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={formData.zipCode}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Payment Information */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100"
//             >
//               <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
//                 <CreditCard className="w-6 h-6 text-red-600" />
//                 Payment Information
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Name on Card *
//                   </label>
//                   <input
//                     type="text"
//                     name="nameOnCard"
//                     value={formData.nameOnCard}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Card Number *
//                   </label>
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                     placeholder="1234 5678 9012 3456"
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Expiry Date *
//                     </label>
//                     <input
//                       type="text"
//                       name="expiryDate"
//                       value={formData.expiryDate}
//                       onChange={handleInputChange}
//                       placeholder="MM/YY"
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       CVV *
//                     </label>
//                     <input
//                       type="text"
//                       name="cvv"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={isProcessing}
//               className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isProcessing ? (
//                 <>
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                   />
//                   Processing Your Order...
//                 </>
//               ) : (
//                 <>
//                   <Lock className="w-5 h-5" />
//                   Complete Secure Payment
//                   <Shield className="w-5 h-5" />
//                 </>
//               )}
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Order Summary */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="space-y-6"
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100">
//             <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
//               <Sparkles className="w-6 h-6 text-red-600" />
//               Order Summary
//             </h3>

//             {/* Items List */}
//             <div className="space-y-4 mb-6">
//               <AnimatePresence>
//                 {items.map((item) => (
//                   <motion.div
//                     key={item._id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="flex items-center gap-3 py-3 border-b border-gray-100"
//                   >
//                     <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
//                       <span className="text-sm font-bold text-red-600">
//                         {item.quantity}x
//                       </span>
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-gray-900 text-sm">
//                         {item.name}
//                       </h4>
//                       <p className="text-gray-600 text-xs">
//                         ${item.price.toFixed(2)} each
//                       </p>
//                     </div>
//                     <div className="font-bold text-gray-900">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* Pricing */}
//             <div className="space-y-3 mb-6">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-semibold text-gray-900">
//                   ${total.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Shipping</span>
//                 <span className="font-bold text-green-600">FREE</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Tax</span>
//                 <span className="font-semibold text-gray-900">
//                   ${tax.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//                 <span className="text-xl font-bold text-gray-900">Total</span>
//                 <span className="text-2xl font-black text-red-600">
//                   ${finalTotal.toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Security Features */}
//           <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-6 text-white shadow-2xl">
//             <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
//               <Shield className="w-5 h-5" />
//               100% Secure Checkout
//             </h4>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-3">
//                 <Lock className="w-4 h-4" />
//                 <span>256-bit SSL Encryption</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Shield className="w-4 h-4" />
//                 <span>PCI DSS Compliant</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Truck className="w-4 h-4" />
//                 <span>Next-Day Delivery Guarantee</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }








"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Lock,
  Shield,
  Truck,
  User,
  ArrowLeft,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

export default function Checkout() {
  const router = useRouter();
  const [items, setItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  // Load cart from localStorage
  useEffect(() => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cartItems.length === 0) {
      router.push("/cart");
      return;
    }
    setItems(cartItems);
    calculateTotal(cartItems);
    setIsLoading(false);
  }, [router]);

  const calculateTotal = (cartItems: Product[]) => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(async () => {
      try {
        const res = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items,
            total: total * 1.08,
            customerInfo: formData,
            createdAt: new Date().toISOString(),
          }),
        });

        if (res.ok) {
          localStorage.removeItem("cart");
          setOrderSuccess(true);
        } else {
          alert("Failed to place order. Please try again.");
        }
      } catch (err) {
        console.error("Error placing order:", err);
        alert("Error connecting to server.");
      } finally {
        setIsProcessing(false);
      }
    }, 2000);
  };

  const tax = total * 0.08;
  const finalTotal = total + tax;

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

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Order <span className="text-green-600">Confirmed!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your premium meats are on the way!
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-red-600">${finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="text-green-600">Next Day</span>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/")}
            className="bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-4 text-gray-600 hover:text-red-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </motion.button>
        <h1 className="text-5xl font-black text-gray-900 mb-4">
          Secure <span className="text-red-600">Checkout</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Progress Steps */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                      activeStep >= step
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        activeStep > step ? "bg-red-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <span>Shipping</span>
              <span>Payment</span>
              <span>Review</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-red-600" />
                  Shipping Information
                </h3>
                {/* Shipping fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border md:col-span-2"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-red-600" />
                  Payment Information
                </h3>
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on Card"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border mb-4"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  Review & Place Order
                </h3>
                <p className="mb-6 text-gray-700">
                  Please review your details and confirm your order.
                </p>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl"
                  >
                    {isProcessing ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-red-600" />
              Order Summary
            </h3>
            {items.map(item => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-2"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
