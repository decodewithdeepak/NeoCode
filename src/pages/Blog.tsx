import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Time Complexity in Data Structures',
    excerpt:
      'Learn how to analyze and optimize your algorithms by understanding time complexity and Big O notation.',
    author: 'John Doe',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['Algorithms', 'Basics'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Mastering Binary Search: A Complete Guide',
    excerpt:
      'Deep dive into binary search algorithm with practical examples and common interview questions.',
    author: 'Jane Smith',
    date: '2024-03-14',
    readTime: '8 min read',
    tags: ['Algorithms', 'Search'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Dynamic Programming: From Basics to Advanced',
    excerpt:
      'Learn how to solve complex problems using dynamic programming with step-by-step examples.',
    author: 'Mike Johnson',
    date: '2024-03-13',
    readTime: '10 min read',
    tags: ['Dynamic Programming', 'Advanced'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          DSA Learning Hub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our collection of articles, tutorials, and guides to master Data
          Structures and Algorithms.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center space-x-4 text-white/80 mb-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{blogPosts[0].author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {blogPosts[0].title}
            </h2>
            <p className="text-white/90">{blogPosts[0].excerpt}</p>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-48 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}