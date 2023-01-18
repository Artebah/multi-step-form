import React, { Fragment } from "react";

const SideBar = ({ activeStep }) => {
  const stepsInfo = [
    { number: 1, stepText: "Your info" },
    { number: 2, stepText: "Select plan" },
    { number: 3, stepText: "Add-ons" },
    { number: 4, stepText: "Summary" },
  ];

  return (
    <div className="card__side-bar side-bar">
      <ul className="side-bar__list">
        {stepsInfo.map(({ stepText, number }, index) => (
          <Fragment key={`${stepText}_${number}`}>
            <li className="side-bar__item">
              <div className={`side-bar__number ${activeStep === index ? "active" : ""}`}>
                {number}
              </div>
              <div className="side-bar__text">
                <h2>step {number}</h2>
                <h3>{stepText}</h3>
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export { SideBar };
