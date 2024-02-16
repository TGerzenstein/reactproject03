
import React from 'react'
import './App.css';

function TaskCard({ task }) {
  return (
        <div className='card'>
            <p className='card-title'>{task.title}</p>
            <p className='card-description'>{task.description}</p>
        </div>
  )
}

export default TaskCard