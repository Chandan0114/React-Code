import {useReducer } from 'react';
import React, { createContext, useState } from 'react';
import ChildRed from "./ChildRed.js"

export const Usercontext= createContext();
function Reducer(){

    const initialState={
        name:"Chandan",
        age:24     
}
const reducer=(state,action)=>{
return{
      name:action.name,
      age:action.age
}
}

const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <Usercontext.Provider value={{state,dispatch}}>
        <div>
            <h2>I am {state.name} <br/>age:{state.age} </h2>
       
        
        <ChildRed></ChildRed>
        
        </div>
        </Usercontext.Provider>

    )
}

export default Reducer