import "./style.css"
import { Task } from "./Task.jsx"
import { useState } from "react" 

export default function App(){
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask(e){
    e.preventDefault()

    setTasks(currentTasks => {
      return [...currentTasks, { text: newTask }]
    })

    setNewTask("")

  }

  return (
    <>
      <h1 className="title"> 
        To-Do List App
      </h1>
      <form className="form">
        <label className="text">
          New Task Entry
        </label>
        <input value = {newTask} 
        onChange = {e => setNewTask(e.target.value)} 
        type="text"></input>
        <button onClick={addTask} className="btn">
          Add
        </button>
      </form>

      <h1 className="header">
        To-Do List
      </h1>

      <ul className="list">
        {tasks.map(task => {
            return <Task text={task.text}></Task>
          }
        )}
      </ul>



    </>
  )
}

