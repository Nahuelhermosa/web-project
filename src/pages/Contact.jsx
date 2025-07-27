import React, { useContext} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
 
    return (
      <>
      <div className="contact.gloval">
      <Navbar/>
      
      <div className='contacto'>
            <h1>Contact</h1>
            <h2>Any questions regarding the warranty of consoles and sports accessories will be promptly answered. Thank you</h2>
            
            <form method='post' className='formulario'>
                <label>
                    Name:
                    <input type="text" name='nombre' />
                </label>
                <label>
                    Email:
                    <input type="email" name='email' />
                </label>
                <label>
                    Comments:
                    <textarea name="comentario" ></textarea>
                </label>
                <input type="hidden" name="form-name" value="contacto" />
                <button type="submit">Enviar</button>
            </form>
            
            </div>
      
      <Footer/>
      </div>
      </>
    );
  }
  
  export default Contact;