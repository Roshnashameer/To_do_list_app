
import React, { useState } from 'react';
import { useTaskListContext } from '../contexts/TaskListContext';

const AddTaskForm = () => {
    const { dispatch } = useTaskListContext();
    const [newTask, setNewTask] = useState('');

    const handleAddTask = e => {
        e.preventDefault();
        if (newTask.trim() === '') return;
        const newTaskItem = { id: Date.now(), title: newTask, completed: false };
        dispatch({ type: 'ADD_TASK', payload: newTaskItem });
        setNewTask('');
    };

    return (
        <form onSubmit={handleAddTask} style={{ display: 'flex', marginBottom: '1rem' }}>
  <input
    type="text"
    placeholder="Add a new task"
    style={{ flex: '1', marginRight: '0.5rem' }}
    className="form-control"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
  />
  <button className="btn btn-primary" type="submit">
    Add Task
  </button>
</form>
    );
};

export default AddTaskForm;
