import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product"; // Importa el componente Product
import { productsContext } from "../context/ProductsContext";
import "./Home.css";

function Home() {
    const { products } = useContext(productsContext);
    const [firstProduct, setFirstProduct] = useState(null);

    // Cuando los productos cambien, actualiza el primer producto
    useEffect(() => {
        if (products.length > 0) {
            setFirstProduct(products[0]); // Obtén el primer producto de la lista
        }
    }, [products]);

    return (
        <>
            <header>  
                <Navbar/>
            </header> 
            <div className="pictur">
                {/* Muestra la tarjeta del primer producto si está disponible */}
                {firstProduct && (
                    <Product prod={firstProduct} key={firstProduct.id}   />
                )}
                <p className="descripcion">Vintage lab es tu destino perfecto para descubrir una colección única de moda vintage y artículos del hogar con un encanto nostálgico. </p>
            </div>
            <Footer/>
        </> 
    );
}

export default Home;
