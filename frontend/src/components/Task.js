// src/components/Task.js
import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
