import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import Accordion from 'react-bootstrap/Accordion'
import TaskList from "./TaskList.js";
import './TODOApp.css'




function TODOApp() {
    const [task, settask] = useState("");
    const [list, setlist] = useState([]);


    let doneClick = (taskId) =>{
        console.log("Todo App", taskId);

        
            const upList = list.map(item => {
                if(item.taskId === +taskId)
                {
                    item.status = "done"
                }
                return item;

            })
            setlist(upList)
            
        }
       
    let deleteClick = (taskId) =>{
        const upList = list.map(item => {
            if(item.taskId === +taskId)
            {
                item.status = "delete"
            }
            return item;

        })
        setlist(upList)
        
    }
    // let change = (e) => {
       
    //     settask(e.target.value)
    // }
    let add = () => {
        setlist((prevstate) => [
          ...prevstate,
          {
            taskId: list.length + 1,
            text: task,
            status: "new",
          },
        ]);
        settask("");
      };
        return (
            <div>

<TaskList onTaskClick = {doneClick}  tittle="Todolist" taskAction = "Done" list = {list.filter((item )=>item.status === "new")}/><br></br>
<input className="tab button" type = "text" onChange ={(e)=> settask(e.target.value)} value={task}></input>
            <button  className="addbutton" onClick = {add}> Add</button>
    
    <TaskList onTaskClick = {deleteClick} taskAction = "Delete"  list = {list.filter(item =>(item.status === "done"))}/>
    
    <TaskList list = {list.filter(item =>(item.status === "delete"))}/>
    
</div>
        )
    }

export default TODOApp;