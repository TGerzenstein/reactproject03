import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../tasks'


export const TaskContext = createContext();

export function TaskContextProvider(props) {

   const [tasks, setTasks] = useState([]);


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
     
   useEffect(() => {
     setTasks(data);
   }, []);
  
   return (
      <TaskContext.Provider value= {{
         tasks,
         deleteTask,
         createTask
      }}>
         {props.children}
      </TaskContext.Provider>
   )
}
