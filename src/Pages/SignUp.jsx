import React, { useEffect, useState } from "react";
import "../styles/LoginSignUp.css";
import loginImg from "../assets/loginImg.jpeg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearRegisterError,
  clearRegistered,
  getRegister,
} from "../redux/loginSlice";
import Alert from "@mui/material/Alert";


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRegister, registerError } = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearRegistered());
    }, 5000);
  }, [isRegister]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearRegisterError());
    }, 5000);
  }, [registerError]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignUp = () => {
    if (!name || !email || !password) {
      setFormError({
        nameError: "All fields are mandatory!!",
        emailError: "All fields are mandatory!!",
        passwordError: "All fields are mandatory!!",
      });
      return;
    }
    let nameError =
      name.length >= 3 ? "" : "name should be atleast 3 character! ";
    let emailError =
      email.includes("@") && email.split("@")[0].length >= 3
        ? ""
        : "Invalid email,Please enter at least 3 characters before the @ symbol!";
    let passwordError =
      password.length >= 6 ? "" : "password should be atleast 6 number! ";
    if (nameError || emailError || passwordError) {
      setFormError((prev) => ({
        ...prev,
        nameError,
        emailError,
        passwordError,
      }));
      return;
    }

    dispatch(
      getRegister({
        name,
        email,
        password,
      })
    );
    navigate("/login");
    setFormError({
      nameError: "",
      emailError: "",
      passwordError: "",
    });
  };

  return (
    <>
      {registerError && (
        <Alert
          severity="info"
          sx={{ marginTop: "20px", width: "500px", marginLeft: "33%" }}
        >
          {registerError}
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
            {formError.nameError && (
              <p style={{ color: "red" }}>{formError.nameError}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              required
            />
            {formError.emailError && (
              <p style={{ color: "red" }}>{formError.emailError}</p>
            )}
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                required
              />
              <IconButton
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </div>
            {formError.passwordError && (
              <p style={{ color: "red" }}>{formError.passwordError}</p>
            )}
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
