import React from 'react'
import Footer from './Footer'
import Footerlist from './Footerlist'
import './Footer.css'



function Footermain() {
    return ( 
        <div style = {{display:"flex"}}>
           {Footerlist.map(values =>(
               <Footer
               heading = {values.heading}
                title1 = {values.title1}
                title2 = {values.title2}
                title3 = {values.title3}
                title4 = {values.title4}
                title5 = {values.title5}
                title6 = {values.title6}
                title7 = {values.title7}
                title8 = {values.title8}
                />
           ))}
    </div>
);
}

export default Footermain;