// import { props } from "bluebird";
import React from "react";
import { Component } from "react";



class List extends Component{
    constructor(props){
        super(props);
    this.state = {
        task:'',
        list:[]
    }
    this.change = this.change.bind(this);
    this.add = this.add.bind(this);
    this.done = this.done.bind(this);
}
change(e){
    // console.log(e);
    this.setState({
        task:e.target.value
    })
}
add(){
    if(this.state.task.length === 0)
    return 
    const newItem = {
        text:this.state.task,
        done:false
    }

    this.setState(state =>({
        list:state.list.concat(newItem),
        task:''
    }))

    
}
done(todo){
   let index = this.state.list.indexOf(todo);
//    console.log(index);

   let array = [...this.state.list]
//    console.log(array);

   array[index] = {...array[index],done:true}
   
   this.setState({
       list:array
   })
}
render(){

    return (
        <div>
        <h2>{this.props.name}</h2>
         <ul >
                
                <div className = "list">
                 {this.state.list.length===0 && <h3>{this.props.work}</h3>} 
                
                 
                {this.state.list.filter(todo => todo.done === false).map((todo, index) => 
            
                <div key={"key"+index}>
                <li className = "lis">{todo.text}
                 <button  className = "donebutton" onClick = {() =>{this.done(todo)}}>done</button>
                 </li>
                </div>
                )}
                  
                </div>

                
                </ul>
                
              
        {this.props.input === "true" && <input  type = "text" id = "input" onChange ={this.change} value={this.state.task}></input>} 
        {this.props.button=== "true" && <button style={{background: 'yellow'}}className = "addbutton" onClick = {this.add}>Add</button>}
        </div>
    )
}
}
export default List