import { useContext} from "react";
import { productsContext } from "../context/ProductsContext";

function FilterByPrice() {
    const { maxPrice, handleMaxPrice } = useContext (productsContext);
    return (
        <div>
            <input
             type="range"
             name="maxPrice" 
             id="maxPrice" 
             min={0} 
             max={1000} 
             step={5}
             defaultValue={1000}
             onChange={ (e) => handleMaxPrice(Number(e.target.value))}
            />
            <p>max price ${maxPrice}</p>
        </div>
    );
}

export default FilterByPrice;