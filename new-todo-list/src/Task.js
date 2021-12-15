import { Component } from "react"
import './Task.css';

    const Task = (props) => {

    const handleClick = (e) =>{  
        // console.log(e);
        console.log("inTask ",e.target.value);
        props.onTaskClick(e.target.value); // callback function (from task(child) to tasklist(parent))
    }
    return(
        
        <div className = "taskContainer">
        <div title = {props.task} className = "task">{props.task}</div>
        {props.action && <button  value = {props.taskId} onClick = {handleClick} className = "taskAction">{props.action}</button>}
        </div>
        )
    }
export default Task;