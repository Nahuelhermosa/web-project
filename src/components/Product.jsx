import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import {card} from '../styles/cardStyles';
function Product({prod}) {
    const { addToCart } = useContext (productsContext);
    return (
        <div key={prod.id} style={card}>
            <h3>{prod.title}</h3>
            <div>
            <img src={prod.image} alt={prod.title} style={{width: "50%"}}/>
            <p>${prod.price}</p>
            <button onClick={()=> addToCart(prod)}>Add to Cart</button>
            </div>
            <p>{prod.description.slice(0, 40)}...</p>
        </div>
    );
}

export default Product;