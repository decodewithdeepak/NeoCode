import React from 'react';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { Problem } from '../../types';

interface ProblemListProps {
  problems: Problem[];
  onToggle: (problemId: string) => void;
}

const DIFFICULTY_COLORS = {
  Easy: 'text-green-600 dark:text-green-400',
  Medium: 'text-yellow-600 dark:text-yellow-400',
  Hard: 'text-red-600 dark:text-red-400',
};

export default function ProblemList({ problems, onToggle }: ProblemListProps) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      {problems.map((problem) => (
        <div
          key={problem.id}
          className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onToggle(problem.id)}
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {problem.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5" />
              )}
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {problem.title}
                  <ExternalLink className="h-4 w-4 inline ml-2" />
                </a>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`text-sm font-medium ${
                    DIFFICULTY_COLORS[problem.difficulty]
                  }`}
                >
                  {problem.difficulty}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {problem.platform}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}