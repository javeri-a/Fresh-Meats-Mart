'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.png"
            alt="Butcher Shop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-red-900/40" />
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting Meat Excellence <br />
            <span className="text-red-300">Since 1980</span>
          </h1>
          <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-xl hover:bg-red-700 transition-colors">
            Discover Our Legacy
          </div>
        </motion.div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-red-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Meat Journey
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/state.png"
                alt="Original Shop"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white p-6">
                <h3 className="text-2xl font-bold">1980 - Humble Beginnings</h3>
              </div>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: "1995",
                  title: "First Expansion",
                  content: "Opened 3 new locations across the city",
                  image: "/1.png"
                },
                {
                  year: "2010",
                  title: "Organic Certification",
                  content: "Received national organic certification",
                  image: "/about.png"
                },
                {
                  year: "2020",
                  title: "Modern Facilities",
                  content: "Built state-of-the-art processing plant",
                  image: "/1.png"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  className="flex gap-6 items-start"
                >
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.year} - {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Master Butchers
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Carnelli",
                role: "Head Butcher",
                experience: "35+ Years",
                image: "/1.png"
              },
              {
                name: "Mike Tenderloin",
                role: "Meat Curator",
                experience: "28+ Years",
                image: "/about.png"
              },
              {
                name: "Sarah Brisket",
                role: "Quality Control",
                experience: "22+ Years",
                image: "/state.png"
              },
              {
                name: "Alex Porterhouse",
                role: "Operations Head",
                experience: "18+ Years",
                image: "/1.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white p-6">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-red-200">{member.role}</p>
                  <p className="mt-2 font-medium">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden"
            >
              <Image
                src="/state.png"
                alt="Quality Control"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-12">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
                <div className="w-24 h-1 bg-white" />
              </motion.div>

              {[
                {
                  title: "Traditional Craftsmanship",
                  icon: "🥩",
                  content: "Preserving century-old butchering techniques"
                },
                {
                  title: "Premium Quality",
                  icon: "🌟",
                  content: "Only USDA prime graded meats"
                },
                {
                  title: "Sustainable Sourcing",
                  icon: "🌱",
                  content: "Ethical farming partnerships"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  className="flex gap-4 items-start"
                >
                  <span className="text-4xl">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                    <p className="text-red-100">{value.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;






// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const PremiumAbout = () => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="bg-white">
//       {/* Minimalist Hero */}
//       <section className="relative h-screen flex items-center justify-center bg-red-900">
//         <div className="absolute inset-0 z-0 opacity-20">
//           <Image
//             src="/meat-texture-dark.jpg"
//             alt="Meat texture"
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           className="relative z-10 text-center px-4"
//         >
//           <div className="mb-8">
//             <Image
//               src="/state.png"
//               alt="Logo"
//               width={120}
//               height={120}
//               className="mx-auto"
//             />
//           </div>
//           <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
//             Meat <span className="text-red-200">Perfected</span>
//           </h1>
//           <p className="text-xl text-red-200 max-w-2xl mx-auto">
//             Four decades of relentless pursuit in perfecting the butcher's craft
//           </p>
//         </motion.div>
//       </section>

//       {/* Philosophy Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
//           >
//             <Image
//               src="/state.png"
//               alt="Butcher at work"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-red-900/90 text-white p-8">
//               <span className="text-sm tracking-widest">EST. 1980</span>
//               <h2 className="text-4xl font-bold mt-2">Handcrafted Precision</h2>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="text-red-900">
//               <span className="text-sm font-semibold tracking-widest">OUR CRAFT</span>
//               <h3 className="text-4xl font-bold mt-2">The Art of Butchery</h3>
//             </div>
            
//             <p className="text-gray-600 text-lg leading-relaxed">
//               In an era of mass production, we maintain traditional butchering techniques 
//               passed down through generations. Each cut is a masterpiece, carefully 
//               crafted by artisans with decades of experience.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { value: '40+', label: 'Years Expertise' },
//                 { value: '0%', label: 'Compromise' },
//                 { value: '100%', label: 'Natural' },
//                 { value: '20+', label: 'Master Butchers' }
//               ].map((item, index) => (
//                 <div 
//                   key={index}
//                   className="p-6 border border-red-100 rounded-xl hover:bg-red-50 transition-colors"
//                 >
//                   <div className="text-3xl font-bold text-red-900">{item.value}</div>
//                   <div className="text-gray-600 mt-1">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="bg-red-50 py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl font-bold text-red-900 mb-4">
//               From Pasture to Plate
//             </h2>
//             <div className="w-24 h-1 bg-red-900 mx-auto" />
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Ethical Sourcing",
//                 content: "Partnering with local organic farms",
//                 image: "/1.png"
//               },
//               {
//                 title: "Master Butchery",
//                 content: "48-hour dry aging process",
//                 image: "/about.png"
//               },
//               {
//                 title: "Quality Control",
//                 content: "Triple inspection standard",
//                 image: "/1.png"
//               }
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeUp}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <Image
//                   src={step.image}
//                   alt={step.title}
//                   fill
//                   className="object-cover transform group-hover:scale-105 transition-transform"
//                 />
//                 <div className="absolute inset-0 bg-red-900/60 flex items-end p-8">
//                   <div className="text-white">
//                     <h3 className="text-2xl font-bold">{step.title}</h3>
//                     <p className="mt-2 text-red-100">{step.content}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Signature Section */}
//       <section className="relative h-[600px] flex items-center bg-red-900">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             className="space-y-8"
//           >
//             <h2 className="text-5xl font-bold text-white">
//               Taste the Difference <br />
//               <span className="text-red-200">of Perfection</span>
//             </h2>
//             <p className="text-xl text-red-200 max-w-2xl mx-auto">
//               Experience meat the way nature intended - unprocessed, 
//               carefully curated, and expertly prepared
//             </p>
//             <button className="bg-white text-red-900 px-8 py-4 rounded-full font-bold hover:bg-red-100 transition-colors">
//               Visit Our Butchery
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PremiumAbout;