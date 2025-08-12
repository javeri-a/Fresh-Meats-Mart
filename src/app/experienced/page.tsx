

// 'use client';
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const CountUp = dynamic(() => import('react-countup'), { 
//   ssr: false,
//   loading: () => <span className="text-red-600">0</span>
// });

// const StatisticsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );
//     const target = document.getElementById('stats-section');
//     target && observer.observe(target);
//     return () => observer.disconnect();
//   }, []);

//   // Properly defined animal SVG components
//   const AnimalIcon = ({ type, className = "" }) => {
//     const icons = {
//       cow: (
//         <svg className={className} viewBox="0 0 100 100" fill="currentColor">
//           <path d="M80,50c0,16.6-13.4,30-30,30S20,66.6,20,50s13.4-30,30-30S80,33.4,80,50z M45,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S47.8,35,45,35z M55,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S57.8,35,55,35z M40,60c0-5.5,4.5-10,10-10s10,4.5,10,10H40z"/>
//         </svg>
//       ),
//       goat: (
//         <svg className={className} viewBox="0 0 100 100" fill="currentColor">
//           <path d="M75,50c0,13.8-11.2,25-25,25S25,63.8,25,50s11.2-25,25-25S75,36.2,75,50z M40,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S42.8,35,40,35z M60,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S62.8,35,60,35z M50,65c-5.5,0-10-4.5-10-10h20C60,60.5,55.5,65,50,65z"/>
//           <path d="M65,30c0,0-5,5-15,5s-15-5-15-5" fill="none" stroke="currentColor" strokeWidth="2"/>
//         </svg>
//       ),
//       lamb: (
//         <svg className={className} viewBox="0 0 100 100" fill="currentColor">
//           <path d="M70,50c0,11-9,20-20,20s-20-9-20-20s9-20,20-20S70,39,70,50z M45,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S47.2,40,45,40z M55,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S57.2,40,55,40z M50,60c-3.3,0-6-2.7-6-6h12C56,57.3,53.3,60,50,60z"/>
//           <path d="M60,25c0,0-5,5-10,5s-10-5-10-5" fill="none" stroke="currentColor" strokeWidth="2"/>
//         </svg>
//       ),
//       chicken: (
//         <svg className={className} viewBox="0 0 100 100" fill="currentColor">
//           <path d="M65,50c0,8.3-6.7,15-15,15s-15-6.7-15-15s6.7-15,15-15S65,41.7,65,50z M45,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S46.1,40,45,40z M55,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S56.1,40,55,40z M50,55c-2.8,0-5-2.2-5-5h10C55,52.8,52.8,55,50,55z"/>
//           <path d="M60,30c0,0-2.5,2.5-10,2.5s-10-2.5-10-2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
//         </svg>
//       )
//     };

//     return icons[type] || null;
//   };

//   return (
//     <section id="stats-section" className="relative py-12 md:py-24 bg-gradient-to-b from-red-50 to-white">
//       {/* Optimized Background Texture */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/meat-texture.svg')] bg-[size:300px_300px] md:bg-[size:400px_400px]" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Responsive Heading */}
//         <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
//           <span className="text-sm md:text-base font-semibold text-red-600 tracking-wider">SINCE 1980</span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 relative pb-4 md:pb-6">
//             Meat Excellence in Numbers
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-red-600 rounded-full" />
//           </h2>
//         </div>

//         {/* Animal-shaped Stats Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8">
//           {[
//             { 
//               value: 40, 
//               title: "Years of Mastery", 
//               subtitle: "Premium Quality Assurance",
//               animal: "cow",
//               color: "bg-red-100"
//             },
//             { 
//               value: 20, 
//               title: "Expert Butchers", 
//               subtitle: "Traditional Techniques",
//               animal: "goat",
//               color: "bg-amber-100"
//             },
//             { 
//               value: 500, 
//               title: "Happy Clients", 
//               subtitle: "Daily Satisfaction",
//               animal: "lamb",
//               color: "bg-orange-100"
//             },
//             { 
//               value: 50, 
//               title: "Outlets Nationwide", 
//               subtitle: "Certified Shops",
//               animal: "chicken",
//               color: "bg-yellow-100"
//             },
//           ].map((stat, idx) => (
//             <div 
//               key={idx}
//               className={`group relative ${stat.color} p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-white overflow-hidden`}
//             >
//               {/* Animal Silhouette Background */}
//               <div className="absolute -bottom-4 -right-4 opacity-10 w-24 h-24 md:w-32 md:h-32 text-red-600">
//                 <AnimalIcon type={stat.animal} className="w-full h-full" />
//               </div>
              
//               {/* Animal Icon */}
//               <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 text-red-600 opacity-30">
//                 <AnimalIcon type={stat.animal} className="w-full h-full" />
//               </div>

//               {/* Responsive Counter */}
//               <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4 md:mb-6">
//                 {isVisible && (
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={3}
//                     suffix="+"
//                     delay={idx * 0.2}
//                   />
//                 )}
//               </div>

//               {/* Responsive Content */}
//               <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
//                 {stat.title}
//               </h3>
//               <p className="text-sm md:text-base text-red-500/90 font-medium">
//                 {stat.subtitle}
//               </p>
              
//               {/* Animal Shape Cutout */}
//               <div className="absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full opacity-20"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;



