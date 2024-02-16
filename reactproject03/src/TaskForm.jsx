import React from 'react'
import { useState } from 'react'

function TaskForm() {

   const [title, setTitle] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title)
   }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Text me' 
              onChange={(e) => setTitle(e.target.value)}
            
            />
        </form>
    </div>
  )
}

export default TaskForm