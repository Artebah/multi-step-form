import { FirstStep } from "./Steps/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThrirdStep";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";
import { StepButtons } from "./StepButtons";

import { useCardContent } from "../hooks/use-card-content";

const CardContent = () => {
  const steps = [<FirstStep />, <SecondStep />, <ThirdStep />, <Summary />];

  const { CurrentStep, isConfirmed, isFirstStep, isLastStep, setIsConfirmed } =
    useCardContent(steps);

  return (
    <div className="card__content card-content">
      <div className="card-content__wrapper">
        {!isConfirmed ? CurrentStep : <ThankYou />}
        <StepButtons
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          setIsConfirmed={setIsConfirmed}
          isConfirmed={isConfirmed}
        />
      </div>
    </div>
  );
};

export { CardContent };
