import React from "react";
import Logo from "../assets/logo.jpeg";
import "../styles/Payment&Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      <h1>
        {" "}
        <img
          src={Logo}
          alt="logo"
          width={50}
          style={{ position: "absolute", marginLeft: -50, borderRadius: 50 }}
        />
        WYNK MUSIC
      </h1>
      <div className="plan-details">
        <h2>Yearly Plan</h2>
        <p className="original-price">₹999</p>
        <p className="discounted-price">₹399</p>
      </div>
      <div className="savings">
        <p>Discount (Save 60%)</p>
        <p>- ₹600</p>
      </div>
      <div className="to-pay">
        <p>To pay</p>
        <p className="final-price">₹399</p>
      </div>
    </div>
  );
};

export default Summary;
