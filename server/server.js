const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const userRoutes = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');
dotenv.config()


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/task', taskRouter);





const mongoURI = process.env.MONGO_URI;


mongoose
	.connect(mongoURI,)
	.then(() => {
		console.log('Connected to MongoDB');
		
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});


const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});