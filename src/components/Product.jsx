import React from "react";
import {card} from '../styles/cardStyles';
function Product({prod}) {
    return (
        <div key={prod.id} style={card}>
            <h3>{prod.title}</h3>
            <div>
            <img src={prod.image} alt={prod.title} style={{width: "50%"}}/>
            <p>${prod.price}</p>
            <button>shop</button>
            </div>
            <p>{prod.description.slice(0, 40)}...</p>
        </div>
    );
}

export default Product;