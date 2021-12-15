
import React,{useContext} from 'react'
// import { usercontext } from './Context';
import { usercontext} from './ContextReducer'

const Grandchild = () => {
    // const {state,setState} = useContext(usercontext);
    const {state, dispatch} = useContext(usercontext)
    let change=()=>{
        // console.log("i want to update the value");
        // setState("Raju")
        dispatch({name:"Sumit", age:25})
    }
    return (
        <div>
            <h3> hello {state} , Iam  GRAND child component </h3>
            <button onClick={change}>CHANGE ME</button>
            
        </div>
    )
}

export default Grandchild




