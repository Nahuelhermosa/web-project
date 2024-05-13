import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { productsContext } from "../context/ProductsContext";
import "./Home.css";

function Home() {
    const { randomProduct } = useContext(productsContext); // Cambio aquí para usar el producto aleatorio en lugar del primer producto
    useEffect(() => {
        // Actualizamos el componente cuando cambie el producto aleatorio
    }, [randomProduct]);

    return (
        <>
            <header>  
                <Navbar/>
            </header> 
            <div className="pictur">
                {randomProduct && (
                    <Product prod={randomProduct} key={randomProduct.id} />
                )}
                <p className="descripcion">Vintage Lab is your perfect destination to discover a unique collection of vintage fashion and home items with a nostalgic charm. </p>
            </div>
            <Footer/>
        </> 
    );
}

export default Home;
