import React, { useEffect,useState } from 'react'
import axios from "axios";
import './Hooks.css'

const HookInput = () => {
    const [post, setPost] = useState([]);
    const [path, setpath] = useState("");

    // useEffect(()=>{
    //     console.log("i am effect");
    // },[])

    let show=()=>{
         console.log(path);
         axios.get(`https://jsonplaceholder.typicode.com/posts/${path}`)
    .then((res)=>{
    console.log(res.data);
    setPost(res.data)
    setpath('');
})
                
    }
    return (
        <div>
     <input  onChange={(e)=>setpath(e.target.value)} className = "input" />
     <br></br>
     <button onClick={show} className = "button" >Submit</button>
     <div className = "title">

        {post.title } 
        {/* {post.body}  */}
        </div>  
      </div>
      
    )
}

export default HookInput;