
import React from 'react';
import TaskList from './TaskList';
import { tasks as data } from './tasks.js'
import TaskForm from './TaskForm';
import { useState, useEffect } from 'react';


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: task.length + 1,
      description: task.description
    }])
  } 

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App;