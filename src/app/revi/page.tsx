


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Review {
//   id: string;
//   name: string;
//   email: string;
//   comment: string;
//   rating: number;
//   timestamp: string;
// }

// export default function ReviewsSection() {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     comment: "",
//     rating: 5,
//   });

//   useEffect(() => {
//     const storedReviews = localStorage.getItem("meatMartReviews");
//     if (storedReviews) {
//       setReviews(JSON.parse(storedReviews));
//     }
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.comment) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newReview: Review = {
//       id: Date.now().toString(),
//       ...formData,
//       timestamp: new Date().toISOString(),
//     };

//     const updatedReviews = [newReview, ...reviews];

//     setReviews(updatedReviews);
//     localStorage.setItem("meatMartReviews", JSON.stringify(updatedReviews));

//     setFormData({ name: "", email: "", comment: "", rating: 5 });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleDelete = (id: string, email: string) => {
//     const storedEmail = formData.email;
//     if (storedEmail !== email) {
//       alert("You can only delete your own reviews!");
//       return;
//     }
//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//     localStorage.setItem("meatMartReviews", JSON.stringify(updatedReviews));
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-8">
//       <h2 className="text-4xl font-extrabold text-red-600 text-center mb-6">Customer Reviews</h2>

//       {/* Review Form */}
//       <motion.form
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         onSubmit={handleSubmit}
//         className="mb-8 p-5 bg-white rounded-xl shadow-lg border border-red-300"
//       >
//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold">Review</label>
//           <textarea
//             name="comment"
//             value={formData.comment}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md h-24"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-semibold">Rating</label>
//           <select name="rating" value={formData.rating} onChange={handleChange} className="w-full p-2 border rounded-md">
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>
//                 {num} Star{num > 1 ? "s" : ""}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition w-full font-bold"
//         >
//           Submit Review
//         </button>
//       </motion.form>

//       {/* Reviews List */}
//       <div className="space-y-6">
//         <AnimatePresence>
//           {reviews.map((review) => (
//             <motion.div
//               key={review.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//               className="p-5 bg-white rounded-xl shadow-lg border border-red-300 flex flex-col"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="bg-red-200 text-red-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg font-bold">
//                     {review.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{review.name}</h3>
//                     <p className="text-sm text-gray-500">{new Date(review.timestamp).toLocaleDateString()}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-1 text-yellow-500">
//                   {"⭐".repeat(review.rating)}
//                 </div>
//               </div>

//               <p className="text-gray-600 mt-3">{review.comment}</p>

//               {formData.email === review.email && (
//                 <button
//                   onClick={() => handleDelete(review.id, review.email)}
//                   className="mt-3 bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition self-end"
//                 >
//                   Delete Review
//                 </button>
//               )}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Delete All Button */}
//       {reviews.length > 0 && (
//         <button
//           onClick={() => {
//             setReviews([]);
//             localStorage.removeItem("meatMartReviews");
//           }}
//           className="mt-6 bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-900 transition w-full font-bold"
//         >
//           ❌ Delete All Reviews
//         </button>
//       )}
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Review {
//   id: string;
//   name: string;
//   email: string;
//   comment: string;
//   rating: number;
//   timestamp: string;
// }

// const starVariants = {
//   hidden: { scale: 0, rotate: -90 },
//   visible: (i: number) => ({
//     scale: 1,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       delay: i * 0.1
//     }
//   })
// };

// export default function Review() {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     comment: "",
//     rating: 5,
//   });
//   const [shakeForm, setShakeForm] = useState(false);

//   useEffect(() => {
//     const storedReviews = localStorage.getItem("meatMartReviews");
//     if (storedReviews) setReviews(JSON.parse(storedReviews));
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.comment) {
//       setShakeForm(true);
//       setTimeout(() => setShakeForm(false), 600);
//       return;
//     }

//     const newReview: Review = {
//       id: Date.now().toString(),
//       ...formData,
//       timestamp: new Date().toISOString(),
//     };

//     const updatedReviews = [newReview, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem("meatMartReviews", JSON.stringify(updatedReviews));
//     setFormData({ name: "", email: "", comment: "", rating: 5 });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDelete = (id: string, email: string) => {
//     if (formData.email !== email) {
//       alert("You can only delete your own reviews!");
//       return;
//     }
//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//     localStorage.setItem("meatMartReviews", JSON.stringify(updatedReviews));
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-8 bg-gradient-to-b from-red-50/20 to-transparent">
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-extrabold text-red-600 text-center mb-6 drop-shadow-md"
//       >
//         Customer Reviews
//       </motion.h2>

//       {/* Review Form */}
//       <motion.form
//         key="form"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ 
//           opacity: 1, 
//           scale: 1,
//           x: shakeForm ? [0, -15, 15, -15, 0] : 0
//         }}
//         transition={{ 
//           duration: shakeForm ? 0.6 : 0.3,
//           type: "spring"
//         }}
//         onSubmit={handleSubmit}
//         className="mb-8 p-6 bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl border border-red-200/50 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mb-4"
//         >
//           <label className="block text-gray-700 font-semibold mb-2">Name</label>
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-3 border-2 border-red-100 rounded-lg focus:border-red-300 focus:ring-2 focus:ring-red-200 outline-none transition"
//             required
//           />
//         </motion.div>

//         {/* Repeat similar motion.div wrappers for other form fields */}

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-red-200/50 transition-all"
//         >
//           Submit Review ✨
//         </motion.button>
//       </motion.form>

//       {/* Reviews List */}
//       <div className="space-y-6">
//         <AnimatePresence mode="popLayout">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={review.id}
//               layout
//               initial={{ opacity: 0, scale: 0.8, y: 50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.8, x: -50 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-red-100/50 hover:border-red-200 transition-all"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <motion.div 
//                   className="flex items-center"
//                   initial={{ x: -20 }}
//                   animate={{ x: 0 }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="bg-gradient-to-br from-red-400 to-orange-400 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold shadow-md"
//                   >
//                     {review.name.charAt(0)}
//                   </motion.div>
//                   <div>
//                     <h3 className="font-bold text-gray-800">{review.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       {new Date(review.timestamp).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div 
//                   className="flex"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   {[...Array(review.rating)].map((_, i) => (
//                     <motion.span
//                       key={i}
//                       custom={i}
//                       variants={starVariants}
//                       initial="hidden"
//                       animate="visible"
//                       className="text-2xl"
//                     >
//                       ⭐
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               </div>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-gray-600 mb-4 pl-2 border-l-4 border-red-200/50"
//               >
//                 {review.comment}
//               </motion.p>

//               {formData.email === review.email && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex justify-end"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handleDelete(review.id, review.email)}
//                     className="px-4 py-2 bg-red-500/10 text-red-600 rounded-md hover:bg-red-500/20 transition-colors flex items-center gap-2"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     Delete
//                   </motion.button>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {reviews.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mt-8 flex justify-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setReviews([]);
//               localStorage.removeItem("meatMartReviews");
//             }}
//             className="bg-red-500/10 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/20 transition-colors flex items-center gap-2"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//               />
//             </svg>
//             Clear All Reviews
//           </motion.button>
//         </motion.div>
//       )}
//     </section>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Trash2, X } from 'lucide-react';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = () => {
    if (!name || !email || !comment) return;
    const newReview = { id: Date.now(), name, email, comment, rating, likes: 0, dislikes: 0 };
    setReviews([newReview, ...reviews]);
    setName('');
    setEmail('');
    setComment('');
    setRating(5);
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleLike = (id) => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, likes: review.likes + 1 } : review)));
  };

  const handleDislike = (id) => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, dislikes: review.dislikes + 1 } : review)));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Open Reviews
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white text-red-700 p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Reviews</h2>
              <button onClick={() => setIsOpen(false)} className="text-red-500 hover:text-red-700">
                <X size={24} />
              </button>
            </div>

            {/* Input Fields */}
            <input className="w-full p-2 my-2 border rounded text-red-700" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-full p-2 my-2 border rounded text-red-700" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className="w-full p-2 my-2 border rounded text-red-700" placeholder="Your Review" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <div className="flex justify-between items-center">
              <span>Rating: {rating} ⭐</span>
              <input type="range" min="1" max="5" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
            </div>
            <button onClick={handleAddReview} className="mt-3 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Add Review
            </button>

            {/* Review List */}
            <div className="mt-5 space-y-4 max-h-52 overflow-y-auto">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="bg-red-50 p-4 rounded-lg shadow flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between">
                    <span className="font-bold">{review.name}</span>
                    <button onClick={() => handleDelete(review.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-red-600">{review.comment}</p>
                  <div className="flex items-center gap-2">
                    <span>{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <button onClick={() => handleLike(review.id)} className="flex items-center text-green-500 hover:text-green-700">
                      <ThumbsUp size={18} /> <span className="ml-1">{review.likes}</span>
                    </button>
                    <button onClick={() => handleDislike(review.id)} className="flex items-center text-red-500 hover:text-red-700">
                      <ThumbsDown size={18} /> <span className="ml-1">{review.dislikes}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
