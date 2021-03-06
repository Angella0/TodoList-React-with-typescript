import React, {FC,ChangeEvent, useState} from 'react';
import './App.css';
import Login from './components/Login';


const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState([]);


  const handleChange = (event:ChangeEvent<HTMLInputElement>): void=>{
   if(event.target.name ==="task"){
     setTask(event.target.value)
   }else{
     setDeadline(Number(event.target.value))
   }
    setTask(event.target.value)

  };

const addTask = (): void =>{
  setTodoList([...todoList, task])

}

  return <div className = "App">
    <div className = "header">
      <div className = "inputContainer">
      <input type = "text" placeholder= "Task ..." name ="task" onChange={handleChange} />
      <input type = "number" placeholder= "Deadline (in days) ..." name = "deadline"onChange ={handleChange} />
     
    </div>
    <button onClick={addTask}>Add Task</button>
    </div>
    <div className = "todoList"></div>
    <Login/>

    </div>
};

export default App;
