
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
    const newTask = {
      title: task.title,
      id: tasks.length + 1,
      description: task.description
    }
    setTasks([...tasks, newTask]);
    console.log([...tasks,newTask]);
  }


  function deleteTask(taskId){
     setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} 
                deleteTask={deleteTask}
      />
    </div>
  )
}

export default App;