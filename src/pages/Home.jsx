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
                    <Product prod={firstProduct} key={firstProduct.id} />
                )}
                <p className="descripcion">Vintage lab es tu destino perfecto para descubrir una colección única de moda vintage y artículos del hogar con un encanto nostálgico. Nos especializamos en curar cuidadosamente una selección exclusiva de prendas de vestir, accesorios y objetos para el hogar que capturan la esencia del estilo retro y vintage. Desde elegantes vestidos de los años 50 hasta encantadores muebles de mediados de siglo, cada artículo en nuestra tienda está meticulosamente seleccionado para aquellos que buscan agregar un toque de nostalgia y personalidad a su estilo y decoración.</p>
            </div>
            <Footer/>
        </> 
    );
}

export default Home;
