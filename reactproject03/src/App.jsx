
import React from 'react';
import TaskList from './TaskList';
import { tasks } from './tasks.js'
import TaskForm from './TaskForm';


function App() {

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App;