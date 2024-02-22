import React from 'react';
import TaskCard from './TaskCard';
import './App.css';

function TaskList({ tasks, deleteTask }) {
  
  if (tasks.length === 0) {
    return <h1>Agree your next task... </h1>
  }  

  return (
    <div className='container-cards'>
        {tasks.map((task, index) => (
            <TaskCard key={index} task={task} deleteTask={deleteTask}/> 
        ))} 
    </div>
  )
}

export default TaskList;

