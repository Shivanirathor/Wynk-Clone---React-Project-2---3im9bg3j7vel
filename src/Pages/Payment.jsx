import React, { useState } from "react";
import "../styles/Payment&Summary.css";
import Summary from "../components/Summary";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import googlePay from "../assets/googlePay.jpeg";
import amazon from "../assets/amazon.jpeg";
import paytm from "../assets/paytm.jpeg";
import phonePay from "../assets/phonePay.jpeg";
import airtel from "../assets/airtel.jpeg";
import payPal from "../assets/payPal.jpeg";
import Logo from "../assets/logo.jpeg";

const Payment = () => {
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryMM, setCardExpiryMM] = useState("");
  const [cardExpiryYY, setCardExpiryYY] = useState("");
  const [cvv, setCVV] = useState("");
  const [errors, setErrors] = useState({});
  const [payementAlert, setPaymentAlert] = useState(false);

  const handlePayment = () => {
    const errors = {};

    if (!cardHolderName.trim()) {
      errors.cardHolderName = "Card holder's name is required.";
    }

    if (!cardNumber.trim()) {
      errors.cardNumber = "Card number is required.";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits.";
    }

    if (!cardExpiryMM.trim() || !cardExpiryYY.trim()) {
      errors.cardExpiry = "Expiry date is required.";
    } else if (!/^\d{2}$/.test(cardExpiryMM) || !/^\d{2}$/.test(cardExpiryYY)) {
      errors.cardExpiry = "Invalid expiry date format.";
    }

    if (!cvv.trim()) {
      errors.cvv = "CVV is required.";
    } else if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = "CVV must be 3 digits.";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setPaymentAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      {payementAlert && (
        <Alert severity="success" sx={{ marginLeft: "40%", width: "300px" }}>
          Payment Successfully!!🎉
        </Alert>
      )}
      <div>
      <img
          src={Logo}
          alt="logo"
          width={50}
          style={{ position: "absolute", borderRadius: 50, marginLeft:"39%" }}
        />
    <h2 style={{textAlign:"center", color:"white", fontSize:"40px", marginTop:"10px"}}>Wynk Music</h2>
      </div>
      <div className="payment-summary">
        <Summary />

        <div className="payment-options">
          <h2 style={{ marginBottom: 25, fontSize: 40 }}>Payment Options</h2>
          <div className="upi-options">
            <div className="upi-option">
              <img src={googlePay} alt="" />
            </div>
            <div className="upi-option">
              <img src={amazon} alt="" />
            </div>
            <div className="upi-option">
              <img src={paytm} alt="" />
            </div>

            <div className="upi-option">
              <img src={phonePay} alt="" width={50}/>
            </div>

            <div className="upi-option">
              <img src={airtel} alt="" width={50}/>
            </div>
            <div className="upi-option">
              <img src={payPal} alt="" width={50} />
            </div>
          
          </div>
          <div className="card-form">
            <input
              type="text"
              placeholder="CARD HOLDER'S NAME"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
            {errors.cardHolderName && (
              <p className="error">{errors.cardHolderName}</p>
            )}

            <input
              type="text"
              placeholder="CARD NUMBER"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

            <div className="card-expiry">
              <input
                type="text"
                placeholder="M M"
                value={cardExpiryMM}
                onChange={(e) => setCardExpiryMM(e.target.value)}
              />
              <span>/</span>
              <input
                type="text"
                placeholder="Y Y"
                value={cardExpiryYY}
                onChange={(e) => setCardExpiryYY(e.target.value)}
              />
            </div>
            {errors.cardExpiry && <p className="error">{errors.cardExpiry}</p>}

            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
          <button className="save-card">Save card</button>
          <label>
            <input type="checkbox" className="auto-renew-label" /> Auto-renew
          </label>
          <button className="pay-securely" onClick={handlePayment}>
            PAY SECURELY
          </button>

        </div>
      </div>
    </>
  );
};

export default Payment;
