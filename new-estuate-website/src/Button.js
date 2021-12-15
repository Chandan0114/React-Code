import React from 'react';

function Button(props){
    function click(){
        console.log("clicked");
        

    }


    return(
        <button onClick = {click}>{props.title}</button>

    )
}
export default Button;