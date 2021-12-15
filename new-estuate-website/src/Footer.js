import React from 'react';
import './Footer.css'
import Footerlist from './Footerlist'

function Footer(props) {
    return ( 
        
        <div className = "maindiv">
           
            <p>{props.heading}</p>
            <ul className = "u">
                
                <li>{props.title1}</li>
                <li>{props.title2}</li>
                <li>{props.title3}</li>
                <li>{props.title4}</li>
                <li>{props.title5}</li>
               {props.title6 && <li>{props.title6}</li>}
               {props.title7 &&<li>{props.title7}</li>}
               {props.title8 &&<li>{props.title8}</li>}
                
            </ul>
        </div>
       
      
        
    );
}

export default Footer;