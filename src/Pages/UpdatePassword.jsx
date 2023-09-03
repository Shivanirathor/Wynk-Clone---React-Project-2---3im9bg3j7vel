import React, { useEffect, useState } from "react";
import "../styles/LoginSignUp.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUpdate } from "../redux/loginSlice";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUpate } = useSelector((state) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isUpate) {
      navigate("/");
    }
  }, [isUpate]);

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
    dispatch(
      getUpdate({
        name,
        email,
        currPassword,
        password,
      })
    );
  };
  console.log("first update")

  return (
    <>
      <div className="loginSetUp">
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
