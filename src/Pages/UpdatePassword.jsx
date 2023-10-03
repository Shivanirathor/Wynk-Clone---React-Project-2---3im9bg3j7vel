import React, { useState } from "react";
import "../styles/LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUpdate } from "../redux/loginSlice";
import { ToastContainer, toast } from "react-toastify";
const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleCurrPassword = (event) => {
    setCurrPassword(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUpdate = () => {
    if (!name || !email || !currPassword || !password) {
      toast.error("Please fill in all fields.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(
        getUpdate({
          name,
          email,
          currPassword,
          password,
        })
      );
    
      toast.success("Password Updated successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(()=>{
        navigate("/");
      },5000);
    }

  };

  return (
    <>
      <ToastContainer />
      <div className="update-form">
        <div className="login-signup-container">
          <h2>Update Password</h2>

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
              placeholder="PasswordCurrent"
              value={currPassword}
              onChange={handleCurrPassword}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
