import React from "react";

import { useSelector } from "react-redux";
import { selectStepsCounter } from "../features/steps-counter/steps-counter-slice";

const SideBar = () => {
  const activeStep = useSelector(selectStepsCounter);

  const texts = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <div className="card__side-bar side-bar">
      <ul className="side-bar__list">
        {texts.map((text, index) => (
          <React.Fragment key={`${text}_${index}`}>
            <li className="side-bar__item">
              <div className={`side-bar__number ${activeStep === index ? "active" : ""}`}>
                {index + 1}
              </div>
              <div className="side-bar__text">
                <h2>step {index + 1}</h2>
                <h3>{text}</h3>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export { SideBar };
