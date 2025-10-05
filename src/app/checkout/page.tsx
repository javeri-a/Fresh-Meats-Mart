

"use client";

import { useEffect, useState, useCallback } from "react";
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

  // Memoized cart loading
  const loadCart = useCallback(() => {
    try {
      const cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cartItems.length === 0) {
        router.push("/cart");
        return;
      }
      setItems(cartItems);
      
      // Efficient total calculation
      let calculatedTotal = 0;
      for (let i = 0; i < cartItems.length; i++) {
        calculatedTotal += cartItems[i].price * cartItems[i].quantity;
      }
      setTotal(calculatedTotal);
    } catch (err) {
      console.error("Failed to load cart");
      router.push("/cart");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => setActiveStep(prev => Math.min(prev + 1, 3));
  const handlePreviousStep = () => setActiveStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;
    
    setIsProcessing(true);

    // Optimized API simulation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      localStorage.removeItem("cart");
      setOrderSuccess(true);
    } catch (err) {
      alert("Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const tax = total * 0.08;
  const finalTotal = total + tax;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 px-4 bg-white">
        <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl text-center border border-red-100">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order <span className="text-green-600">Confirmed!</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your meats are on the way!
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border">
            <h3 className="font-bold text-gray-900 mb-4 text-xl">Order Details</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-red-600 text-lg">${finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="text-green-600 font-semibold">Next Day</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="bg-red-600 w-full text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6 text-gray-600 hover:text-red-600 transition-colors border border-gray-200"
          >
            <span className="text-xl">←</span>
            Back to Cart
          </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Secure <span className="text-red-600">Checkout</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-red-100">
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map(step => (
                  <div key={step} className="flex items-center w-full">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all ${
                        activeStep >= step
                          ? "bg-red-600 border-red-600 text-white shadow-lg"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`flex-1 h-2 mx-4 rounded-full transition-all ${
                          activeStep > step ? "bg-red-600" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-600">
                <span>Shipping</span>
                <span>Payment</span>
                <span>Review</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Shipping */}
              {activeStep === 1 && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">👤</span>
                    Shipping Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["firstName", "lastName", "email", "phone", "address"].map((field, idx) => (
                      <input
                        key={field}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field.replace(/([A-Z])/g, " $1")}
                        value={formData[field as keyof FormData]}
                        onChange={handleInputChange}
                        className={`w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-lg ${
                          idx === 4 ? "md:col-span-2" : ""
                        }`}
                        required
                      />
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-red-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {activeStep === 2 && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">💳</span>
                    Payment Information
                  </h3>
                  {["nameOnCard", "cardNumber"].map(field => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                      value={formData[field as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-lg mb-4"
                      required
                    />
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["expiryDate", "cvv"].map(field => (
                      <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={field.replace(/([A-Z])/g, " $1")}
                        value={formData[field as keyof FormData]}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-lg"
                        required
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-8 gap-6">
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-lg hover:border-red-500 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {activeStep === 3 && (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">🔒</span>
                    Review & Place Order
                  </h3>
                  <p className="text-xl text-gray-700 mb-8">
                    Please review your details and confirm your order.
                  </p>
                  <div className="flex justify-between gap-6">
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-lg hover:border-red-500 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors shadow-lg"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-3">
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        "Place Order"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">📦</span>
                Order Summary
              </h3>
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {items.map(item => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b border-gray-200 pb-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                      <p className="text-gray-600">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span className="text-red-600">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}