import React from 'react';
import { Brain, Target, Trophy, Users, Rocket, Code2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Learning Path',
    description: 'Personalized roadmap that adapts to your learning pace and style',
    color: 'indigo'
  },
  {
    icon: Target,
    title: 'Topic-wise Practice',
    description: 'Carefully curated problems organized by concepts and difficulty',
    color: 'purple'
  },
  {
    icon: Trophy,
    title: 'Progress Tracking',
    description: 'Detailed analytics and insights to measure your improvement',
    color: 'pink'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Learn and grow with fellow developers in our community',
    color: 'blue'
  },
  {
    icon: Rocket,
    title: 'Interview Prep',
    description: 'Targeted practice for technical interviews at top companies',
    color: 'green'
  },
  {
    icon: Code2,
    title: 'Multiple Languages',
    description: 'Practice in your preferred programming language',
    color: 'yellow'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive tools and features designed to accelerate your DSA learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 blur group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl">
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/20 flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}