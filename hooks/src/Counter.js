
import React,{ useState, useEffect } from "react";
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
   
// const IncNum = () =>{
//     setCount(count+1);
// }
useEffect((e) =>{
    console.log(e);
})
const DecNum = () =>{
    if(count===0)
    return
   setCount(count-1);
    
}

    return (
        <div className ="count">
        <div>{count}</div>
        
        {/* <button className = "incButton" onClick = {IncNum}>+</button> */}
        <button className = "incButton" onClick = {() => setCount(count+1)}>+</button>
        <button className = "decButton" onClick = {DecNum}>-</button>
       
        </div>


    );
    
} 
export default Counter;