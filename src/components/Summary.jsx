import React from "react";

import { StepButtons } from "./StepButtons";

const Summary = () => {
  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Finishing up</h1>
        <h2 className="card-content__subtitle">
          Double-check everything looks OK before confirming.
        </h2>
      </div>
      <form className="card-content__form form-stepfourth-content">
        <div className="form-stepfourth-content__prices">
          <div className="form-stepfourth-content__price main-price-fourth">
            <div className="main-price-fourth__left">
              <h2>Arcade (Monthly)</h2>
              <button>Change</button>
            </div>
            <div className="main-price-fourth__right">
              <span>$9/mo</span>
            </div>
          </div>
          <div className="form-stepfourth-content__price price-fourth">
            <div className="price-fourth__left">
              <h3>Online service</h3>
            </div>
            <div className="price-fourth__right">
              <span>+$1/mo</span>
            </div>
          </div>
          <div className="form-stepfourth-content__price price-fourth">
            <div className="price-fourth__left">
              <h3>Larger storage</h3>
            </div>
            <div className="price-fourth__right">
              <span>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="form-stepfourth-content__total">
          <h3>Total (per month)</h3>
          <span>+$12/mo</span>
        </div>
      </form>
      <StepButtons />
    </>
  );
};

export { Summary };
