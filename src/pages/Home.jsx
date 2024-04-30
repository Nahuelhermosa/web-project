import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home () {
    return (
        <>
        <header> 
             <img src="2.pictur.png" alt="/" width={200}/> 
        <Navbar/>
        </header> 
        
        <p className="descripcion">Vintage lab es tu destino perfecto para descubrir una colección única de moda vintage y artículos del hogar con un encanto nostálgico. Nos especializamos en curar cuidadosamente una selección exclusiva de prendas de vestir, accesorios y objetos para el hogar que capturan la esencia del estilo retro y vintage. Desde elegantes vestidos de los años 50 hasta encantadores muebles de mediados de siglo, cada artículo en nuestra tienda está meticulosamente seleccionado para aquellos que buscan agregar un toque de nostalgia y personalidad a su estilo y decoración.</p>
        <Footer/>
        </> 
        
    )
}

export default Home;