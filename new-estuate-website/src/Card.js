import React from 'react';
import './Card.css'

 const Card = (props) => {


  const mystyle = {
    backgroundColor: "rgb(0 255 31 / 25%)"
    
    
      };
   
    return(
       

        <div className = "card"  >
            <h2>{props.heading}</h2>
           
                <img src = {props.img} className = "card-image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p>{props.description}</p>
        
            <button style = {mystyle} className = "card_btn" >{props.button}</button>
        </div>
       );

}
export default Card;