
import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';


function App() {
  
  return (
    <div>
      <h1 className='title'>Task List</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App;