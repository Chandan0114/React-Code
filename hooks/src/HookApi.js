import React, {useState } from 'react'
import axios from "axios";
import './Hooks.css'
import MyTable from './Table.js'


const HookApi = () => {
    const [post, setPost] = useState([]);
    const [path, setpath] = useState("");
    const [comment, setComment] = useState([]);
    const [error, setError] = useState("");

    let show=(e)=>{
        e.preventDefault();
        //  console.log(path);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${path}`)
        .then((res)=>{
        console.log(res.data);
        setPost(res.data)
        setpath('');
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${path}`)
            .then((res) =>{
                console.log(res.data);
                setComment(res.data)
                
             })
    })
.catch((error) => setError("OOPS 404 not found!"))


}
    return (
        <div>
     <input  onChange={(e)=>setpath(e.target.value)} className = "input" placeholder = "Enter PostId" /> <br/>
    
     
     <button onClick={show} className = "button" >Submit</button>
    {error==="" && 
     <div>{post.title }</div>}

     <div className = "error">{error}</div>

     


      <br/>
      
     {comment.length > 0 &&  <MyTable comment = {comment}/>}

    </div>
       
       )
}

export default HookApi;