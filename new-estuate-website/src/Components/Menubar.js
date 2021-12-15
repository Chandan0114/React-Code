import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown,Container} from 'react-bootstrap';
import Dropdown from './Dropdown.js'
// import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";


const Menubar = () =>{
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand ><img src = "https://i0.wp.com/www.estuate.com/wp-content/uploads/2020/02/estuate-logo.png"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Service" id="basic-nav-dropdown">
        <NavDropdown.Item href="www.fb.com">Overview</NavDropdown.Item>
        <NavDropdown title="Digital Transformation" id="collasible-nav-dropdown">
        <NavDropdown title="Data and Analytics" id="collasible-nav-dropdown">

    
        
          <NavDropdown.Item href="www.fb.com">IBM</NavDropdown.Item>
          <NavDropdown.Item href="www.fb.com">Big data</NavDropdown.Item>
          <NavDropdown.Item href="www.fb.com">Machine Learning</NavDropdown.Item>
          <NavDropdown.Item href="www.fb.com">SAP Bussiness Object</NavDropdown.Item>
        
        

          </NavDropdown>
          </NavDropdown>

        </NavDropdown>

        <Dropdown title = "Products" item1 = "Overview" item2 = "Archlenz" item3 = "Giftlenz" item4 = "Kloudlenz" item5 = "e-TAs"/>
        <Dropdown title = "INDUSTRIES" item1 = "Overview" item2 = "Enterprises" item3 = "Finance" item4 = "Healthcare" item4 = "Retail"/>
        <Dropdown title = "RESOURCES" item1 = "Overview" item2 = "Data-sheet" item3 = "White-Paper" item4 = "E-books" item4 = "Success-stories"/>
        <Dropdown title = "COMPANY" item1 = "About Us" item2 = "Our Leaders" item3 = "Partners" item4 = "Events" item4 = "ReCareerstail"/>
        

        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
   
  </Container>
  
</Navbar>

    )
}
export default Menubar;