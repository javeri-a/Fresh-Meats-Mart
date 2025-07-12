



// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// // ✅ Type for Props
// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// // ✅ Type for MeatProduct
// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   description?: string;
//   imageUrl: string;
//   rating?: number;
//   category?: string;
//   isPremium?: boolean;
//   tags?: string[];
//   weight?: string[];
// }

// // ✅ The dynamic page
// export default async function ProductPage({ params }: ProductPageProps) {
//   const { id } = params;

//   // ✅ Sanity query for single product by id
//   const query = `*[_type == "meat" && _id == "${id}"][0] {
//     _id,
//     name,
//     price,
//     originalPrice,
//     description,
//     "imageUrl": image.asset->url,
//     rating,
//     category,
//     isPremium,
//     tags,
//     weight
//   }`;

//   const product: MeatProduct = await client.fetch(query);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//       <div className="mb-6">
//         <Image
//           src={urlFor(product.imageUrl).url()}
//           alt={product.name}
//           width={600}
//           height={600}
//           className="rounded-lg"
//         />
//       </div>
//       <p className="text-xl text-red-600 mb-2">
//         PKR {product.price.toLocaleString()}
//       </p>
//       {product.originalPrice && (
//         <p className="line-through text-gray-500">
//           PKR {product.originalPrice.toLocaleString()}
//         </p>
//       )}
//       {product.description && (
//         <p className="mt-4 text-gray-700">{product.description}</p>
//       )}
//     </div>
//   );
// }













"use client";



"use client"
import AddToCartButton from "@/app/components/AddToCartButton/page";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// ✅ Props
interface ProductPageProps {
  params: {
    id: string;
  };
}

// ✅ MeatProduct
interface MeatProduct {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  imageUrl: string;
  rating?: number;
  category?: string;
  isPremium?: boolean;
  tags?: string[];
  weight?: string[];
}

// ✅ Dynamic Page
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const query = `*[_type == "meat" && _id == "${id}"][0] {
    _id,
    name,
    price,
    originalPrice,
    description,
    "imageUrl": image.asset->url,
    rating,
    category,
    isPremium,
    tags,
    weight
  }`;

  const product: MeatProduct = await client.fetch(query);

  if (!product) {
    return <div className="text-center text-gray-600 py-12">Product not found.</div>;
  }

  const discount =
    product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : 0;

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Product Image */}
        <div className="relative group">
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            width={800}
            height={800}
            className="rounded-2xl shadow-2xl object-cover w-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Premium Badge */}
          {product.isPremium && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              PREMIUM
            </div>
          )}

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Category */}
          {product.category && (
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
          )}

          {/* Price */}
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-red-700">
              PKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="ml-4 line-through text-xl text-gray-500">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
          )}

          {/* Weight Tags */}
          {product.weight && product.weight.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Available Weights:</h3>
              <div className="flex flex-wrap gap-2">
                {product.weight.map((w) => (
                  <span
                    key={w}
                    className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          {/* <button
          
            className="inline-block w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-200"
          >
            Add to Cart
          </button> */}


          {/* <AddToCartButton
  product={{
    _id: product._id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
  }}
/> */}
<AddToCartButton
product={{
    _id: product._id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
  }}
/>
        </div>
      </div>
    </div>
  );
}










// import { useRouter } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// // ✅ Props
// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// // ✅ MeatProduct
// interface MeatProduct {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   description?: string;
//   imageUrl: string;
//   rating?: number;
//   category?: string;
//   isPremium?: boolean;
//   tags?: string[];
//   weight?: string[];
// }

// // ✅ INLINE CLIENT BUTTON ✅
// function AddToCartInlineButton({ product }: { product: MeatProduct }) {
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const existingIndex = cart.findIndex((item: any) => item._id === product._id);

//     if (existingIndex !== -1) {
//       cart[existingIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     router.push("/cart");
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="inline-block w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-200"
//     >
//       Add to Cart
//     </button>
//   );
// }

// // export default async function ProductPage({ params }: ProductPageProps) {
// //   const { id } = params;

// //   const query = `*[_type == "meat" && _id == "${id}"][0] {
// //     _id,
// //     name,
// //     price,
// //     originalPrice,
// //     description,
// //     "imageUrl": image.asset->url,
// //     rating,
// //     category,
// //     isPremium,
// //     tags,
// //     weight
// //   }`;

// //   const product: MeatProduct = await client.fetch(query);

// //   if (!product) {
// //     return <div className="text-center text-gray-600 py-12">Product not found.</div>;
// //   }

// //   const discount =
// //     product.originalPrice
// //       ? Math.round(
// //           ((product.originalPrice - product.price) / product.originalPrice) * 100
// //         )
// //       : 0;

// //   return (
// //     <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //         {/* Product Image */}
// //         <div className="relative group">
// //           <Image
// //             src={urlFor(product.imageUrl).url()}
// //             alt={product.name}
// //             width={800}
// //             height={800}
// //             className="rounded-2xl shadow-2xl object-cover w-full transition-transform duration-300 group-hover:scale-105"
// //           />

// //           {/* Premium Badge */}
// //           {product.isPremium && (
// //             <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
// //               PREMIUM
// //             </div>
// //           )}

// //           {/* Discount Badge */}
// //           {discount > 0 && (
// //             <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
// //               {discount}% OFF
// //             </div>
// //           )}
// //         </div>

// //         {/* Product Details */}
// //         <div>
// //           <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
// //             {product.name}
// //           </h1>

// //           {product.category && (
// //             <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
// //               {product.category}
// //             </span>
// //           )}

// //           <div className="flex items-baseline mb-6">
// //             <span className="text-4xl font-bold text-red-700">
// //               PKR {product.price.toLocaleString()}
// //             </span>
// //             {product.originalPrice && (
// //               <span className="ml-4 line-through text-xl text-gray-500">
// //                 PKR {product.originalPrice.toLocaleString()}
// //               </span>
// //             )}
// //           </div>

// //           {product.description && (
// //             <p className="text-gray-700 text-lg leading-relaxed mb-6">
// //               {product.description}
// //             </p>
// //           )}

// //           {product.weight && product.weight.length > 0 && (
// //             <div className="mb-6">
// //               <h3 className="text-sm font-semibold text-gray-800 mb-2">Available Weights:</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {product.weight.map((w) => (
// //                   <span
// //                     key={w}
// //                     className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
// //                   >
// //                     {w}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* ✅ Inline Add to Cart */}
// //           <AddToCartInlineButton product={product} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
