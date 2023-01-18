import React from "react";

const StepButtons = () => {
  return (
    <div className="card-content__buttons step-buttons">
      <div className="step-buttons__wrapper">
        <button className="step-buttons__back btn">Go Back</button>
        <button className="step-buttons__next btn">Next Step</button>
      </div>
    </div>
  );
};

export { StepButtons };
