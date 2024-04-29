import React, { useContext} from "react";
import Product from "../components/Product";
import { productsContext } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import "./Products.css";

function Products () {
    const { products, isLoading, error } = useContext(productsContext);
    return (
        <>  <img src="2.pictur.png" alt="/" width={100}/> 
        <header style={{height: "100px"}}>
      
            <Navbar/>
        </header>
        
      <main className="container">
        {products.map((prod) =>(
            <Product prod={prod} />
        ))}
        </main>
        </>
    );
}

export default Products;