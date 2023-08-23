
import React from "react";

const Summary = ({ selectedPlan, handleBack, handleContinue }) => {
  return (
    <div>
      <h1>Summary</h1>
      <h2>Selected Plan:</h2>
      <p>{selectedPlan}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default Summary;
