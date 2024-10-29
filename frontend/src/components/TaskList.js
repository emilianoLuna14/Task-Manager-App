// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task!</p>
      ) : (
        tasks.map((task, index) => <Task key={index} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
