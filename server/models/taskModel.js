const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		task: { type: String },
		created: { type: Date, default: Date.now },
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'User'
		}
	},
	{ timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;