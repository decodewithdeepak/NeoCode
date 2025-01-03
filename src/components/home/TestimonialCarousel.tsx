import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default for mobile
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  // Looping testimonials for seamless effect
  const loopTestimonials = [
    ...testimonials.slice(-slidesToShow), // Clone last few slides
    ...testimonials,
    ...testimonials.slice(0, slidesToShow), // Clone first few slides
  ];

  // Handle responsive slidesToShow
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3); // 1 on small screens, 3 on larger screens
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Next slide handler
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Previous slide handler
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => handleNext(), 3000); // Auto slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  // Reset currentIndex after transitions
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0); // Reset to first slide (no transition)
    } else if (currentIndex < 0) {
      setCurrentIndex(totalSlides - 1); // Reset to last slide (no transition)
    }
  };

  // Active dot index
  const activeDotIndex = (currentIndex + totalSlides) % totalSlides;

  // Calculate the translation for sliding effect
  const translateX = -(currentIndex + slidesToShow) * (100 / slidesToShow);

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 overflow-hidden">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Testimonial Slider */}
        <div className="overflow-hidden w-full">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
            style={{
              transform: `translateX(${translateX}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="flex-shrink-0 px-2 py-2"
                style={{
                  width: `${100 / slidesToShow}%`,
                }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl h-full">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'stroke-current'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3 overflow-visible">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeDotIndex === index
              ? 'bg-white border-indigo-600 shadow-lg scale-125 ring-2 ring-indigo-300'
              : 'bg-gray-200 border-gray-400 opacity-80 hover:opacity-100'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
            style={{
              marginBottom: '0.5rem',  // Add more space below the dot
            }}
          />
        ))}
      </div>

    </div>
  );
}
