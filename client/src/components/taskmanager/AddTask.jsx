import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTask({ task }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
