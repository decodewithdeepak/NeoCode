import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DifficultyData {
  name: string;
  value: number;
}

interface DifficultyChartProps {
  data: DifficultyData[];
}

const CHART_COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

export default function DifficultyChart({ data }: DifficultyChartProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Problems by Difficulty
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: CHART_COLORS[index] }}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {item.name} ({item.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}