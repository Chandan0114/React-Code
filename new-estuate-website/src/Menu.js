import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import MainMenu from './MainMenu';
// import List from './List';

const Menu = (props) => {
 
  return (
    <div>
      
    
      
        title={props.title} 
       
         
          {props.items}
         
          

       
       
    
       
  
    </div>
  )
}

export default Menu;