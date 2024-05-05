import { useContext } from "react";
import { productsContext} from "../context/ProductsContext";

function Search () {
  const {query, handleQuery} = useContext (productsContext);

  return (
    <>
    <form>
      <label htmlFor="searchTerm">Search</label>
      <input 
        type="search"
        name=""
        id="searchTerm"
        placeholder="jacket, watch, shoes..."
        onChange={(e) => handleQuery(e.target.value)}
      />
    </form>
    <span> {query}</span>
    </>
  )
}
export default Search;