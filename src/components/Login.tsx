import React from "react";
import {FC,useState} from  "react";

const Login: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodoList] = useState([]);
  
  
    return <div className = "App">
      <h1>Hey, I am Login Component</h1>
  
      </div>
  }
  
  export default Login;
  

