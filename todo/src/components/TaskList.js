import React from 'react';
import { useTaskListContext } from '../contexts/TaskListContext';

const TaskList = () => {
  const { taskList, dispatch } = useTaskListContext();

  const handleRemoveTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleToggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <ul className="list-group">
      {taskList.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <div className="form-check form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                id={`completed-${task.id}`}
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <label className="form-check-label" htmlFor={`completed-${task.id}`}>
                <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                  {task.title}
                </span>
              </label>
            </div>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleRemoveTask(task.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
