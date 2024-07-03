import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/taskSlice';

const EditTask = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateTask({ ...task, task: updatedTask }));
  };

  return (
    <form onSubmit={handleUpdate} >
      <input
      className='border-2 border-black m-2'
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit" className='bg-cyan-400 w-32 rounded-md'>Update Task</button>
    </form>
  );
};

export default EditTask;
