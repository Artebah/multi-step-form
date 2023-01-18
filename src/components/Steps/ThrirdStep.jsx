import React from "react";

import { StepButtons } from "../StepButtons";

const ThirdStep = () => {
  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Pick add-ons</h1>
        <h2 className="card-content__subtitle">
          Add-ons help enhance your gaming experience.
        </h2>
      </div>
      <form className="card-content__form form-stepthree-content">
        <div className="form-stepthree-content__addons">
          <label
            htmlFor="addon-card-checkbox1"
            className="form-stepthree-content__addon addon-card form-card">
            <div className="addon-card__checkbox">
              <input
                type="checkbox"
                id="addon-card-checkbox1"
                name="addon-card-checkbox1"
              />
              <span></span>
            </div>
            <div className="addon-card__text">
              <h2>Online service</h2>
              <h3>Access to multiplayer games</h3>
            </div>
            <div className="addon-card__price">+$1/mo</div>
          </label>
          <label
            htmlFor="addon-card-checkbox2"
            className="form-stepthree-content__addon addon-card form-card">
            <div className="addon-card__checkbox">
              <input
                type="checkbox"
                id="addon-card-checkbox2"
                name="addon-card-checkbox2"
              />
              <span></span>
            </div>
            <div className="addon-card__text">
              <h2>Larger storage</h2>
              <h3>Extra 1TB of cloud save</h3>
            </div>
            <div className="addon-card__price">+$2/mo</div>
          </label>
          <label
            htmlFor="addon-card-checkbox3"
            className="form-stepthree-content__addon addon-card form-card">
            <div className="addon-card__checkbox">
              <input
                type="checkbox"
                id="addon-card-checkbox3"
                name="addon-card-checkbox3"
              />
              <span></span>
            </div>
            <div className="addon-card__text">
              <h2>Customizable Profile</h2>
              <h3>Custom theme on your profile</h3>
            </div>
            <div className="addon-card__price">+$2/mo</div>
          </label>
        </div>
      </form>
      <StepButtons />
    </>
  );
};

export { ThirdStep };
