import React, {useContext } from 'react';
import{Usercontext} from "./Reducer.js";

const GchildRed =() =>{
    const {state,dispatch} = useContext(Usercontext)


    const user = useContext(Usercontext);
    let change = () =>{ 
        
        dispatch({name:"Sumit",age:25})
    }
    return(
        <div>
            
            <button onClick= {change} > CLICK ME!</button>
            
        </div>
    )
    }

export default GchildRed;