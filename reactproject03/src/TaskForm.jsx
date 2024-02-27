import React from 'react';
import { useState, useContext } from 'react';
import './App.css';
import { TaskContext } from './context/Context';

function TaskForm() {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const { createTask } = useContext(TaskContext);

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
   };

  return (
    <div className='container-form'>
        <form onSubmit={handleSubmit} >
            <input  
              className='title-form'
              placeholder='Task' 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            
            />
            <textarea name=""
                      className='area-text' 
                      id="" 
                      cols="30" 
                      rows="10" 
                      placeholder='Description'
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
            ></textarea>
            <button>Save</button>
        </form>
    </div>
  )
}

export default TaskForm;