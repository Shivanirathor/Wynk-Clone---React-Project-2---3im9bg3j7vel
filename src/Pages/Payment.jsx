// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGooglePay, faPhone, faCreditCard, faAmazon, faMoneyBillWave, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import "../styles/Payment&Summary.css";
// import Summary from "../components/Summary";

// const Payment = () => {
//   return (
//     <div className="payment-summary">
//       <Summary />
//       <div className="payment-options">
//         <h2 style={{ marginBottom: 25, fontSize: 40 }}>Payment Options</h2>
//         <div className="upi-options">
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faGooglePay} /> Google Pay
//           </div>
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faPhone} /> PhonePe
//           </div>
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faMoneyBillWave} /> Paytm
//           </div>
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faAmazon} /> Amazon
//           </div>
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faPhone} /> Airtel
//           </div>
//           <div className="upi-option">
//             <FontAwesomeIcon icon={faPlusCircle} /> Add another UPI ID
//           </div>
//         </div>


import React from "react";
import "../styles/Payment&Summary.css";
import Summary from "../components/Summary";
const Payment = () => {
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
          <input type="text" placeholder="CARD HOLDER'S NAME" />
          <input type="text" placeholder="CARD NUMBER" />
          <div className="card-expiry">
            <input type="text" placeholder="M M" />
            <span>/</span>
            <input type="text" placeholder="Y Y" />
          </div>
          <input type="text" placeholder="CVV" />
        </div>
          <button className="save-card">Save card</button>
          <label>
            <input type="checkbox" className="auto-renew-label"/> Auto-renew
          </label>
        <button className="pay-securely">PAY SECURELY</button>
      </div>
    </div>
  );
};

export default Payment;
