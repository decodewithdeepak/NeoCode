import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  iconColor: string;
  progress?: number;
}

export default function StatsCard({
  title,
  value,
  subtext,
  icon: Icon,
  iconColor,
  progress,
}: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 dark:text-gray-400">{title}</h3>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
        {subtext && (
          <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {subtext}
          </p>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}