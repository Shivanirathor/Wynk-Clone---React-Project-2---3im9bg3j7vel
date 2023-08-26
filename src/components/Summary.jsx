// SummaryPage.js
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SummaryPage = ({ selectedPlan, handleBack, handleContinue }) => {
  return (
    <div className="summary-page">
      <h2>Selected Plan</h2>
      <div className="plan-details">
        <h3>{selectedPlan.title}</h3>
        <p>{selectedPlan.description}</p>
        <h4>Price: ${selectedPlan.price}</h4>
      </div>
      <div className="navigation">
        <FaAngleLeft size={24} onClick={handleBack} className="navigate-icon" />
        <FaAngleRight
          size={24}
          onClick={handleContinue}
          className="navigate-icon"
        />
      </div>
    </div>
  );
};

export default SummaryPage;
