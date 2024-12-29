import React from 'react';
import { Brain, Code2, Trophy, Target, Users, Rocket } from 'lucide-react';
import FeatureCard from '../components/about/FeatureCard';
import TeamMember from '../components/about/TeamMember';

const features = [
  {
    icon: Brain,
    title: 'Structured Learning Path',
    description: 'Follow a carefully designed curriculum that takes you from basics to advanced DSA concepts.',
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
  },
  {
    icon: Code2,
    title: 'Curated Problem Set',
    description: 'Practice with hand-picked problems from top coding platforms, organized by topic and difficulty.',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/20',
  },
  {
    icon: Trophy,
    title: 'Progress Tracking',
    description: 'Monitor your growth with detailed statistics and visualizations of your learning journey.',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
  },
  {
    icon: Target,
    title: 'Interview Preparation',
    description: 'Get ready for technical interviews with problems frequently asked by top tech companies.',
    iconColor: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a community of learners and help each other grow through collaborative learning.',
    iconColor: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: Rocket,
    title: 'Regular Updates',
    description: 'Access new problems, features, and learning resources added regularly to the platform.',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Content Lead',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">NeoCode</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're on a mission to make Data Structures and Algorithms learning accessible, structured, and enjoyable for everyone. Our platform combines carefully curated content with modern learning tools to help you succeed.
        </p>
      </section>

      {/* Mission Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-10 dark:opacity-20 blur-3xl" />
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-xl ring-1 ring-gray-900/5">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At NeoCode, we believe that mastering Data Structures and Algorithms shouldn't be a daunting task. Our platform is built with the vision of making DSA learning accessible, engaging, and effective for students and professionals alike.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on providing a structured learning path, comprehensive problem sets, and intuitive progress tracking tools to help you achieve your goals, whether you're preparing for technical interviews or improving your problem-solving skills.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}