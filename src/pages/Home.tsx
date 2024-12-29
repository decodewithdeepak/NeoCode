import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import { testimonials } from '../data/testimonials';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their careers with NeoCode
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Call-To-Action (CTA) Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative px-8 py-20 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your DSA Journey?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already improving their problem-solving skills with NeoCode.
              </p>
              <Link
                to="/login"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-2 border-transparent hover:border-indigo-500 dark:hover:border-indigo-400"
              >
                <span className="relative font-medium">
                  <span className="flex items-center">
                    Sign In
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
