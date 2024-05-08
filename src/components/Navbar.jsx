import { NavLink } from "react-router-dom";
import React from 'react'
import "./Navbar.css" 
import Search from "./Search";

function Navbar () {
    return(
        <nav> 
                 
            <img src="2.pictur.png" alt="/" width={75}/>
            <NavLink to={"/"}> Home</NavLink>
            <NavLink to={"/Products"}>Products</NavLink>
            <Search/>
            
        </nav>
    );
    
}

export default Navbar;