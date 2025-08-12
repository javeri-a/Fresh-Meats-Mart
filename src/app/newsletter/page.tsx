// "use client"
// import { useState } from "react";

// export default function Newsletter() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubscribe = async () => {
//     if (!email) return;
//     try {
//       const res = await fetch("/api/subscribe.ts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage("Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className="bg-red-600 text-white p-6 rounded-lg text-center max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
//       <p className="text-sm mb-4">Stay updated with our latest news</p>
//       <input
//         type="email"
//         className="w-full p-2 rounded text-black"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button
//         className="w-full bg-white text-red-600 mt-2 p-2 rounded font-bold"
//         onClick={handleSubscribe}
//       >
//         Subscribe
//       </button>
//       {message && <p className="mt-2 text-sm">{message}</p>}
//     </div>
//   );
// }