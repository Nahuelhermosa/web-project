import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Register";
import Signups from "../components/Signup";
import { productsContext } from "../context/ProductsContext";

function User() {
  const { setUser } = useContext(productsContext);

  return (
    <>
      <Navbar />
      <h1 className="descripcion">Register Form</h1>
      <Register setUser={setUser} />
      <br />
      <br />
      <Signups setUser={setUser} />
      <Footer />
    </>
  );
}

export default User;
