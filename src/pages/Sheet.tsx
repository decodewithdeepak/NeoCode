import React, { useState, useMemo } from 'react';
import { problems, categories } from '../data/problems';
import { Filter, Search, CheckCircle2, Circle, ExternalLink } from 'lucide-react';

export default function Sheet() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());

  const filteredProblems = useMemo(() => {
    return problems.filter(problem => {
      const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty.toLowerCase() === selectedDifficulty;
      const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const toggleProblemCompletion = (problemId: string) => {
    setCompletedProblems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(problemId)) {
        newSet.delete(problemId);
      } else {
        newSet.add(problemId);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          DSA Problem Sheet
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your progress through carefully curated DSA problems
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {category.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {category.problemCount} problems
              </span>
              <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-400"
                  style={{
                    width: `${(category.completedCount / category.problemCount) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
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
        <div className="flex space-x-4">
          <select
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
      </div>

      {/* Problems List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <div className="bg-gray-50 dark:bg-gray-900">
            <div className="grid grid-cols-12 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <div className="col-span-1">Status</div>
              <div className="col-span-5">Problem</div>
              <div className="col-span-2">Difficulty</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2">Platform</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="col-span-1">
                  <button
                    onClick={() => toggleProblemCompletion(problem.id)}
                    className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {completedProblems.has(problem.id) ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="col-span-5">
                  <a
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center space-x-2"
                  >
                    <span>{problem.title}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <div className="col-span-2 text-gray-900 dark:text-white">
                  {categories.find(c => c.id === problem.category)?.name}
                </div>
                <div className="col-span-2 text-gray-900 dark:text-white">
                  {problem.platform}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}