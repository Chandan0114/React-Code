import React, { createContext,useState } from 'react'
import Child1 from './Child1';
 export const usercontext=createContext();
const Context = () => {
   const [state, setState] = useState("Chandan");

    return (
       
        <usercontext.Provider value={{state,setState}} >
          <h2>Hello {state} It is a parent component</h2>
          <Child1 />

        </usercontext.Provider>
    )
}
export default Context