import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTasks(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Task List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <ListCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
