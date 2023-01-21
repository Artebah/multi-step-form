import React from "react";

import { useStepButtonHandles } from "../hooks/use-step-button-handles";

const StepButtons = ({ isFirstStep, isLastStep, isConfirmed, setIsConfirmed }) => {
  const { buttonBackHandle, buttonNextHandle } = useStepButtonHandles({
    isFirstStep,
    isLastStep,
    setIsConfirmed,
  });

  if (isConfirmed) return;

  return (
    <div className="card-content__buttons step-buttons">
      <div className="step-buttons__wrapper">
        {!isFirstStep && (
          <button onClick={buttonBackHandle} className="step-buttons__back btn">
            Go Back
          </button>
        )}
        <button onClick={buttonNextHandle} className="step-buttons__next btn">
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export { StepButtons };
