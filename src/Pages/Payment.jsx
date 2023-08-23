import React, { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import Summary from "../components/Summary";

const PaymentPage = ({ selectedPlan, handleClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleBackToSummary = () => {
    setSelectedPaymentMethod(null); // Reset selected payment method
  };

  return (
   
    <DialogContent>
         <Summary/>
      {selectedPaymentMethod ? (
        <div>
          <h1>Payment Method: {selectedPaymentMethod}</h1>
          {/* Your payment details and confirmation */}
          <button onClick={handleClose}>Close</button>
        </div>
      ) : (
        <div>
          <h1>Select Payment Method</h1>
          <button onClick={() => handlePaymentMethodSelect("PhonePay")}>PhonePay</button>
          <button onClick={() => handlePaymentMethodSelect("Paytm")}>Paytm</button>
          <button onClick={() => handlePaymentMethodSelect("AmazonPay")}>AmazonPay</button>
          <button onClick={handleBackToSummary}>Back to Summary</button>
        </div>
      )}
    </DialogContent>
  );
};

export default PaymentPage;
