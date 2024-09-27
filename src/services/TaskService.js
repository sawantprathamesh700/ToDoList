// src/services/TaskService.js
const TASKS_KEY = 'tasks';

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  return tasks;
};

export const addTask = (task) => {
  const tasks = getTasks();
  task.id = Date.now();
  tasks.push(task);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const updateTask = (updatedTask) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === updatedTask.id);
  tasks[index] = updatedTask;
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
};
