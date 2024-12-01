import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LineChart, BarChart, Activity, Target, Calendar, Award, BookOpen } from 'lucide-react';
import { problems } from '../data/problems';

export default function Dashboard() {
  const { user } = useAuth();
  const completedProblems = 25; // This would come from user's data
  const totalProblems = problems.length;
  const completionRate = Math.round((completedProblems / totalProblems) * 100);
  const currentStreak = 7; // This would come from user's data

  const recentActivity = [
    { id: 1, problem: 'Two Sum', date: '2024-03-15', type: 'Solved' },
    { id: 2, problem: 'Valid Parentheses', date: '2024-03-14', type: 'Attempted' },
    { id: 3, problem: 'Reverse String', date: '2024-03-13', type: 'Solved' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.email?.split('@')[0]}!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Track your progress and keep up the momentum
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 dark:text-gray-400">Problems Solved</h3>
            <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {completedProblems}
            </p>
            <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              /{totalProblems}
            </p>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 dark:text-gray-400">Current Streak</h3>
            <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {currentStreak} days
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Keep it going!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 dark:text-gray-400">Completion Rate</h3>
            <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {completionRate}%
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Overall progress
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 dark:text-gray-400">Achievements</h3>
            <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            12
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Badges earned
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {activity.problem}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.date}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activity.type === 'Solved'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}
                >
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recommended Problems
          </h3>
          <div className="space-y-4">
            {problems.slice(0, 3).map((problem) => (
              <div
                key={problem.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {problem.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {problem.platform}
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                        problem.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : problem.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}