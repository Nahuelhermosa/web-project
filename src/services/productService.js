export const getAllProducts = async ()=> {
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
}
export const getCartFromStorage = () => {
    const storedCart = window.localStorage.getItem("cart");
    const cart = JSON.parse(storedCart);
    return cart ? cart : [];
  };