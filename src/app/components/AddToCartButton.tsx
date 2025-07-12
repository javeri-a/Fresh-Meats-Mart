"use client";

import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const router = useRouter();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex((item: any) => item._id === product._id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // ✅ Add hone ke baad redirect
    router.push("/cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="inline-block w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-200"
    >
      Add to Cart
    </button>
  );
}
