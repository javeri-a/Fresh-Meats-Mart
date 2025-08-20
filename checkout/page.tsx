// pages/checkout.js
import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", form);
    // later -> API call to place order
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-10">
      <div className="w-full max-w-2xl bg-red-600 rounded-2xl shadow-2xl p-8 text-white">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🥩 Fresh Meat Mart Checkout
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Info */}
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Delivery Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Payment Options */}
          <div>
            <label className="block mb-2 font-semibold">Payment Method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={form.paymentMethod === "COD"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Easypaisa"
                  checked={form.paymentMethod === "Easypaisa"}
                  onChange={handleChange}
                />
                Easypaisa
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="HBL"
                  checked={form.paymentMethod === "HBL"}
                  onChange={handleChange}
                />
                HBL
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-red-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
