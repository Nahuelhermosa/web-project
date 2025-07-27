import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./User.css";
import Register from "../components/Register";
import Signups from "../components/Signup";
import { productsContext } from "../context/ProductsContext";

function User() {
  const { setUser } = useContext(productsContext);

  return (
   <>
  <Navbar />
  <div className="user-page">
    <h1 className="descripcion">Register Form</h1>
    <div className="form-container">
      <Register setUser={setUser} />
    </div>

    <h1 className="descripcion">Signup Form</h1>
    <div className="form-container">
      <Signups setUser={setUser} />
    </div>
  </div>
  <Footer />
</>

  );
}

export default User;
