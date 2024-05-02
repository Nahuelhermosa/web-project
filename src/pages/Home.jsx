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
        <div className="pictur">
          <img src="2.pictur.png" alt="/" width={200}/> 
        </div>
        <Footer/>
        </> 
        
    )
}

export default Home;