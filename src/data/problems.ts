import { Problem, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    description: 'Master array manipulation and basic algorithms',
    problemCount: 5,
    completedCount: 0,
  },
  {
    id: 'strings',
    name: 'Strings',
    description: 'String manipulation and pattern matching',
    problemCount: 5,
    completedCount: 0,
  },
  // Add more categories as needed
];

export const problems: Problem[] = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    platform: 'LeetCode',
    category: 'arrays',
    link: 'https://leetcode.com/problems/two-sum/',
  },
  {
    id: '2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    platform: 'LeetCode',
    category: 'strings',
    link: 'https://leetcode.com/problems/valid-parentheses/',
  },
  // Add more problems as needed
];