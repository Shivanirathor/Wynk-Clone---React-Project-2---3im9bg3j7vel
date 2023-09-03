import React, { useEffect, useState } from "react";
import "../styles/LoginSignUp.css";
import loginImg from "../assets/loginImg.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../redux/loginSlice";
import Alert from "@mui/material/Alert";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, loginError } = useSelector((state) => state.login);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    dispatch(
      getLogin({
        name,
        password,
      })
    );
  };

  return (
    <>
      {isLogin && (
        <Alert severity="success" sx={{ marginTop: "20px" }}>
          Login Successfully!!🎉
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
          <h2>Login</h2>
          <p>Get a personalised experience, and access all your music</p>

          <div className="input-container">
            <input
              type="email"
              placeholder="email"
              value={name}
              onChange={handleName}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <button onClick={handleLogin}>Login</button>
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

export default Login;
