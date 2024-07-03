import React from 'react';
import TaskList from '../../components/taskmanager/TaskList';
import AddTask from '../../components/taskmanager/AddTask';

const TaskManager = () => {
  return (
    <>
<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex justify-center'>
    <div className='text-center'>
      <h1 className=' text-5xl font-bold capitalize'>Task Manager</h1>
      <AddTask/>
      <TaskList />
    </div>
    </div>
    </>
  );
};

export default TaskManager;
