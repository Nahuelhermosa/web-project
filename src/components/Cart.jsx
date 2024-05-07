import {useContext} from "react";
import { productsContext } from "../context/ProductsContext";

function Cart() {
    const {cart}= useContext(productsContext);
    return <div>Cart{Cart.lenght}</div>;
}

export default Cart;