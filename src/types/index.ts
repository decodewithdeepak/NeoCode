export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: 'LeetCode' | 'GeeksforGeeks' | 'HackerRank';
  link: string;
  completed?: boolean;
  notes?: string;
}

export interface Topic {
  id: string;
  title: string;
  description?: string;
  problems: Problem[];
  totalProblems: number;
  completedProblems: number;
}