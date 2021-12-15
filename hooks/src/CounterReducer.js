import { useReducer } from "react";


function CounterReducer() {

    const initialState = {
        count:0
    }

    const reducer = (state,action) =>{
        switch(action.type){
            case "increment":
           return {
               count:state.count+1
            }
            case "decrement":
                return {
                    
                    count:state.count-1
                }
                default:
                    return new Error();
    }
}

    const[state, dispatch] = useReducer(reducer, initialState);
    return ( 
        <div>
            {state.count}<br/>
            <button onClick = {() => dispatch({type:'increment'})}>+</button>

            {state.count > 0 && <button onClick = {() => dispatch({type:'decrement'})}>-</button>}

        </div>

     );
}

export default CounterReducer;