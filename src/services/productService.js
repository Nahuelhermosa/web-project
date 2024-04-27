export const getAllProducts = async ()=> {
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
}