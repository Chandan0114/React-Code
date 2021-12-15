import React from 'react';
import{BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Cardmain from './Cardmain.js'


function RouterCard() {
    return ( 
        <Router>
            <div>
                <ul>
                <li><Link to="/card">Card</Link></li>     
                </ul>
                <br/>
                <hr/>
                <Routes>
                 <Route exact path = "/card" element={<Cardmain></Cardmain>}></Route>
                </Routes>
            </div>
        </Router>
     );
}

export default RouterCard;