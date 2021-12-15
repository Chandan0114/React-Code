import React from 'react'
import{useState, createContext} from 'react'
import Child from './Child.js'


export const UserContext = createContext();

function HookContext() {
    const[user, setUser] = useState("Chandan");

    return (
        <UserContext.Provider value = {user}>
            <h2>Welcome {user}</h2>
            <Child/>
        </UserContext.Provider>
    )
}

export default HookContext;