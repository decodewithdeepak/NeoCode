import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react'; // Importing the User icon

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
              <span className="animate-pulse mr-2">🔥</span>
              <span className="text-sm font-medium">The Ultimate DSA Learning Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-gray-900 dark:text-white">Master</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                {" "}DSA{" "}
              </span>
              <span className="text-gray-900 dark:text-white">Like a Pro</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Your personalized journey to mastering Data Structures and Algorithms. 
              Track progress, solve problems, and prepare for tech interviews - all in one place.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Started Button */}
              <Link
                to="/sheet"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-all duration-200 transform hover:scale-110 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(129,140,248,0.4)]"
              >
                <span className="flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Sign In Button with Icon */}
              <Link
                to="/login"
                className="group px-8 py-4 rounded-full bg-indigo-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center justify-center hover:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                <User className="mr-2 h-5 w-5" /> {/* User icon added here */}
                <span className="relative">
                  <span className="flex items-center">
                    Sign In
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-200"></span>
                </span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="relative">
              <img
                src="/assets/hero.svg"
                alt="NeoCode Platform"
                className="rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute -right-6 -top-0 w-24 h-24 bg-gradient-to-r from-purple-300 to-purple-500 dark:from-purple-600 dark:to-purple-800 rounded-full rotate-12 animate-float" />
              <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-gradient-to-r from-indigo-300 to-indigo-500 dark:from-indigo-600 dark:to-indigo-800 rounded-full -rotate-12 animate-float animation-delay-2000" />
              <div className="absolute -right-12 bottom-12 w-24 h-24 bg-gradient-to-r from-yellow-200 to-yellow-400 dark:from-yellow-500 dark:to-yellow-700 rounded-full rotate-45 animate-float animation-delay-4000" />
              <div className="absolute top-16 -left-8 w-24 h-24 bg-gradient-to-r from-teal-200 to-teal-400 dark:from-teal-500 dark:to-teal-700 rounded-full -rotate-45 animate-float animation-delay-6000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
