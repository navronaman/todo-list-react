import "./style.css"

export default function App(){
  return(
    <>
      <h1 className="title"> 
        To-Do List App
      </h1>
      <form className="form">
        <label className="text">
          New Task Entry
        </label>
        <input type="text"></input>
        <button className="btns">
          Add
        </button>
      </form>
    </>
  )
}

