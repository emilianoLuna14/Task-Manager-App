// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
    // State to hold tasks
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from the backend
    useEffect(() => {
        fetch('http://localhost:5001/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    // Function to add a new task
    const addTask = (newTask) => {
        fetch('http://localhost:5001/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then(response => response.json())
        .then(data => setTasks([...tasks, data]))
        .catch(error => console.error('Error adding task:', error));
    };

    return (
        <Router>
            <div className="app">
                {/* Navigation Bar */}
                <nav>
                    <Link to="/">Task List</Link> | <Link to="/add-task">Add Task</Link>
                </nav>
                
                {/* Application Routes */}
                <Routes>
                    <Route path="/" element={<TaskList tasks={tasks} />} />
                    <Route path="/add-task" element={<AddTaskForm onAdd={addTask} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
