import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { topics } from '../data/problems';
import TopicCard from '../components/sheet/TopicCard';

export default function Sheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const handleProblemToggle = (problemId: string) => {
    // In a real app, this would update the database
    console.log('Toggled problem:', problemId);
  };

  const filteredTopics = topics.map(topic => ({
    ...topic,
    problems: topic.problems.filter(problem => {
      const matchesSearch = problem.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesDifficulty =
        selectedDifficulty === 'all' ||
        problem.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      return matchesSearch && matchesDifficulty;
    }),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          DSA Problem Sheet
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A structured path to master Data Structures and Algorithms
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center space-x-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search problems..."
            className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        {filteredTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onProblemToggle={handleProblemToggle}
          />
        ))}
      </div>
    </div>
  );
}