import React from 'react';
import {NavDropdown} from 'react-bootstrap';


const Dropdown = (props) =>{
    return (
        <NavDropdown title= {props.title} id="basic-nav-dropdown">
        <NavDropdown.Item href="www.fb.com">{props.item1}</NavDropdown.Item>
        <NavDropdown.Item href="www.fb.com">{props.item2}</NavDropdown.Item>
        <NavDropdown.Item href="www.fb.com">{props.item3}</NavDropdown.Item>
        <NavDropdown.Item href="www.fb.com">{props.item4}</NavDropdown.Item>
        </NavDropdown>
        
    );
}
export default Dropdown;