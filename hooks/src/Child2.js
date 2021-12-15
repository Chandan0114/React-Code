import React,{useContext } from "react"
import { UserContext } from "./HookContext"



function Child2() {
    const user = useContext(UserContext)
    return (
        <h2>Hello: {user}</h2>
    )
}

export default Child2;