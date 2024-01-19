
import React, { createContext, useContext, useReducer } from 'react';

const TaskListContext = createContext();

const taskListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: action.payload.id, title: action.payload.title, completed: false }];

    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);

      case 'TOGGLE_TASK':
        return state.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
    case 'TOGGLE_FILTER':
            return { ...state, showCompletedTasks: !state.showCompletedTasks };
      

    default:
      return state;
  }
};

const TaskListContextProvider = ({ children }) => {
  const [taskList, dispatch] = useReducer(taskListReducer, []);

  return (
    <TaskListContext.Provider value={{ taskList, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
};

const useTaskListContext = () => {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error('useTaskListContext must be used within a TaskListContextProvider');
  }
  return context;
};

export { TaskListContextProvider, useTaskListContext, TaskListContext };
