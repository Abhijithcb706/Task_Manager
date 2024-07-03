import React from 'react';
import TaskList from '../../components/taskmanager/TaskList';
import AddTask from '../../components/taskmanager/AddTask';

const TaskManager = () => {
  return (
    <>
<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen'>
    <div>
      <h1 >Task Manager</h1>
      <AddTask/>
      <TaskList />
    </div>
    </div>
    </>
  );
};

export default TaskManager;
