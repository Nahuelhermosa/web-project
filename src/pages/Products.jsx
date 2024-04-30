import React, { useContext} from "react";
import Product from "../components/Product";
import { productsContext } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import "./Products.css";
import Footer from "../components/Footer";
import Sort from "../components/Sort";

function Products () {
    const { products, isLoading, error } = useContext(productsContext);
    return (
        <><img src="2.pictur.png" alt="/" width={100}/>  
        <header style={{height: "100px"}}>
      <Navbar/> 
           <Sort />
        </header>
        
      <main className="container">
        {products.map((prod) =>(
            <Product prod={prod} />
        ))}
        </main>
        <Footer/>
        </>
    );
}

export default Products;