import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import { Task } from './Task';


function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: newTask,
      completed: false,
    };
    setTodoList([...todolist, task]);
  };
  const deleteTask = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  };
  const completeTask  = (id) => {
    setTodoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...Task, completed: true};
        } else {
          return task;
        }
    })
    );
  };
  return (
    <div className= "App">  
          <div className='"addTask'>
            <input onChange={handleChange} />
            <button onClick={addTask}> Add Task</button>
            </div>
            <div className="list">
              {todolist.map((task) => {
                return (<Task 
                taskname={task.taskname}
                id={task.id}
                deleteTask={deleteTask}
                />
                ); 
              })}  
              </div>
        </div>

  );
  } 
export default App;
