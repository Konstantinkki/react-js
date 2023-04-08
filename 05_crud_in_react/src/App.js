import './App.css';
import { Task } from './Task'
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  //const [addNewTaskName, setNewTask] = useState("");
  

  const handleAddNewTask = () =>{
    //push task to list
    let nextId = todoList.length!==0 ? todoList[todoList.length-1].id+1:1
    const newLTask = {
      id: nextId,
      taskname: newTaskName,
      completed:false
    }
    const newTodoList = [...todoList, newLTask];
    setTodoList(newTodoList)
  }

  const [newTaskName, setInputTask] = useState("");
  const handleChangeNewTaskName = (event) => {
    setInputTask(event.target.value);
  }

  const deleteTask = (taskId) => {
    console.log(taskId)
    const newArray =  todoList.filter(task => task.id !==taskId);
    setTodoList(newArray)
  }

  const completeTask = (taskId) => {
    const newArray = todoList.map(task => {
      if(task.id === taskId){
        task.completed = true;
      }
      return task
    });
    setTodoList(newArray)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChangeNewTaskName}></input>
        <button onClick={handleAddNewTask}>Add Task</button>
      </div>
      <div className='list'>

      </div>
      {todoList.map((task) =>{
        return (
        <Task taskname={task.taskname} 
              id={task.id} 
              deleteTask={deleteTask} 
              isCompleted={task.completed} 
              completeTask={completeTask} />
        )
      }) }

    </div>
  );
}

export default App;
