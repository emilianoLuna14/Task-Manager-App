const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to manage environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors());
app.use(express.json());

// Sample API endpoints for task management
let tasks = [];

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

app.get('/', (req, res) => {
  res.send('Backend is running!');
  });
  
});
