// PaymentPage.js
import React, { useState } from "react";
import { FaCreditCard, FaMobile, FaWallet } from "react-icons/fa";

const Payment = ({ selectedPlan, handleClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleBackToSummary = () => {
    setSelectedPaymentMethod(null);
  };

  const handlePaymentConfirm = () => {
    // Handle payment confirmation and other actions here
    // You can use selectedPaymentMethod and selectedPlan data
    handleClose();
  };

  return (
    <div className="payment-page">
      {selectedPaymentMethod ? (
        <div className="payment-details">
          <h2>Confirm Payment</h2>
          <div className="payment-method">
            <h3>Selected Payment Method:</h3>
            {selectedPaymentMethod === "credit-card" && (
              <FaCreditCard size={40} />
            )}
            {selectedPaymentMethod === "mobile" && <FaMobile size={40} />}
            {selectedPaymentMethod === "wallet" && <FaWallet size={40} />}
          </div>
          <h3>Payment Summary</h3>
          <div className="plan-details">
            <h4>{selectedPlan.title}</h4>
            <p>{selectedPlan.description}</p>
            <h4>Price: ${selectedPlan.price}</h4>
          </div>
          <button onClick={handlePaymentConfirm}>Confirm Payment</button>
        </div>
      ) : (
        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <div className="method-icons">
            <FaCreditCard
              size={40}
              onClick={() => handlePaymentMethodSelect("credit-card")}
            />
            <FaMobile
              size={40}
              onClick={() => handlePaymentMethodSelect("mobile")}
            />
            <FaWallet
              size={40}
              onClick={() => handlePaymentMethodSelect("wallet")}
            />
          </div>
          <button onClick={handleBackToSummary}>Back to Summary</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
