import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Register";


function User() {
  return (
    <>
      <Navbar />
      <h1 className="descripcion">Register Form</h1>
      <Register/>
      <Footer />
    </>
  );
}

export default User;
