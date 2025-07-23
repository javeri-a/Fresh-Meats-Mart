// 'use client';

// import Image from 'next/image';

// interface ProductCardProps {
//   slug: string;
//   title: string;
//   imageUrl: string;
//   weight?: number;
//   price?: number;
//   discountPrice?: number;
//   rating?: number;
// }

// export default function ProductCard({
//   slug,
//   title,
//   imageUrl,
//   weight,
//   price,
//   discountPrice,
//   rating,
// }: ProductCardProps) {
//   // Safeguards
//   const safePrice = typeof price === 'number' ? price : 0;
//   const safeDiscount = typeof discountPrice === 'number' ? discountPrice : 0;
//   const safeRating = typeof rating === 'number' ? rating : 0;
//   const safeWeight = typeof weight === 'number' ? weight : 0;

//   const displayPrice =
//     safeDiscount && safeDiscount < safePrice ? safeDiscount : safePrice;

//   return (
//     <div className="border rounded-lg shadow hover:shadow-md transition p-4">
//       <a href={`/product/${slug}`}>
//         <div className="relative w-full h-48 mb-4">
//           <Image
//             src={imageUrl}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-md"
//           />
//         </div>
//         <h2 className="text-lg font-semibold mb-2">{title}</h2>

//         <p className="text-sm text-gray-600 mb-1">
//           Weight: {safeWeight} Kg
//         </p>

//         <div className="flex items-center gap-2 mb-1">
//           {safeDiscount && safeDiscount < safePrice ? (
//             <>
//               <span className="text-red-600 font-bold">
//                 ${safeDiscount.toFixed(2)}
//               </span>
//               <span className="line-through text-gray-500">
//                 ${safePrice.toFixed(2)}
//               </span>
//             </>
//           ) : (
//             <span className="text-black font-bold">
//               ${safePrice.toFixed(2)}
//             </span>
//           )}
//         </div>

//         <p className="text-yellow-500">
//           ⭐ {safeRating ? safeRating.toFixed(1) : 'N/A'} / 5
//         </p>
//       </a>
//     </div>
//   );
// }











'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  weight?: number;
  price?: number;
  discountPrice?: number;
  rating?: number;
}

export default function ProductCard({
  slug,
  title,
  imageUrl,
  weight,
  price,
  discountPrice,
  rating,
}: ProductCardProps) {
  const safePrice = typeof price === 'number' ? price : 0;
  const safeDiscount = typeof discountPrice === 'number' ? discountPrice : 0;
  const safeRating = typeof rating === 'number' ? rating : 0;
  const safeWeight = typeof weight === 'number' ? weight : 0;

  const displayPrice =
    safeDiscount && safeDiscount < safePrice ? safeDiscount : safePrice;

  return (
    <motion.div
      className="border rounded-lg shadow hover:shadow-md transition p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} // ✅ Only two keyframes
      transition={{ type: 'spring', stiffness: 100, damping: 20 }} // ✅ Valid spring
      whileHover={{ scale: 1.03 }} // ✅ Single value — fine
    >
      <Link href={`/product/${slug}`}>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={imageUrl} // Fallback image
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        <p className="text-sm text-gray-600 mb-1">
          Weight: {safeWeight} Kg
        </p>

        <div className="flex items-center gap-2 mb-1">
          {safeDiscount && safeDiscount < safePrice ? (
            <>
              <span className="text-red-600 font-bold">
                ${safeDiscount.toFixed(2)}
              </span>
              <span className="line-through text-gray-500">
                ${safePrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-black font-bold">
              ${safePrice.toFixed(2)}
            </span>
          )}
        </div>

        <p className="text-yellow-500">
          ⭐ {safeRating ? safeRating.toFixed(1) : 'N/A'} / 5
        </p>
      </Link>
    </motion.div>
  );
}
