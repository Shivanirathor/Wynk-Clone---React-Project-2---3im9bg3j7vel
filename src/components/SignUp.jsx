import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
 
const handleSignUp=()=>{

  // Check if the fields are empty
  if (!name || !email || !password) {
    alert("Please fill in all the mandatory fields.");
    return;
  }
  // Check if email contains "@gmail"
  if (!email.includes("@gmail")) {
    setEmailError("Please enter a valid email (e.g., yourname@gmail.com)");
    return;
  }

  navigate("/");
  localStorage.setItem("loggedIn", true);
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);
}

const changedName = (event) => {
  setName(event.target.value);
};
const changedEmail = (event) => {
  setEmail(event.target.value);
};
const changedPassword = (event) => {
  setPassword(event.target.value);
};


  return (
    <div className="form-container sign-up-container">
      <form >
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={changedName}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={changedEmail}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={changedPassword}
          placeholder="Password"
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
