import React, { useEffect, useState } from "react";
import "../styles/LoginSignUp.css";
import loginImg from "../assets/loginImg.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../redux/loginSlice";
import Alert from "@mui/material/Alert";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRegister, registerError } = useSelector((state) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isRegister) {
      navigate("/login");
    }
  }, [isRegister]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignUp = () => {
    dispatch(
      getRegister({
        name,
        email,
        password,
      })
    );
  };

  return (
    <>
      {registerError && (
        <Alert
          severity="warning"
          sx={{ marginTop: "20px", width: "350px", marginLeft: "38%" }}
        >
          Please Register First!!
        </Alert>
      )}

      <div className="loginSetUp">
        <img
          src={loginImg}
          alt="loginImg"
          className="login-image "
          width={400}
          height={600}
        />
        <div className="login-signup-container">
          <h2>Sign Up</h2>
          <p>Get a personalised experience, and access all your music</p>

          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={handleName}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
            <button onClick={handleSignUp}>Register</button>
          </div>

          <p>To create your account, install Wynk app</p>
         
          <div className="download-links">
            <a
              href="https://www.apple.com/in/app-store/"
              className="download-link"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3Srh1hSfdtXFZXcqzeNSSgVex0k2kB6mpw&usqp=CAU"
                alt="iOS Download"
              />
            </a>
            <a href="https://shorturl.at/bfFU6" className="download-link">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Android Download"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
