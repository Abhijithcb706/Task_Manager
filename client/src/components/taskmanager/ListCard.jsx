import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';
import EditTask from './EditTask';

const ListCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteTask(task._id));
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold">{task.task}</h2>
      {/* <p>Status: {task.status}</p> */}
      <EditTask task={task} />
      <button onClick={handleDelete} className="bg-red-500 px-4 py-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default ListCard;
