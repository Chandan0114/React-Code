import React, {useState } from 'react'
import './Hooks.css'
import MyTable from './Table';

function HookApi2() {
    const [post, setPost] = useState([]);
    const [path, setpath] = useState("");
    const [comment, setComment] = useState([]);
    // const [error, setError] = useState("");
    let show = async (e) =>{
        e.preventDefault();
        const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${path}`)
        .then((res)=>{
            res.json();
        })
        .catch((err1) =>{
            console.log(err1);
        })
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${path}`)
        .then((res) =>{
            res.json();
        })
        .catch((err2) =>{
            console.log(err2);
        })
        Promise.all([response1, response2])
        .then((value) =>{
            let[pst,cmt] = value;
            setPost(pst);
            setComment(cmt);
        })
        .catch((err) =>{
            console.log(err);

        })
    }

    return (
        <div>
        <input  onChange={(e)=>setpath(e.target.value)} className = "input" placeholder = "Enter PostId" /> <br/>
    
     
    <button onClick={show} className = "button" >Submit</button>
   
     <div>{post.title }</div>

    

    


     <br/>
     
    {comment.length > 0 &&  <MyTable comment = {comment}/>}
            
        </div>
    )
}

export default HookApi2