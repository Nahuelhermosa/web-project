import React, { useContext} from "react";
import Product from "../components/Product";
import { productsContext } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import "./Products.css";

function Products () {
    const { products, isLoading, error } = useContext(productsContext);
    return (
        <>
        <header style={{height: "100px"}}>
            <h1>Fake Store</h1> 
            <Navbar/>
        </header>
        <h2>list products</h2>
      <main className="container">
        {products.map((prod) =>(
            <Product prod={prod} />
        ))}
        </main>
        </>
    );
}

export default Products;