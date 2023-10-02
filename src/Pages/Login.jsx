import React, { useEffect, useState } from "react";
import "../styles/LoginSignUp.css";
import loginImg from "../assets/loginImg.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginError, getLogin } from "../redux/loginSlice";
import Alert from "@mui/material/Alert";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, loginError } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({
    emailError: "",
    passwordError: "",
  });
  useEffect(() => {
    if (isLogin) {
      navigate("/");
      toast.success("Login successfully! Welcome to our platform!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isLogin]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearLoginError());
    }, 5000);
  }, [loginError]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if (!email || !password) {
      setFormError({
        emailError: "Email is required!",
        passwordError: "Password is required!",
      });
      return;
    }

    let emailError =
      email.includes("@") && email.split("@")[0].length >= 3
        ? ""
        : "Invalid email!";
    let passwordError =
      password.length >= 6
        ? ""
        : "password should be atleast 6 characters long! ";
    if (emailError || passwordError) {
      setFormError((prev) => ({
        ...prev,

        emailError,
        passwordError,
      }));
      return;
    }
    dispatch(
      getLogin({
        email,
        password,
      })
    );
    setFormError({
      emailError: "",
      passwordError: "",
    });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      {loginError && (
        <Alert
          severity="error"
          sx={{ marginTop: "20px", width: "400px", marginLeft: "35%" }}
        >
          {loginError}
        </Alert>
      )}

      <div className="loginSetUp">
        <img
          src={loginImg}
          alt="loginImg"
          className="login-image "
          width={350}
          height={640}
        />
        <div className="login-signup-container">
          <h2>Login</h2>
          <p>Get a personalised experience, and access all your music</p>

          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            {formError.emailError && (
              <p style={{ color: "red" }}>{formError.emailError}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            {formError.passwordError && (
              <p style={{ color: "red" }}>{formError.passwordError}</p>
            )}
            <button onClick={handleLogin}>Login</button>
          </div>

          <p>To create your account, install Wynk app</p>

          <p
            onClick={handleSignup}
            style={{ cursor: "pointer", color: "lightblue" }}
          >
            Create an Account
          </p>
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
