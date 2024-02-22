
import React from 'react'
import './App.css';
import Button from './Button';

function TaskCard({ task, deleteTask }) {


  return (
        <div className='card'>
            <p className='card-title'>{task.title}</p>
            <p className='card-description'>{task.description}</p>
            <Button 
              title="Edit" />
            <Button 
              title="Delete"
              onClick={() => deleteTask(task.id)}
            />
        </div>
  )
}

export default TaskCard