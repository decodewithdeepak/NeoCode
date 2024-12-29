import React from 'react';
import { Users, BookOpen, Award, Star } from 'lucide-react';

const stats = [
  { label: 'Active Learners', value: '10,000+', icon: Users },
  { label: 'Practice Problems', value: '500+', icon: BookOpen },
  { label: 'Success Stories', value: '1,000+', icon: Award },
  { label: 'Average Rating', value: '4.9/5', icon: Star },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}