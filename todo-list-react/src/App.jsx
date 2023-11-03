import "./style.css"
import { Task } from "./Task.jsx"

export default function App(){
  return (
    <>
      <h1 className="title"> 
        To-Do List App
      </h1>
      <form className="form">
        <label className="text">
          New Task Entry
        </label>
        <input type="text"></input>
        <button className="btn">
          Add
        </button>
      </form>

      <h1 className="header">
        To-Do List
      </h1>

      <ul className="list">
        <Task></Task>
      </ul>



    </>
  )
}

