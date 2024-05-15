import { NavLink } from "react-router-dom";
import React from 'react'
import "./Navbar.css" 
import { MdShoppingCart } from "react-icons/md";



function Navbar () {
    return(
        <nav> 
            <NavLink to={"/"}> <img src="2.pictur.png" alt="/" width={75}/> </NavLink>
            <NavLink to={"/Products"}>Products</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
           
         
            <NavLink to={"/User"}>User</NavLink>
           <NavLink to={"/Cart"}> <MdShoppingCart size={30} color="white"/></NavLink>
        </nav>
    );
    
}

export default Navbar;