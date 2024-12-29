import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: Array<{
    content: string;
    author: string;
    role: string;
    avatar: string;
    rating: number;
  }>;
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 350; // Width of each card + gap
  const autoScrollInterval = 3000; // Time between scrolls in milliseconds

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      
      // Smooth scroll to next card
      scroll.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });

      // If we're at the end, quickly reset to start
      if (nextIndex === 0) {
        // Wait for smooth scroll to finish before resetting
        setTimeout(() => {
          scroll.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        }, 500);
      }

      setCurrentIndex(nextIndex);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  // Pause animation on hover
  const handleMouseEnter = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.style.scrollBehavior = 'auto';
    }
  };

  const handleMouseLeave = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.style.scrollBehavior = 'smooth';
    }
  };

  return (
    <div className="relative group">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original testimonials */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`original-${index}`}
            className="min-w-[350px] transition-transform duration-300 hover:scale-105"
            style={{ transform: `translateX(0)` }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
        {/* Duplicate first few testimonials for smooth infinite scroll */}
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={`duplicate-${index}`}
            className="min-w-[350px] transition-transform duration-300 hover:scale-105"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-gray-900 to-transparent w-12 z-10" />
      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white dark:from-gray-900 to-transparent w-12 z-10" />
    </div>
  );
}