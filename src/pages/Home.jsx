import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home () {
    return (
        <>
        <header>  
        <Navbar/>
        </header> 
          <img src="2.pictur.png" alt="/" width={200}/> 
    
        <Footer/>
        </> 
        
    )
}

export default Home;