import React from 'react'
import Menu from './Menu';
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';




const MainMenu = () => {
  
  return (
    <div>
       <Navbar bg="light" expand="lg">
  
   
  
    
  
  {List.map((item1) => (
      <NavDropdown title={item1.name} id="navbarScrollingDropdown">
   
     
        
        {item1.values.map(detail => (
        
          <div>
       <NavDropdown.Item href="#action3">{detail.name}</NavDropdown.Item>
           </div> 

        ))}
        </NavDropdown>
 
 ))} 
  
     
       
      
    
   
 </Navbar>     
 
    </div>
  )
}

export default MainMenu;