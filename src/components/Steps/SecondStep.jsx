import React from "react";

import { StepButtons } from "../StepButtons";

import ArcadeImage from "../../assets/images/icon-arcade.svg";
import AdvancedImage from "../../assets/images/icon-advanced.svg";
import ProImage from "../../assets/images/icon-pro.svg";

const SecondStep = () => {
  const isYearly = false;

  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Select your plan</h1>
        <h2 className="card-content__subtitle">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <form className="card-content__form form-steptwo-content">
        <div className="form-steptwo-content__plans">
          <div className="form-steptwo-content__plan form-card">
            <img src={ArcadeImage} alt="the arcade plan" />
            <div className="form-card__text">
              <h2>Arcade</h2>
              <h3>$9/mo</h3>
            </div>
          </div>
          <div className="form-steptwo-content__plan form-card">
            <img src={AdvancedImage} alt="the advanced plan" />
            <div className="form-card__text">
              <h2>Advanced</h2>
              <h3>$12/mo</h3>
            </div>
          </div>
          <div className="form-steptwo-content__plan form-card">
            <img src={ProImage} alt="the pro plan" />
            <div className="form-card__text">
              <h2>Pro</h2>
              <h3>$15/mo</h3>
            </div>
          </div>
        </div>
        <div className="form-steptwo-content__switch steptwo-switch">
          <span className={`steptwo-switch__type ${isYearly ? "" : "active"}`}>
            Monthly
          </span>
          <div className={`steptwo-switch__toggle ${isYearly ? "active" : ""}`}>
            <span></span>
          </div>
          <span className={`steptwo-switch__type ${isYearly ? "active" : ""}`}>
            Yearly
          </span>
        </div>
      </form>
      <StepButtons />
    </>
  );
};

export { SecondStep };
