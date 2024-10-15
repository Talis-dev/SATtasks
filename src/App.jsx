import { useEffect, useState } from 'react'
import {v4} from 'uuid'
import './App.css'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'



function App() {
   // hooks [state,function state] = useState(valor inicial)*funçao que atualiza o componete*
  const [tasks, setTasks]= useState(
JSON.parse(localStorage.getItem("tasks")) || []
  )
useEffect(()=>{ // essa funçao é chamada qando o item da lista for alterado
 localStorage.setItem("tasks", JSON.stringify(tasks)) 
},[tasks])

// useEffect(() => { // funçao para chamar api teste
//   const fetchTasks = async () =>{
//      // CHAMAR API
// const response = await fetch(
//   'https://jsonplaceholder.typicode.com/todos?_limit=10',
//   {
//     method: "GET",
//   }
// );
//   // PEGAR OS DADOS QUE API RESTORNOU
// const data = await response.json();

//   // ARMAZENAR/PERSISTIR OS DADOS NO STATE 
//   setTasks(data)
//   }
// fetchTasks();
// })

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
   setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId){
const newTasks = tasks.filter(task => task.id != taskId)
setTasks(newTasks);
  }
function onTaskSubmit(title,description){
  const newTask = {
    id: v4(), //aplica id aleatório
    title: title,
    description: description,
    isCompleted: false,
  }
  setTasks([...tasks, newTask]); //...tasks = abre a lista tasks/ newTask = adiciona item a lista tasks

}

  return (

      <div className='w-screen min-h-screen bg-gray-800 flex justify-center p-6'>
        <div className='w-[500px] space-y-4'>
           <h1 className='text-3xl text-center font-bold text-cyan-400'>Star Any Tech Tasks </h1>
      
      <AddTasks onTaskSubmit={onTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick ={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>

      </div>

  )
}

export default App
