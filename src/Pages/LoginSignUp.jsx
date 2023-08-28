import React, { useState } from "react";
import "../styles/LoginSignUp.css";
import loginImg from "../assets/loginImg.jpeg";
const LoginSignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendOTP = () => {
    // Add your code to send OTP here
    setOtpSent(true);
  };

  return (
    <div className="loginSetUp">
      <img src={loginImg} alt="loginImg" width={300} height={600} />
      <div className="login-signup-container">
        <h2>Login/Sign Up</h2>
        <p>Get a personalised experience, and access all your music</p>

        
          <select className="country-code">
            <option value="">🇮🇳 +91</option>
            <option value="">IN +91</option>
          </select>
        
        {otpSent ? (
          <div className="otp-sent-message">
            OTP sent to {phoneNumber}. Please check your phone.
          </div>
        ) : (
          <div className="phone-input-container">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />

            <button onClick={handleSendOTP}>Send OTP</button>
          </div>
        )}

        <p>To create your account, install Wynk app</p>
        <div className="download-links">
          <a href="ios-app-download-link" className="download-link">
            <img src="https://o.remove.bg/downloads/a5c190a2-19b9-47c7-b269-14b93bb66598/imgbin-app-store-google-play-app-store-X6KZA6U2DVzzqx128G2RxG1UH-removebg-preview.png" alt="iOS Download" />
          
          </a>
          <a href="android-app-download-link" className="download-link">
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Android Download" />
         
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
