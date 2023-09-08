// import React, { useState } from "react";
// import "../styles/Payment&Summary.css";
// import Summary from "../components/Summary";
// // import {
// //   Google,
// //   Phone,
// //   Payment,
// //   Amazon,
// //   LocalAtm,
// //   Add,
// // } from "@mui/icons-material";

// const Payment = () => {
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//    const handlePayment = () => {
//     setTimeout(() => {
//       setPaymentSuccess(true);
//     }, 2000);
//   };
//   return (
//     <div className="payment-summary">
//       <Summary />
//       <div className="payment-options">
//         <h2 style={{ marginBottom: 25, fontSize: 40 }}>Payment Options</h2>
//         <div className="upi-options">
//           <div className="upi-option">Google Pay</div>
//           <div className="upi-option">PhonePe</div>
//           <div className="upi-option">Paytm</div>
//           <div className="upi-option">Amazon</div>
//           <div className="upi-option">Airtel</div>
//           <div className="upi-option">Add another UPI ID</div>
//         </div>
//         <h2>CREDIT & DEBIT CARDS</h2>
//         <div className="card-form">
//           <input type="text" placeholder="CARD HOLDER'S NAME" />
//           <input type="text" placeholder="CARD NUMBER" />
//           <div className="card-expiry">
//             <input type="text" placeholder="M M" />
//             <span>/</span>
//             <input type="text" placeholder="Y Y" />
//           </div>
//           <input type="text" placeholder="CVV" />
//         </div>
//         <button className="save-card">Save card</button>
//         <label>
//           <input type="checkbox" className="auto-renew-label" /> Auto-renew
//         </label>
//         <button className="pay-securely" onClick={handlePayment}>PAY SECURELY</button>
//         {paymentSuccess && (
//           <div className="success-message">
//             <p>Your payment is successful!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import "../styles/Payment&Summary.css";
import Summary from "../components/Summary";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryMM, setCardExpiryMM] = useState("");
  const [cardExpiryYY, setCardExpiryYY] = useState("");
  const [cvv, setCVV] = useState("");

  const handlePayment = () => {
    if (
      !cardHolderName ||
      !cardNumber ||
      !cardExpiryMM ||
      !cardExpiryYY ||
      !cvv
    ) {
      alert("Please fill in all card details before submitting.");
      return;
    }
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
    // navigate("/")
  };

  return (
    <div className="payment-summary">
      <Summary />
      <div className="payment-options">
        <h2 style={{ marginBottom: 25, fontSize: 40 }}>Payment Options</h2>
        <div className="upi-options">
          <div className="upi-option">Google Pay</div>
          <div className="upi-option">PhonePe</div>
          <div className="upi-option">Paytm</div>
          <div className="upi-option">Amazon</div>
          <div className="upi-option">Airtel</div>
          <div className="upi-option">Add another UPI ID</div>
        </div>
        <h2>CREDIT & DEBIT CARDS</h2>
        <div className="card-form">
          <input
            type="text"
            placeholder="CARD HOLDER'S NAME"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
          <input
            type="text"
            placeholder="CARD NUMBER"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
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
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
        <button className="save-card">Save card</button>
        <label>
          <input type="checkbox" className="auto-renew-label" /> Auto-renew
        </label>
        <button className="pay-securely" onClick={handlePayment}>
          PAY SECURELY
        </button>

        {paymentSuccess && (
          <div className="success-message">
            <p>Your payment is successful!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
