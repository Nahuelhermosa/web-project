import React,{ useState, useEffect, createContext } from "react";
import { getAllProducts, getCartFromStorage } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
export const productsContext = createContext([initialProduct]);


export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState (getCartFromStorage())
    const [isLoading, setIsLoading] = useState (true);
    const [error, setError] = useState(null);
    const [sortedMaxToMin, setSortedMaxToMin] = useState (false);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [query, setQuery] = useState ("");
    const [randomProduct, setRandomProduct] = useState(initialProduct); // Estado para almacenar el producto aleatorio
    

    const handleSort = () => {
      if (sortedMaxToMin) {
        const sortedProducts = products.toSorted((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      } else {
        const sortedProducts = products.toSorted((a, b) => b.price - a.price);
        setProducts(sortedProducts);
      }
      setSortedMaxToMin(!sortedMaxToMin);
    };
    const handleMaxPrice =(price) => setMaxPrice(price);
    const handleQuery = (searchTerm) => setQuery (searchTerm);

    const addToCart = (prod) => {
      setCart((prevValue) => [...prevValue, prod]);
      const newCart = [...cart, prod];
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    };
    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

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

  useEffect(() => {
    if (products.length > 0) {
        const randomIndex = Math.floor(Math.random() * products.length);
        setRandomProduct(products[randomIndex]);
    }
    
        // Actualiza el producto aleatorio cada 10 segundos
        const intervalId = setInterval(randomProduct, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
}, [products]);


  return (
    <productsContext.Provider 
    
    value={{
     products,
     cart,
     isLoading,
     error,
     sortedMaxToMin,
     maxPrice,
     query,
     randomProduct, // Agregamos el producto aleatorio al contexto
     handleQuery,
     addToCart,
     removeFromCart,
     handleSort,
     handleMaxPrice,
     
     }}>

     {children}

    </productsContext.Provider>
  );
};