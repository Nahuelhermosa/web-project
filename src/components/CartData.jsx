import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";

function CartData () {
    const { cart } = useContext (productsContext);
    return cart?.length ? (
    <>
            <Link to="/Cart">
            <MdShoppingCart size={30} color="blue"/>{""}     
            </Link>
            <span>${getTotalCartPrice(cart)}</span>
    </>
    ) : (
        <p>empty cart</p>
    );
    
}
export default CartData;