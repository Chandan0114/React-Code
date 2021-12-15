import React, { Component } from "react";
import Task from './Task.js'
import './TaskList.css'


     const TaskList = (props) => {

    const handleClick = (parm) =>{
        console.log("in Task List ",parm);
        props.onTaskClick(parm) // callback function (from task(child) to tasklist(parent))
    }

    return(
        <div className = "taskListContainer">
        <div className = "taskListHeading">{props.tittle}</div>
       
        {props.list && props.list.length === 0 && <div className = "emptyList"> {props.tittle}-Empty !</div>}


        {props.list && props.list.map(item =>  (
        <Task onTaskClick = {handleClick} taskId = {item.taskId} key = {item.taskId} action = {props.taskAction} task = {item.text}/>
        ))}
        
    </div>
    );
}
//Default props
TaskList.defaultProps = {
    tittle: "Todo task",
    // list:[]
}

export default TaskList;