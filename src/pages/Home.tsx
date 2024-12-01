import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Brain, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Master DSA with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                {" "}NeoCode
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Your structured path to mastering Data Structures and Algorithms. Track your progress, solve problems, and prepare for technical interviews.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/sheet"
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose NeoCode?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide a comprehensive platform designed to help you excel in your DSA journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Structured Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow our carefully curated DSA sheet with problems arranged by topic and difficulty.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your progress with interactive dashboards and detailed statistics.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Achievement System
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn badges and track milestones as you progress through your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your DSA Journey?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already improving their problem-solving skills with NeoCode.
            </p>
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}