
import { useContext } from 'react'
import './App.css';
import Button from './Button';
import { TaskContext } from './context/Context';

function TaskCard({ task }) {

   const { deleteTask } = useContext(TaskContext)

  return (
        <div className='card'>
          <div className='card-body'>  
            <h2 className='card-title'>{task.title}</h2>
            <div className='line'></div>
            <p className='card-description'>{task.description}</p>
            <Button 
              title="Delete"
              onClick={() => deleteTask(task.id)}
            />
          </div>  
        </div>
  )
}

export default TaskCard