import { motion } from 'framer-motion';
import Head from 'next/head';

const Deliver= () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Head>
        <title>Premium Meat Delivery | Farm to Table Quality</title>
        <meta name="description" content="Naturally and humanely raised meats and poultry, antibiotic and hormone free, tasting the way nature intended." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="sm:text-center lg:text-left"
              >
                <motion.h1
                  variants={slideInFromLeft}
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span className="block">FRESH & QUALITY</span>
                  <span className="block text-red-600">MEAT DELIVERY</span>
                </motion.h1>
                <motion.p
                  variants={slideInFromLeft}
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Naturally and humanely raised meats and poultry, antibiotic and hormone free, tasting the way nature intended.
                </motion.p>
                <motion.div
                  variants={slideInFromLeft}
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      ORDER NOW
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/about.png"
            alt="Premium quality meats"
          />
        </div>
      </section>

     

      <section className="relative py-20 bg-red-600 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      alt="Fresh meats and poultry"
      className="w-full h-full object-cover object-center opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
  </div>

  {/* Content container */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="text-center"
    >
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        What We Deliver
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        Sourcing the finest meats and poultry from around the corner to around the world.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="mt-12"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'QUALITY CONTROL',
            description: 'Rigorous standards from farm to your table',
            icon: (
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            name: 'TEMPERATURE CONTROL',
            description: 'Maintained at optimal levels for freshness',
            icon: (
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            )
          },
          {
            name: 'QUALITY SAFETY CHECK',
            description: 'Every product inspected for your peace of mind',
            icon: (
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )
          },
          {
            name: 'ANTIBACTERIAL TREATMENT',
            description: 'Advanced hygiene protocols for safety',
            icon: (
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            )
          }
        ].map((feature) => (
          <motion.div
            key={feature.name}
            variants={featureItem}
            className="bg-white/90 backdrop-blur-lg border border-gray-100 shadow-xl rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 rounded-lg p-3">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-red-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span className="block">Ready to experience</span>
            <span className="block text-white">premium quality meat?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                ORDER NOW
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
              >
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Deliver;