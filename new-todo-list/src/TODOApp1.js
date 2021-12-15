import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Accordion from 'react-bootstrap/Accordion'
import TaskList from "./TaskList.js";
import './TODOApp.css'




class TODOApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:'',
            list: []
        }
    }
    doneClick = (taskId) =>{
        console.log("Todo App", taskId);

        
            const upList = this.state.list.map(item => {
                if(item.taskId === +taskId)
                {
                    item.status = "done"
                }
                return item;

            })
            this.setState({
                list:upList
            })
        }

    deleteClick = (taskId) =>{
        const upList = this.state.list.map(item => {
            if(item.taskId === +taskId)
            {
                item.status = "delete"
            }
            return item;

        })
        this.setState({
            list:upList
        })

    }
    change = (e) => {
        // console.log(e);
        this.setState({
            task:e.target.value
        })
    }
    add = () => {
        if(this.state.task.length === 0)
        return 

        const newItem = {
            taskId: this.state.list.length +1,
            task:this.state.task,
            status:"new"
           }
        console.log(newItem);

        this.setState(state =>({
            list:state.list.concat(newItem),
            task:''
        }))
        
 
    }
    render(){
        return (
            <div>

    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
    <Accordion.Header className = "header">Todo List</Accordion.Header>
    <Accordion.Body>
    <TaskList tittle = "TODO List" onTaskClick = {this.doneClick} taskAction = "done"  list = {this.state.list.filter(item =>(item.status === "new"))}/><br></br>

            <input className="taskTab" type = "text" onChange ={this.change} value={this.state.task}></input>
            <button className="taskAction1 "onClick = {this.add}> Add</button>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Completed List</Accordion.Header>
    <Accordion.Body>
    <TaskList tittle = "Completed List" onTaskClick = {this.deleteClick} taskAction = "delete" list = {this.state.list.filter(item =>(item.status === "done"))}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Deleted List</Accordion.Header>
    <Accordion.Body>
    <TaskList  tittle = "Deleted List" list = {this.state.list.filter(item =>(item.status === "delete"))}/>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</div>
        )
    }
}
export default TODOApp;