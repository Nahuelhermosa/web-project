import { useContext } from "react";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { productsContext } from "../context/ProductsContext";

function Sort() {
    const {sortedMaxToMin, handleSort } = useContext(productsContext);
    return (
    <section>
        {sortedMaxToMin ? (
     <BsSortNumericDown
     style={{ fontSize:"1.5rem", color: "white", cursor: "pointer" }}
     onClick={handleSort}
     /> 
     ) : (
     <BsSortNumericDownAlt
     style={{ fontSize:"1.5rem", color: "white", cursor: "pointer" }}
     onClick={handleSort}
     />
     )}
    </section>
    );   
}
export default Sort;