import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import './App.css';
import { TaskContext } from './context/Context';




function TaskList() {

  const { tasks } = useContext(TaskContext)
  
  if (tasks.length === 0) {
    return <h1 className='title'>Agree your next task... </h1>
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

