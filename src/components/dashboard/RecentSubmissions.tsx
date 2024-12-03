import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface Submission {
  id: number;
  problem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Accepted' | 'Wrong Answer' | 'Time Limit';
  timestamp: string;
}

interface RecentSubmissionsProps {
  submissions: Submission[];
}

const DIFFICULTY_COLORS = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function RecentSubmissions({ submissions }: RecentSubmissionsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Submissions
      </h3>
      <div className="space-y-4">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {submission.problem}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    DIFFICULTY_COLORS[submission.difficulty]
                  }`}
                >
                  {submission.difficulty}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {submission.timestamp}
                </span>
              </div>
            </div>
            <div
              className={`flex items-center space-x-1 ${
                submission.status === 'Accepted'
                  ? 'text-green-600 dark:text-green-400'
                  : submission.status === 'Wrong Answer'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-yellow-600 dark:text-yellow-400'
              }`}
            >
              {submission.status === 'Accepted' ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : submission.status === 'Wrong Answer' ? (
                <XCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <span className="text-sm font-medium">{submission.status}</span>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/submissions"
        className="mt-4 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
      >
        View all submissions
        <TrendingUp className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}