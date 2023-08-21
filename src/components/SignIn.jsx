import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn=()=>{

    const nameLocalStorage = localStorage.getItem("name");
    const passwordLocalStorage = localStorage.getItem("password");
  
    if (nameLocalStorage === name && passwordLocalStorage === password) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  

const changedName = (event) => {
  setName(event.target.value);
};

const changedPassword = (event) => {
  setPassword(event.target.value);
};

  return (
    <div className="form-container sign-in-container">
      <form >
        <h1>Sign in</h1>
         <div className="social-container">
        
          <a href="#" className="social">
            {/* <i className="fab fa-facebook-f" /> */}
            <i className="fa-brands fa-facebook fa-flip"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={name}
          onChange={changedName}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={changedPassword}
        />
        <a href="#">Forgot your password?</a>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
