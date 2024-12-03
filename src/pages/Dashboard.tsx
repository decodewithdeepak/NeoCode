import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Activity,
  Target,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { topics, problems } from '../data/problems';
import StatsCard from '../components/dashboard/StatsCard';
import ActivityChart from '../components/dashboard/ActivityChart';
import DifficultyChart from '../components/dashboard/DifficultyChart';
import RecentSubmissions from '../components/dashboard/RecentSubmissions';

// Mock data for charts and submissions
const activityData = [
  { date: '2024-03-10', problems: 3 },
  { date: '2024-03-11', problems: 5 },
  { date: '2024-03-12', problems: 2 },
  { date: '2024-03-13', problems: 4 },
  { date: '2024-03-14', problems: 6 },
  { date: '2024-03-15', problems: 3 },
  { date: '2024-03-16', problems: 5 },
];

const difficultyData = [
  { name: 'Easy', value: 15 },
  { name: 'Medium', value: 8 },
  { name: 'Hard', value: 4 },
];

const recentSubmissions = [
  {
    id: 1,
    problem: 'Two Sum',
    difficulty: 'Easy',
    status: 'Accepted',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    problem: 'Valid Parentheses',
    difficulty: 'Medium',
    status: 'Wrong Answer',
    timestamp: '4 hours ago',
  },
  {
    id: 3,
    problem: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    status: 'Time Limit',
    timestamp: '6 hours ago',
  },
] as const;

export default function Dashboard() {
  const { user } = useAuth();
  const totalProblems = problems.length;
  const completedProblems = problems.filter(p => p.completed).length;
  const completionRate = Math.round((completedProblems / totalProblems) * 100);
  const currentStreak = 7; // This would come from user's data

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
        <StatsCard
          title="Problems Solved"
          value={completedProblems}
          subtext={`/${totalProblems}`}
          icon={Target}
          iconColor="text-indigo-600 dark:text-indigo-400"
          progress={completionRate}
        />
        <StatsCard
          title="Current Streak"
          value={`${currentStreak} days`}
          icon={Calendar}
          iconColor="text-green-600 dark:text-green-400"
        />
        <StatsCard
          title="Completion Rate"
          value={`${completionRate}%`}
          icon={Activity}
          iconColor="text-purple-600 dark:text-purple-400"
        />
        <StatsCard
          title="Achievements"
          value="12"
          subtext="Badges earned"
          icon={Award}
          iconColor="text-yellow-600 dark:text-yellow-400"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ActivityChart data={activityData} />
        <DifficultyChart data={difficultyData} />
      </div>

      {/* Recent Submissions */}
      <RecentSubmissions submissions={recentSubmissions} />
    </div>
  );
}