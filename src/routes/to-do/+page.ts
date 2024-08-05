// Import types for SvelteKit
import type { Load } from '@sveltejs/kit';

// Define the structure of the task data
interface Task {
  text: string;
  done: boolean;
}

// Define the server load function that SvelteKit will call when the page loads
export const load: Load = async () => {
  // Simulate fetching data from an API or database
  const initialTasks: Task[] = [
    { text: 'Learn SvelteKit', done: false },
    { text: 'Build a Svelte app', done: false },
    { text: 'Read Svelte documentation', done: true },
  ];

  // Return the data as props
  return {
    tasks: initialTasks,
  };
};
