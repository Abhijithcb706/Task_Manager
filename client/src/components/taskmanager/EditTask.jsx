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
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
