import React from "react"
import {Link} from "react-router-dom"
import './Design.css'
function Navbar(){
    const navStyle ={
        color : "#000000",
        textDecoration : "none"
    }
    
    return(
        <nav>
        <img className="ticket" src="http://www.pngall.com/wp-content/uploads/2018/06/Cinema-PNG-HD.png" alt="ticket"></img>
            <ul className="navLinks">
                <Link style={navStyle} to="/drama"><li>TV</li> </Link>
                <Link style={navStyle} to="/intheatre"> <li>Now Up</li> </Link>
                <Link style={navStyle} to="/" > <li>Popular</li> </Link>
                <Link style={navStyle} to="/kids"> <li>Kids</li> </Link>
                <Link style={navStyle} to="search"><li>Search</li> </Link>
            </ul>
        </nav>
    )
}



export default Navbar