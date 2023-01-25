import React from "react";
import { useSummary } from "../hooks/useSummary";

const Summary = () => {
  const { addons, planName, planPrice, planType, buttonChangeInfoHandle, getTotalPrice } =
    useSummary();

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
              <h2>
                {planName} ({planType})
              </h2>
              <button onClick={buttonChangeInfoHandle}>Change</button>
            </div>
            <div className="main-price-fourth__right">
              <span>{planPrice}</span>
            </div>
          </div>
          {addons.map((addon) => (
            <div key={addon.id} className="form-stepfourth-content__price price-fourth">
              <div className="price-fourth__left">
                <h3>{addon.title}</h3>
              </div>
              <div className="price-fourth__right">
                <span>{addon.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="form-stepfourth-content__total">
          <h3>Total (per {planType.slice(0, -2)})</h3>
          <span>{getTotalPrice()}</span>
        </div>
      </form>
    </>
  );
};

export { Summary };
