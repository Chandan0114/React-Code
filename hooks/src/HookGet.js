import React, {useEffect, useState} from 'react';
import axios from 'axios';

function HookGet() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            console.log(data.data);
            setPosts(data.data)
        })

    },[])
    return (

       <div>
           <ul>
               {posts.map((post) => (
                   <li key = {post.id}>{post.title}</li>
               ))}
           </ul>
       </div>
    );
}

export default HookGet;