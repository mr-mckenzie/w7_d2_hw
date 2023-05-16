import './App.css';
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
    {id: 1, name:"Buy shopping", priority:"high"},
    {id: 2, name: "Clean bathroom", priority:"low"},
    {id: 3, name: "Car's MOT", priority:"high"}
    ]
  )

  const [newTask, setNewTask] = useState("")

  const [newPriority, setNewPriority] = useState("")

  const checkPriority = (task) => {
    if (task.priority === "high") {
      return 
    }
  }
  
  const listOfTasks = tasks.map((task) => {
    return (
      <li className = {task.priority} key={task.id}>{task.name}
      <button onClick={() => {completeTask(task.id)}}>Complete</button> {/* <------------------------------------------- */}
      </li>
    )
  })


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleRadioButton = (event) => {
    setNewPriority(event.target.value)
  }

  const addNewTask = (event) => {
    event.preventDefault()
    if(newTask && newPriority) {
      const newTaskObject = {id: Date.now(), name: newTask, priority: newPriority}
      const updatedTaskList = [...tasks, newTaskObject]
      setTasks(updatedTaskList)
      setNewTask("")
      setNewPriority("")
      document.getElementById("task-priority-high").checked = false
      document.getElementById("task-priority-low").checked = false
    }
  }

  const completeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={addNewTask}>
        <label htmlFor="new-task-input">Add a new to-do:</label>
        <input id="new-task-input" type="text" value={newTask} onChange={handleTaskInput}></input>
        <label htmlFor="task-priority-high">High:</label>
        <input id="task-priority-high" type="radio" name="task-priority" value="high" onClick={handleRadioButton}></input>
        <label htmlFor="task-priority-low">Low:</label>
        <input id="task-priority-low" type="radio" name="task-priority" value="low" onClick={handleRadioButton}></input>
        <input type="submit" value="Add task"></input>

      </form>

      <ul>
        {listOfTasks}
      </ul>
      
    </div>
  );
}

export default App;