import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import './addTask.css'

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setSuccess(null); // Reset success state
    const resultAction = await dispatch(addTask({ task }));

    if (addTask.fulfilled.match(resultAction)) {
      setSuccess("Task added successfully!");
      setTask(''); // Clear input after successful submission
    } else {
      setError(resultAction.payload || "Failed to add task");
    }

    setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 2000);
  };

  return (
    <>
      <div className='bg-red-700 w-96 h-28 flex justify-items-center items-center px-8 drop-shadow-xl'>
        <form onSubmit={handleSubmit}>
          <input
            className='bg-black w-38 h-10'
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add new task"
          />
          <button type="submit" className='bg-green-400 w-28 h-10 rounded-md'>Add Task</button>
        </form>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success ">{success}</div>}
    </>
  );
};

export default AddTask;
