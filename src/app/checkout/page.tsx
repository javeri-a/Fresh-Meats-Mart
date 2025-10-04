

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   CreditCard,
//   Shield,
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
//   const [activeStep, setActiveStep] = useState(1);

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

//   const handleNextStep = () => {
//     if (activeStep < 3) {
//       setActiveStep(prev => prev + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     if (activeStep > 1) {
//       setActiveStep(prev => prev - 1);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     setTimeout(async () => {
//       try {
//         const res = await fetch("/api/orders", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             items,
//             total: total * 1.08,
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
//       <div className="min-h-screen flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (orderSuccess) {
//     return (
//       <div className="min-h-screen flex items-center justify-center py-6 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl text-center"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
//           >
//             <CheckCircle className="w-10 h-10 text-white" />
//           </motion.div>
//           <h1 className="text-2xl font-bold text-gray-900 mb-3">
//             Order <span className="text-green-600">Confirmed!</span>
//           </h1>
//           <p className="text-base text-gray-600 mb-6">
//             Thank you for your purchase. Your meats are on the way!
//           </p>
//           <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left">
//             <h3 className="font-bold text-gray-900 mb-3">Order Details</h3>
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
//             className="bg-red-600 w-full text-white py-3 rounded-xl font-semibold text-lg"
//           >
//             Continue Shopping
//           </motion.button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-6 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <motion.button
//           whileHover={{ scale: 1.05, x: -3 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => router.back()}
//           className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-3 text-gray-600 hover:text-red-600"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Cart
//         </motion.button>
//         <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
//           Secure <span className="text-red-600">Checkout</span>
//         </h1>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Checkout Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="lg:col-span-2 space-y-6"
//         >
//           {/* Progress Steps */}
//           <div className="bg-white rounded-2xl p-4 shadow">
//             <div className="flex items-center justify-between mb-4">
//               {[1, 2, 3].map(step => (
//                 <div key={step} className="flex items-center w-full">
//                   <div
//                     className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold border-2 ${
//                       activeStep >= step
//                         ? "bg-red-600 border-red-600 text-white"
//                         : "border-gray-300 text-gray-400"
//                     }`}
//                   >
//                     {step}
//                   </div>
//                   {step < 3 && (
//                     <div
//                       className={`flex-1 h-1 mx-2 ${
//                         activeStep > step ? "bg-red-600" : "bg-gray-300"
//                       }`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between text-xs md:text-sm font-medium text-gray-600">
//               <span>Shipping</span>
//               <span>Payment</span>
//               <span>Review</span>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Step 1: Shipping */}
//             {activeStep === 1 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl p-6 shadow"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <User className="w-5 h-5 text-red-600" />
//                   Shipping Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {["firstName","lastName","email","phone","address"].map((field, idx) => (
//                     <input
//                       key={field}
//                       type={field === "email" ? "email" : "text"}
//                       name={field}
//                       placeholder={field.replace(/([A-Z])/g, " $1")}
//                       value={(formData as any)[field]}
//                       onChange={handleInputChange}
//                       className={`w-full px-4 py-3 rounded-xl border ${idx === 4 ? "md:col-span-2" : ""}`}
//                     />
//                   ))}
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <button
//                     type="button"
//                     onClick={handleNextStep}
//                     className="bg-red-600 w-full md:w-auto text-white px-6 py-3 rounded-xl"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {/* Step 2: Payment */}
//             {activeStep === 2 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl p-6 shadow"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-red-600" />
//                   Payment Information
//                 </h3>
//                 <input
//                   type="text"
//                   name="nameOnCard"
//                   placeholder="Name on Card"
//                   value={formData.nameOnCard}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-xl border mb-3"
//                 />
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   placeholder="Card Number"
//                   value={formData.cardNumber}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-xl border mb-3"
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YY"
//                     value={formData.expiryDate}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-xl border"
//                   />
//                   <input
//                     type="text"
//                     name="cvv"
//                     placeholder="CVV"
//                     value={formData.cvv}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-xl border"
//                   />
//                 </div>
//                 <div className="flex flex-col md:flex-row justify-between mt-4 gap-3">
//                   <button
//                     type="button"
//                     onClick={handlePreviousStep}
//                     className="px-6 py-3 border rounded-xl w-full md:w-auto"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNextStep}
//                     className="bg-red-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {/* Step 3: Review */}
//             {activeStep === 3 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl p-6 shadow"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <Shield className="w-5 h-5 text-red-600" />
//                   Review & Place Order
//                 </h3>
//                 <p className="mb-4 text-gray-700 text-sm md:text-base">
//                   Please review your details and confirm your order.
//                 </p>
//                 <div className="flex flex-col md:flex-row justify-between gap-3 mt-4">
//                   <button
//                     type="button"
//                     onClick={handlePreviousStep}
//                     className="px-6 py-3 border rounded-xl w-full md:w-auto"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={isProcessing}
//                     className="bg-red-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
//                   >
//                     {isProcessing ? "Processing..." : "Place Order"}
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </form>
//         </motion.div>

//         {/* Order Summary */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-4"
//         >
//           <div className="bg-white rounded-2xl p-6 shadow">
//             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//               <Sparkles className="w-5 h-5 text-red-600" />
//               Order Summary
//             </h3>
//             {items.map(item => (
//               <div
//                 key={item._id}
//                 className="flex items-center justify-between border-b py-2 text-sm"
//               >
//                 <div>
//                   <h4 className="font-semibold">{item.name}</h4>
//                   <p className="text-gray-500">
//                     {item.quantity} x ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="font-bold">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//             <div className="flex justify-between mt-3 text-sm">
//               <span>Subtotal</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>Tax</span>
//               <span>${tax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between font-bold text-base mt-2">
//               <span>Total</span>
//               <span>${finalTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }









"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Shield,
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
          headers: { "Content-Type": "application/json" },
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
          className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-6 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Order <span className="text-green-600">Confirmed!</span>
          </h1>
          <p className="text-base text-gray-600 mb-6">
            Thank you for your purchase. Your meats are on the way!
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left">
            <h3 className="font-bold text-gray-900 mb-3">Order Details</h3>
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
            className="bg-red-600 w-full text-white py-3 rounded-xl font-semibold text-lg"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05, x: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-3 text-gray-600 hover:text-red-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </motion.button>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Secure <span className="text-red-600">Checkout</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checkout Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex items-center w-full">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold border-2 ${
                      activeStep >= step
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        activeStep > step ? "bg-red-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs md:text-sm font-medium text-gray-600">
              <span>Shipping</span>
              <span>Payment</span>
              <span>Review</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Shipping */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-red-600" />
                  Shipping Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(["firstName", "lastName", "email", "phone", "address"] as (keyof FormData)[]).map((field, idx) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border ${idx === 4 ? "md:col-span-2" : ""}`}
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-red-600 w-full md:w-auto text-white px-6 py-3 rounded-xl"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-600" />
                  Payment Information
                </h3>
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on Card"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border mb-3"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border mb-3"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="flex flex-col md:flex-row justify-between mt-4 gap-3">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border rounded-xl w-full md:w-auto"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Review & Place Order
                </h3>
                <p className="mb-4 text-gray-700 text-sm md:text-base">
                  Please review your details and confirm your order.
                </p>
                <div className="flex flex-col md:flex-row justify-between gap-3 mt-4">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border rounded-xl w-full md:w-auto"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              Order Summary
            </h3>
            {items.map(item => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-2 text-sm"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-3 text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base mt-2">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
