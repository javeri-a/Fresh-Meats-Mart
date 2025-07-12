



// 'use client';
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const CountUp = dynamic(() => import('react-countup'), {
//   ssr: false,
//   loading: () => <span>0</span>
// });

// const StatisticsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById('counter-section');
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section 
//       id="counter-section"
//       className="bg-red-50 py-24 px-4 lg:px-8 relative overflow-hidden"
//     >
//       {/* Meat background pattern */}
//       <div 
//         className="absolute inset-0 opacity-10 bg-[length:200px]"
//         style={{ 
//           backgroundImage: "url('/state.png')",
//           mixBlendMode: 'multiply' 
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10 bg-transparent">
//         <h2 className="text-4xl font-bold text-red-600 text-center mb-16 uppercase tracking-wide relative">
//           <span className="bg-red-50 px-6 relative">Our Legacy in Numbers</span>
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-red-600"></div>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Years Experience */}
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
//             <div className="text-red-600 text-6xl font-bold mb-4">
//               {isVisible && (
//                 <CountUp
//                   start={0}
//                   end={40}
//                   duration={3}
//                   suffix="+"
//                 />
//               )}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Years Experience</h3>
//             <p className="text-red-500 font-medium">Quality Assurance</p>
//           </div>

//           {/* Expert Butchers */}
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
//             <div className="text-red-600 text-6xl font-bold mb-4">
//               {isVisible && (
//                 <CountUp
//                   start={0}
//                   end={20}
//                   duration={3}
//                   suffix="+"
//                 />
//               )}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Butchers</h3>
//             <p className="text-red-500 font-medium">Master Craftsmen</p>
//           </div>

//           {/* Happy Customers */}
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
//             <div className="text-red-600 text-6xl font-bold mb-4">
//               {isVisible && (
//                 <CountUp
//                   start={0}
//                   end={500}
//                   duration={3}
//                   suffix="+"
//                 />
//               )}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Happy Customers</h3>
//             <p className="text-red-500 font-medium">Daily Satisfaction</p>
//           </div>

//           {/* Premium Outlets */}
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
//             <div className="text-red-600 text-6xl font-bold mb-4">
//               {isVisible && (
//                 <CountUp
//                   start={0}
//                   end={50}
//                   duration={3}
//                   suffix="+"
//                 />
//               )}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Outlets</h3>
//             <p className="text-red-500 font-medium">Nationwide</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;



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
//       { threshold: 0.2 }
//     );
//     observer.observe(document.getElementById('stats-section')!);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="stats-section" className="relative py-24 bg-gradient-to-b from-red-50 to-white">
//       {/* Premium Meat Texture Background */}
//       <div className="absolute inset-0 opacity-15 bg-[url('/meat-texture.svg')] bg-repeat" />

//       <div className="max-w-8xl mx-auto px-4 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-20 space-y-4">
//           <span className="text-red-600 font-semibold tracking-widest">SINCE 1980</span>
//           <h2 className="text-5xl font-bold text-gray-800 relative pb-6">
//             Meat Excellence in Numbers
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-red-600 rounded-full" />
//           </h2>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//           {[
//             { value: 40, title: "Years of Mastery", subtitle: "Premium Quality Assurance" },
//             { value: 20, title: "Expert Butchers", subtitle: "Traditional Techniques" },
//             { value: 500, title: "Happy Clients", subtitle: "Daily Satisfaction" },
//             { value: 50, title: "Outlets Nationwide", subtitle: "Certified Shops" },
//           ].map((stat, idx) => (
//             <div 
//               key={idx}
//               className="group relative bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-red-50"
//             >
//               {/* Animated Border Effect */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               {/* Meat Icon Decor */}
//               <div className="absolute top-4 right-4 opacity-10">
//                 <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M18.89 5.12c.6 2.38-.2 4.86-2.07 6.03l1.14 3.93c.31 1.07-.14 2.18-1.11 2.7-.97.52-2.14.3-2.86-.5l-1.98-2.25c-.5-.56-1.26-.8-1.98-.6-.72.2-1.34.73-1.62 1.45l-1.3 3.18a.5.5 0 0 1-.94-.1L5.1 12.9c-.3-1.36.54-2.7 1.92-3.03 1.38-.34 2.74.46 3.27 1.7.53-1.24 1.89-2.04 3.27-1.7 1.38.33 2.22 1.67 1.92 3.03l-.95 4.3a.5.5 0 0 1-.97-.06l1.14-4.03c-1.87-1.17-2.67-3.65-2.07-6.03.4-1.55 1.64-2.79 3.19-3.19 2.38-.6 4.86.2 6.03 2.07z"/>
//                 </svg>
//               </div>

//               {/* Counter */}
//               <div className="text-red-600 text-6xl font-bold mb-6 font-montserrat">
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

//               {/* Content */}
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.title}</h3>
//               <p className="text-red-500/90 font-medium">{stat.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;


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

//         {/* Optimized Stats Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8">
//           {[
//             { value: 40, title: "Years of Mastery", subtitle: "Premium Quality Assurance" },
//             { value: 20, title: "Expert Butchers", subtitle: "Traditional Techniques" },
//             { value: 500, title: "Happy Clients", subtitle: "Daily Satisfaction" },
//             { value: 50, title: "Outlets Nationwide", subtitle: "Certified Shops" },
//           ].map((stat, idx) => (
//             <div 
//               key={idx}
//               className="group relative bg-white/95 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-red-50"
//             >
//               {/* Responsive Meat Icon */}
//               <div className="absolute top-2 right-2 md:top-4 md:right-4 opacity-10">
//                 <svg className="w-12 h-12 md:w-16 md:h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M18.89 5.12c.6 2.38-.2 4.86-2.07 6.03l1.14 3.93c.31 1.07-.14 2.18-1.11 2.7-.97.52-2.14.3-2.86-.5l-1.98-2.25c-.5-.56-1.26-.8-1.98-.6-.72.2-1.34.73-1.62 1.45l-1.3 3.18a.5.5 0 0 1-.94-.1L5.1 12.9c-.3-1.36.54-2.7 1.92-3.03 1.38-.34 2.74.46 3.27 1.7.53-1.24 1.89-2.04 3.27-1.7 1.38.33 2.22 1.67 1.92 3.03l-.95 4.3a.5.5 0 0 1-.97-.06l1.14-4.03c-1.87-1.17-2.67-3.65-2.07-6.03.4-1.55 1.64-2.79 3.19-3.19 2.38-.6 4.86.2 6.03 2.07z"/>
//                 </svg>
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
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;






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

//   // Animal SVG components
//   const AnimalIcon = ({ type }) => {
//     const icons = {
//       cow: (
//         <svg viewBox="0 0 100 100" fill="currentColor">
//           <path d="M80,50c0,16.6-13.4,30-30,30S20,66.6,20,50s13.4-30,30-30S80,33.4,80,50z M45,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5 S47.8,35,45,35z M55,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S57.8,35,55,35z M40,60c0-5.5,4.5-10,10-10s10,4.5,10,10H40z"/>
//         </svg>
//       ),
//       goat: (
//         <svg viewBox="0 0 100 100" fill="currentColor">
//           <path d="M75,50c0,13.8-11.2,25-25,25S25,63.8,25,50s11.2-25,25-25S75,36.2,75,50z M40,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5 S42.8,35,40,35z M60,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S62.8,35,60,35z M50,65c-5.5,0-10-4.5-10-10h20 C60,60.5,55.5,65,50,65z"/>
//         </svg>
//       ),
//       lamb: (
//         <svg viewBox="0 0 100 100" fill="currentColor">
//           <path d="M70,50c0,11-9,20-20,20s-20-9-20-20s9-20,20-20S70,39,70,50z M45,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4 S47.2,40,45,40z M55,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S57.2,40,55,40z M50,60c-3.3,0-6-2.7-6-6h12C56,57.3,53.3,60,50,60z"/>
//         </svg>
//       ),
//       chicken: (
//         <svg viewBox="0 0 100 100" fill="currentColor">
//           <path d="M65,50c0,8.3-6.7,15-15,15s-15-6.7-15-15s6.7-15,15-15S65,41.7,65,50z M45,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S46.1,40,45,40z M55,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S56.1,40,55,40z M50,55c-2.8,0-5-2.2-5-5h10C55,52.8,52.8,55,50,55z"/>
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
//               <div className="absolute -bottom-4 -right-4 opacity-10 w-24 h-24 md:w-32 md:h-32">
//                 <AnimalIcon type={stat.animal} />
//               </div>
              
//               {/* Animal Icon */}
//               <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 text-red-600 opacity-30">
//                 <AnimalIcon type={stat.animal} />
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




'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { 
  ssr: false,
  loading: () => <span className="text-red-600">0</span>
});

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const target = document.getElementById('stats-section');
    target && observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Properly defined animal SVG components
  const AnimalIcon = ({ type, className = "" }) => {
    const icons = {
      cow: (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M80,50c0,16.6-13.4,30-30,30S20,66.6,20,50s13.4-30,30-30S80,33.4,80,50z M45,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S47.8,35,45,35z M55,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S57.8,35,55,35z M40,60c0-5.5,4.5-10,10-10s10,4.5,10,10H40z"/>
        </svg>
      ),
      goat: (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M75,50c0,13.8-11.2,25-25,25S25,63.8,25,50s11.2-25,25-25S75,36.2,75,50z M40,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S42.8,35,40,35z M60,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S62.8,35,60,35z M50,65c-5.5,0-10-4.5-10-10h20C60,60.5,55.5,65,50,65z"/>
          <path d="M65,30c0,0-5,5-15,5s-15-5-15-5" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      lamb: (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M70,50c0,11-9,20-20,20s-20-9-20-20s9-20,20-20S70,39,70,50z M45,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S47.2,40,45,40z M55,40c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S57.2,40,55,40z M50,60c-3.3,0-6-2.7-6-6h12C56,57.3,53.3,60,50,60z"/>
          <path d="M60,25c0,0-5,5-10,5s-10-5-10-5" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      chicken: (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M65,50c0,8.3-6.7,15-15,15s-15-6.7-15-15s6.7-15,15-15S65,41.7,65,50z M45,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S46.1,40,45,40z M55,40c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S56.1,40,55,40z M50,55c-2.8,0-5-2.2-5-5h10C55,52.8,52.8,55,50,55z"/>
          <path d="M60,30c0,0-2.5,2.5-10,2.5s-10-2.5-10-2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    };

    return icons[type] || null;
  };

  return (
    <section id="stats-section" className="relative py-12 md:py-24 bg-gradient-to-b from-red-50 to-white">
      {/* Optimized Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/meat-texture.svg')] bg-[size:300px_300px] md:bg-[size:400px_400px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Heading */}
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
          <span className="text-sm md:text-base font-semibold text-red-600 tracking-wider">SINCE 1980</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 relative pb-4 md:pb-6">
            Meat Excellence in Numbers
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-red-600 rounded-full" />
          </h2>
        </div>

        {/* Animal-shaped Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8">
          {[
            { 
              value: 40, 
              title: "Years of Mastery", 
              subtitle: "Premium Quality Assurance",
              animal: "cow",
              color: "bg-red-100"
            },
            { 
              value: 20, 
              title: "Expert Butchers", 
              subtitle: "Traditional Techniques",
              animal: "goat",
              color: "bg-amber-100"
            },
            { 
              value: 500, 
              title: "Happy Clients", 
              subtitle: "Daily Satisfaction",
              animal: "lamb",
              color: "bg-orange-100"
            },
            { 
              value: 50, 
              title: "Outlets Nationwide", 
              subtitle: "Certified Shops",
              animal: "chicken",
              color: "bg-yellow-100"
            },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className={`group relative ${stat.color} p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-white overflow-hidden`}
            >
              {/* Animal Silhouette Background */}
              <div className="absolute -bottom-4 -right-4 opacity-10 w-24 h-24 md:w-32 md:h-32 text-red-600">
                <AnimalIcon type={stat.animal} className="w-full h-full" />
              </div>
              
              {/* Animal Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 text-red-600 opacity-30">
                <AnimalIcon type={stat.animal} className="w-full h-full" />
              </div>

              {/* Responsive Counter */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4 md:mb-6">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    suffix="+"
                    delay={idx * 0.2}
                  />
                )}
              </div>

              {/* Responsive Content */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                {stat.title}
              </h3>
              <p className="text-sm md:text-base text-red-500/90 font-medium">
                {stat.subtitle}
              </p>
              
              {/* Animal Shape Cutout */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;



