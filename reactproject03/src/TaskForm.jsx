import React from 'react'
import { useState } from 'react'

function TaskForm({ createTask }) {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");


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
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Text me' 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            
            />
            <textarea name="" 
                      id="" 
                      cols="30" 
                      rows="10" 
                      placeholder='describe your task'
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
            ></textarea>
            <button>Save</button>
        </form>
    </div>
  )
}

export default TaskForm;