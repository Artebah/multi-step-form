import React from "react";

import { FirstStep } from "../features/first-step/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThrirdStep";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";

const CardContent = () => {
  return (
    <div className="card__content card-content">
      <div className="card-content__wrapper">
        <FirstStep />
      </div>
    </div>
  );
};

export { CardContent };
