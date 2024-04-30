import React,{ useState, useEffect, createContext } from "react";
import { getAllProducts } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
export const productsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const [error, setError] = useState(null);
    const [sortedMaxToMin, setSortedMaxToMin] =useState (false);

    const handleSort =()=>{
      if(sortedMaxToMin){
        const sortedProducts= products.toSorted((a, b)=>a.price - b.price);
        setProducts(sortedProducts);
      }else {
        const sortedProducts= products.toSorted((a, b)=>b.price - a.price);
        setProducts(sortedProducts);
      }
      setSortedMaxToMin(!sortedMaxToMin);
    }
    const fetchData = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const data = await getAllProducts();
            setProducts(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        }finally{
            setIsLoading(false);
        }
  };
  useEffect(()=> {
    fetchData();
  }, []);
  return(
    <productsContext.Provider value={{products, isLoading,error}}>
     {children}
    </productsContext.Provider>
  );
};