import React from "react"
import Card from './Card.js'
import CardList from './CardList.js'

const Cardmain = () => {
    return(

        <div style={{display:"flex"}}>
            {CardList.map(value =>(
                <Card 
                heading = {value.heading}
                img = {value.img}
                title = {value.title}
                description = {value.description}
                button = {value.button}
                />
            ))}
        </div>

    );
}
export default Cardmain;