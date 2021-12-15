import React from 'react';
import{BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/home.js'
import About from './pages/about.js'
import Contact from './pages/contact.js'


function RouterApp() {
    return (
        <Router>   
         <div>
         <ul>
           <li><Link to="/home">Home</Link></li>      
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact/chandan">Contact</Link></li>
         </ul>
    
         <hr/>
    
         <Routes>
          <Route exact path = "/home" element={<Home></Home>}></Route>
          <Route exact path = "/about" element={<About></About>}></Route>
          <Route exact path = "/contact/:name" element={<Contact></Contact>}></Route>
        </Routes> 
    
     </div>
        </Router>
    
      );
    }
export default RouterApp;