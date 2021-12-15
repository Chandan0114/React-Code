import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

function HookReducer() {
    // const[data, setData] = useState([]);
    // const[loading, setLoading] = useState(true);
    // const[error, setError] = useState("")

    const initialState = {
        data:{},
        loading:true,
        error:""
    }

    const reducer = (state, action ) =>{
        switch(action.type){
            case "SUCCESS":
               return {
                   data:action.data,
                   loading:false,
                   error:""

                }

            case "FAILURE":
                return {
                    data:[],
                    loading:false,
                    error:"Something wrong..."
 
                 }
                 default:
                 return state;

        }

    }
    const[state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{ 
            setTimeout(() =>{

                dispatch({type:"SUCCESS", data:response.data})
        },2000)
           

        })
        .catch(error =>{
            dispatch({type:"FAILURE", data:error.data})
            // setLoading(false)
            // setData([])
            // setError("Wrong something!!!")

        })
    },[])

    return ( 
        <div>
            {state.loading ? "Loading..." : state.data.title}
            {state.error ? state.error : null}
        </div> 
       
    );
}

export default HookReducer;