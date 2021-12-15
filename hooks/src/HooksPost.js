import React, {useState} from 'react';
import axios from 'axios';
import './Hooks.css'

const HooksPost = () => {
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");

        let submit=(e)=>{
    
            e.preventDefault();
            axios.post("https://reqres.in/api/users",
            {
            "email":email,
            "password":password
        })
            .then((res)=>{
                console.log(res);
            })
            setpassword("")
            setemail("")
        }

    return ( 
    <form>
        <h2>Post API</h2>
        <input  type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" className = "input"/> <br/>
        
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password" className = "input"/> <br/>
        
        <button onClick={(e)=>submit(e)} className = "button" >Submit</button>
    </form>
)
}
export default HooksPost;