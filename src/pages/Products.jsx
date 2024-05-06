import React, { useContext} from "react";
import Product from "../components/Product";
import { productsContext } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import "./Products.css";
import Footer from "../components/Footer";
import Sort from "../components/Sort";
import FilterByPrice from "../components/FilterByPrice";
import Search from "../components/Search";


function Products () {
    const { products, isLoading, error, maxPrice, query, cart } = useContext(productsContext);

    return (
        <>
        <header style={{height: "120px"}}>
        <Navbar/> 
        </header> 

      <div className="filtros">
      <FilterByPrice/>
      <Sort />
      <p> Items: {cart.length} </p> 
      <Search/>
      </div>
      
      
      <main className="container">
        {products
        .filter((prod)=>
            prod.price <= maxPrice && 
            prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) 
        )

        .map((prod) =>(
            <Product prod={prod} key={prod.id}/>
        ))}
       </main>

        <Footer/>
        </>
    );
}

export default Products;