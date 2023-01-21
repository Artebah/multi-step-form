import React from "react";
import { useSelector } from "react-redux";
import { selectStepsCounter } from "../features/steps-counter/steps-counter-slice";

function useCardContent(steps) {
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const stepsCounter = useSelector(selectStepsCounter);

  const CurrentStep = steps[stepsCounter];

  const isFirstStep = stepsCounter === 0;
  const isLastStep = stepsCounter === steps.length - 1;

  return { CurrentStep, isConfirmed, setIsConfirmed, isFirstStep, isLastStep };
}

export { useCardContent };
