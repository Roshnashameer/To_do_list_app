// App.js
import React from 'react';
import { TaskListContextProvider } from './contexts/TaskListContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  return (
    <div className="App">
      <h1 className="display-4 text-center">To-Do List </h1>

      <TaskListContextProvider>
        <AddTaskForm />
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
}

export default App;
