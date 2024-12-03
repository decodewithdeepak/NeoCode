import { Topic, Problem } from '../types';

export const topics: Topic[] = [
  {
    id: 'basics',
    title: 'Step 1: Learn the Basics',
    description: 'Foundation concepts every programmer should know',
    problems: [
      {
        id: 'basics-1',
        title: 'Build up Logical Thinking',
        difficulty: 'Easy',
        platform: 'GeeksforGeeks',
        link: 'https://practice.geeksforgeeks.org/problems/logical-thinking/0',
        completed: true
      },
      {
        id: 'basics-2',
        title: 'Learn the Basics of Java/C/C++/Python',
        difficulty: 'Easy',
        platform: 'GeeksforGeeks',
        link: 'https://practice.geeksforgeeks.org/problems/introduction-to-programming/0',
        completed: true
      }
    ],
    totalProblems: 31,
    completedProblems: 29
  },
  {
    id: 'sorting',
    title: 'Step 2: Learn Important Sorting Techniques',
    description: 'Master various sorting algorithms and their implementations',
    problems: [
      {
        id: 'sort-1',
        title: 'Selection Sort',
        difficulty: 'Easy',
        platform: 'GeeksforGeeks',
        link: 'https://practice.geeksforgeeks.org/problems/selection-sort/1',
        completed: false
      },
      {
        id: 'sort-2',
        title: 'Bubble Sort',
        difficulty: 'Easy',
        platform: 'GeeksforGeeks',
        link: 'https://practice.geeksforgeeks.org/problems/bubble-sort/1',
        completed: false
      }
    ],
    totalProblems: 7,
    completedProblems: 0
  },
  {
    id: 'arrays',
    title: 'Step 3: Solve Problems on Arrays',
    description: 'From easy to hard array manipulation problems',
    problems: [
      {
        id: 'array-1',
        title: 'Two Sum',
        difficulty: 'Easy',
        platform: 'LeetCode',
        link: 'https://leetcode.com/problems/two-sum/',
        completed: true
      },
      {
        id: 'array-2',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        platform: 'LeetCode',
        link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        completed: true
      }
    ],
    totalProblems: 40,
    completedProblems: 36
  }
];

// Extract all problems from topics for easy access
export const problems: Problem[] = topics.reduce((allProblems: Problem[], topic) => {
  return [...allProblems, ...topic.problems];
}, []);