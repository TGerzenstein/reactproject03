import { tasks as data } from './tasks.js'
import { useState, useEffect } from 'react'
import './App.css'

function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    if( tasks.length === 0) {
      return <h1>Sin tareas</h1>
    }
    
    return (
            <div className='container-cards'>
            {tasks.map( (task) => {

                return <div key={task.id} className='card'>
                          <p className='card-title'>{task.title}</p>
                          <p className='card-text'>{task.description}</p>
                       </div>                           
            })}
            </div>
    )
}

export default TaskList