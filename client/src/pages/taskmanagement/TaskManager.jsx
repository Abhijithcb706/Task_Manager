import React from 'react';
import TaskList from '../../components/taskmanager/TaskList';
import AddTask from '../../components/taskmanager/AddTask';

const TaskManager = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask/>
      <TaskList />
    </div>
  );
};

export default TaskManager;
