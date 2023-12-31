import React, { useState } from "react";
import "../styles/Payment&Summary.css";
import Summary from "../components/Summary";
import { useNavigate } from "react-router-dom";
import googlePay from "../assets/googlePay.jpeg";
import amazon from "../assets/amazon.jpeg";
import paytm from "../assets/paytm.jpeg";
import phonePay from "../assets/phonePay.jpeg";
import airtel from "../assets/airtel.jpeg";
import payPal from "../assets/paypal.jpeg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { ToastContainer, toast } from "react-toastify";
const Payment = () => {
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryMM, setCardExpiryMM] = useState("");
  const [cardExpiryYY, setCardExpiryYY] = useState("");
  const [cvv, setCVV] = useState("");
  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    const errors = {};

    if (!cardHolderName.trim()) {
      errors.cardHolderName = "Card holder's name is required.";
    }

    if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
      errors.cardNumber = "Card number must be a 16-digit numeric value.";
    }

    if (
      !cardExpiryMM ||
      !cardExpiryYY ||
      isNaN(cardExpiryMM) ||
      isNaN(cardExpiryYY) ||
      cardExpiryMM.length !== 2 ||
      cardExpiryYY.length !== 2
    ) {
      errors.cardExpiry = "Invalid expiry date format.";
    }

    if (!cvv || isNaN(cvv) || cvv.length !== 3) {
      errors.cvv = "CVV must be a 3-digit numeric value.";
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Payment Successfully Done!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }, 3000);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={3000} />

      {isLoading && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
          }}>
            <CircularProgress />
          </Box>
        )}

      <div className="payment-summary">
        <Summary />

        <div className="payment-options">
          <h2 style={{ marginBottom: 25, fontSize: 40 }}>Payment Options</h2>
          <div className="upi-options">
            <div className="upi-option">
              <img src={googlePay} alt="googlepay" />
            </div>
            <div className="upi-option">
              <img src={amazon} alt="amazonpay" />
            </div>
            <div className="upi-option">
              <img src={paytm} alt="paytm" />
            </div>

            <div className="upi-option">
              <img src={phonePay} alt="phonepay" width={50} />
            </div>

            <div className="upi-option">
              <img src={airtel} alt="airtal" width={50} />
            </div>
            <div className="upi-option">
              <img src={payPal} alt="paypal" width={50} />
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
