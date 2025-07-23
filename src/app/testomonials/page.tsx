'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Regular Customer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Fresh Meat Mart has completely changed my cooking experience! The quality of their meats is unmatched in the city. I've been a loyal customer for 3 years now and never been disappointed."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Executive Chef",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "As a professional chef, I'm very particular about my meat suppliers. Fresh Meat Mart consistently provides premium quality cuts with perfect marbling. Their delivery service is also incredibly reliable."
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "Event Planner",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "The customer service at Fresh Meat Mart is exceptional. They helped me select the perfect cuts for my daughter's wedding reception. All my guests were impressed with the quality and flavor of the meat."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Health Coach",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "I love how Fresh Meat Mart offers organic and grass-fed options. As someone who cares about sustainable farming, I appreciate their commitment to quality and ethical sourcing."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval :any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderRating = (rating:any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-red-600" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-red-600" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-red-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 uppercase mb-4">
            Customer Testimonials
          </h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-6xl md:text-8xl font-black text-red-100 opacity-50 z-0 uppercase pointer-events-none">
            Fresh Meat
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative z-10"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all transform hover:scale-110"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all transform hover:scale-110"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Item */}
          <div className="mx-auto max-w-4xl transition-all duration-500 ease-in-out">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                {/* Customer Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-50 shadow-md mb-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Testimonial Content */}
                <div className="relative text-center mb-8">
                  <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed relative">
                    <span className="absolute -top-6 -left-4 text-5xl text-red-300 opacity-50">"</span>
                    {testimonials[currentIndex].content}
                    <span className="absolute -bottom-8 -right-4 text-5xl text-red-300 opacity-50">"</span>
                  </p>
                </div>
                
                {/* Customer Info */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {renderRating(testimonials[currentIndex].rating)}
                  </div>
                  <h3 className="text-xl font-bold text-red-700">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${currentIndex === index ? 'bg-red-600 scale-125' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;








