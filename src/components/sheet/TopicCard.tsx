import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Topic } from '../../types';
import ProblemList from './ProblemList';

interface TopicCardProps {
  topic: Topic;
  onProblemToggle: (problemId: string) => void;
}

export default function TopicCard({ topic, onProblemToggle }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = (topic.completedProblems / topic.totalProblems) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-400" />
            )}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {topic.title}
            </h3>
          </div>
          {topic.description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {topic.description}
            </p>
          )}
        </div>
        <div className="ml-4 flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {topic.completedProblems} / {topic.totalProblems}
          </span>
          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </button>
      {isExpanded && (
        <ProblemList problems={topic.problems} onToggle={onProblemToggle} />
      )}
    </div>
  );
}