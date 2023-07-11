import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import './Login.css'
import Book1 from '../../Asects/Images/bookpic.jpg'
import Email from '../../Asects/Images/email.png'
import pasword from '../../Asects/Images/pasword.png'
import { NavLink, useNavigate } from "react-router-dom";
import {auth} from '../../Configes/Fire'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
// this is the code that will connect the website with fire base 
const onSubmit = async (e) => {
  e.preventDefault()
 
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        
        alert("add successfully");
        navigate('/signin');
        // ...
    })
    .catch((error) => {
        alert("error.massage")
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        // ..
    });
    setEmail("");
    setEmail("");

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
<div className="sign">Sign-up.</div>
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
            <button type="submit" onClick={onSubmit}>CREATE ACCOUNT</button>
          </div>
        </form>

        <div className="button">
        Already Have An Account?
         <NavLink to="/signin">LOGIN</NavLink>
        </div>
      </div>
    </div>

  );
};

export default Login;