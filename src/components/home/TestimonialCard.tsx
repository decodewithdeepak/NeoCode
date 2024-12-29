import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ content, author, role, avatar, rating }: TestimonialCardProps) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 blur-xl group-hover:opacity-20 transition duration-500" />
      <div className="relative h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
          "{content}"
        </blockquote>
        <div className="flex items-center gap-4 mt-auto">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {author}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}