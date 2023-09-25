import { writable } from 'svelte/store';
import type { Feedback } from '../types';

export const FeedbackStore = writable([
  { id: 1, rating: 10, text: 'This is the first feedback' },
  { id: 2, rating: 5, text: 'This is the second feedback' },
  { id: 3, rating: 8, text: 'This is the third feedback' },
] as Feedback[]);
