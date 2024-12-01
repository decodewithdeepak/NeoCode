export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: 'LeetCode' | 'GeeksforGeeks' | 'HackerRank';
  category: string;
  link: string;
  completed?: boolean;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  problemCount: number;
  completedCount: number;
}