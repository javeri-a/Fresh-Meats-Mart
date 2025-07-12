import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-red-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-600 text-5xl mb-4">🍖</div>
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              Premium Quality Meat
            </h3>
            <p className="text-gray-600">
              We source only the finest cuts of meat, ensuring freshness and
              quality in every bite.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-red-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-600 text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              Fast & Reliable Delivery
            </h3>
            <p className="text-gray-600">
              Get your meat delivered fresh and on time, right to your doorstep.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-red-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-600 text-5xl mb-4">💯</div>
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              100% Satisfaction Guaranteed
            </h3>
            <p className="text-gray-600">
              We stand by our products. If you're not satisfied, we'll make it
              right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;