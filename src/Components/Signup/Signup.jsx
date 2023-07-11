import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import './Signup.css'
import Book1 from '../../Asects/Images/bookpic.jpg'
import Email from '../../Asects/Images/email.png'
import pasword from '../../Asects/Images/pasword.png'
import { NavLink, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from '../../Configes/Fire'

function Signup() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// this code is for the sign in of the website with firebas database

const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashbord")
        // window.open("https://www.w3schools.com")
    })
    .catch((error) => {
        const errorCode = error.code;
        alert("Login Succesfully")
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage)

        setEmail("");
   setEmail("");
    });
   
}

  return (
   
    <div className="lmain">
    <div className="lleft">
      <span>OnLine Library</span>
<img src={Book1} alt="" />
<span>This is an online Library on which a lot of books are <br/>present for you to use it For your Study in Universty</span>
<span>Login to Download books</span>

    </div>

<div className="lright">
<div className="sign">Sign-In.</div>
        <div className="enter">
          Kindly enter your credentials below to<br /> get access to your
          account.
        </div>
        <form >
            <label className="emi">Email*</label><br/>
            
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src={Email}/>


          <br/><br/>
          <label className="pas">Pasword*</label><br/>
           
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={pasword}/>
          <br/>

          <div className="but">
            <button type="submit" onClick={onLogin}>Login</button>
          </div>
        </form>

        <div className="button">
        Create an An Account?
         <NavLink to="/">Sign-up</NavLink>
        </div>
      </div>
    </div>

  );
};

export default Signup;