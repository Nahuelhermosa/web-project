import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

function Signup ({ setUser }) {
    const [error,setError] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password } = e.target.elements;
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential)=>{
          setUser( userCredential.user.email);
          
        })
        .catch((err)=>{
          const errorCode = err.code;
          const errorMessage = err.message;
          console.error(errorCode);
          setError(errorMessage);
        }); 
      };
    return (
        <>
        <h1 className="descripcion">Signup form</h1>
     
        <form onSubmit={handleSubmit}>
        <label className="descripcion">
          Email:
          <input type="text" placeholder="nahuelman@mail.com" name="email" />
        </label>
        <label className="descripcion">
          Password:
          <input type="password" placeholder="keep your password secure" name="password"/>
        </label>
        <p style={{color:"red"}}>{error}</p>
      <button type="submit">Signup</button>
      </form>
      </>
    );
}
export default Signup;