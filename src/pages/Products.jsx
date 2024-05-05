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
    const { products, isLoading, error, maxPrice, query } = useContext(productsContext);

    return (
        <>

        <img src="2.pictur.png" alt="/" width={100}/>

        <header style={{height: "120px"}}>
        <Navbar/> 
        </header> 

      <div className="filtros">
      <Search/>
      <Sort />
      <FilterByPrice/>
      </div>
      <p> items </p>
      
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