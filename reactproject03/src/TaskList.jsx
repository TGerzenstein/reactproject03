import React from 'react';
import TaskCard from './TaskCard';
import './App.css';

function TaskList({ tasks }) {
  
  if (tasks.length === 0) {
    return <h1>Haven't tasks</h1>
  }  

  return (
    <div className='container-cards'>
        {tasks.map((task) => (
            <TaskCard 
                key={task.id}
                task={task} />
        ))} 
    </div>
  )
}

export default TaskList