import React from 'react';
import TaskList from '../../components/taskmanager/TaskList';
import AddTask from '../../components/taskmanager/AddTask';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Dashboard;
