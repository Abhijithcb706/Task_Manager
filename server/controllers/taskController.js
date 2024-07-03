const User = require("../models/userModel");
const Task = require("../models/taskModel");

const addTask = async (req, res) => {
  const { task } = req.body;

  try {
    if (!task) {
      return res.status(400).send("Please enter the task");
    }
    if (task.length < 10) {
      return res.status(400).send("Task must be at least 10 characters long");
    }

    const taskDetail = new Task({
      task,
      createdBy: req.user._id,
    });
    console.log("createdBy:", req.user._id);

    await taskDetail.save();
    return res.status(200).send(taskDetail); // Send response after task is saved
  } catch (error) {
    return res.status(400).send("Task addition failed");
  }
};

const getAllTasks = async (req, res) => {
  try {
    let tasklist = await Task.find({ createdBy: req.user._id }); // Use the userId from the token
    console.log("tasklist:", tasklist);
    return res.status(200).send(tasklist);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { task } = req.body;
    const {id} = req.params;
    const taskDetail = await Task.findOneAndUpdate(
      { _id: id },
      { task },
      { new: true }
    );
	console.log("taskDetail:", taskDetail);
	return res.status(200).send(taskDetail);

  } catch (error) {
    return res.status(400).send(error);
  }
};



const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
	const task = await Task.findOneAndDelete({ _id: id, createdBy: req.user._id });

	if (!task) {
		return res.status(404).send('Task not found or you do not have permission to delete this task');
	  }
    return res.status(200).send("task deleted")
  } catch (error) {
    return res.status(400).send("deleteFailed");
  }
};

module.exports = {
  addTask,
  getAllTasks,
  updateTask,

  deleteTask,
};
