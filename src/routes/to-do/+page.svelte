<script lang="ts">
  import type { PageData } from './$types';

  // Define the type of data passed to the component
  export let data: PageData;

  let newTask = '';
  let tasks = data.tasks;

  function addTask() {
    if (newTask.trim()) {
      tasks = [...tasks, { text: newTask, done: false }];
      newTask = ''; // Clear input after adding
    }
  }

  function toggleTask(index: number) {
    tasks[index].done = !tasks[index].done;
  }

  function removeTask(index: number) {
    tasks = tasks.filter((_, i) => i !== index);
  }

  // Reactive statement to count the number of pending tasks
  $: pendingCount = tasks.filter(task => !task.done).length;
</script>

<div class="todo-container">
  <div class="todo-header-input">
    <h1 class="todo-header">To-Do List</h1>
    <input type="text" class="todo-input" bind:value={newTask} placeholder="New task" />
    <button class="todo-add-button" on:click={addTask}>Add Task</button>
    {#if pendingCount >= 0}
      <p class="todo-status">{pendingCount === 0 ? 'No ' : ''}{pendingCount} task{pendingCount > 1 ? 's' : ''} pending</p>
    {/if}
  </div>

  <div class="todo-list">
    <ul class="todo-task-list">
      {#each tasks as task, index}
        <li class="todo-task-item {task.done ? 'todo-task-done' : ''}">
          <div class="todo-task-buttons">
            <button
              class="todo-task-toggle"
              on:click={() => toggleTask(index)}
              aria-pressed={task.done}
            >
              {task.text}
            </button>
            <div class="todo-task-separator"></div>
            <button class="todo-remove-button" on:click={() => removeTask(index)}>Remove</button>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>