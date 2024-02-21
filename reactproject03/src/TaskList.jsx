import React from 'react';
import TaskCard from './TaskCard';
import './App.css';

function TaskList({ tasks }) {
  
  if (tasks.length === 0) {
    return <h1>Haven't tasks</h1>
  }  

  return (
    <div className='container-cards'>
        {tasks.map((task, index) => (
            <TaskCard key={index} task={task}/> 
        ))} 
    </div>
  )
}

export default TaskList;

