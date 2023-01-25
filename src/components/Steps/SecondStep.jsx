import React from "react";

import ArcadeImage from "../../assets/images/icon-arcade.svg";
import AdvancedImage from "../../assets/images/icon-advanced.svg";
import ProImage from "../../assets/images/icon-pro.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  selectPlan,
  setPlanName,
  setPlanType,
  setPlanPrice,
} from "../../features/plan/plan-slice";

const SecondStep = () => {
  const dispatch = useDispatch();
  const { planName, planType, planPrice } = useSelector(selectPlan);
  const [isSwitcherBlocked, setIsSwitcherBlocked] = React.useState(false);

  const plans = [
    {
      name: "arcade",
      monthlyPrice: "$9/mo",
      yearlyPrice: "$90/yr",
      imageSrc: ArcadeImage,
      altImg: "the arcade plan",
    },
    {
      name: "advanced",
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
      imageSrc: AdvancedImage,
      altImg: "the advanced plan",
    },
    {
      name: "pro",
      monthlyPrice: "$15/mo",
      yearlyPrice: "$150/yr",
      imageSrc: ProImage,
      altImg: "the pro plan",
    },
  ];

  const planHandle = (planObj) => {
    if (planObj.name !== planName) {
      dispatch(setPlanName(planObj.name));
      if (planType === "yearly") {
        dispatch(setPlanPrice(planObj.yearlyPrice));
      } else {
        dispatch(setPlanPrice(planObj.monthlyPrice));
      }
    }
  };

  const planTypeHandle = () => {
    if (!isSwitcherBlocked) {
      setIsSwitcherBlocked(true);
      setTimeout(() => setIsSwitcherBlocked(false), 400);

      if (planType === "monthly") {
        const priceNumber = planPrice.match(/\d+/)[0] * 10;
        const yearlyPrice = "$" + priceNumber + "/yr";

        dispatch(setPlanType("yearly"));
        dispatch(setPlanPrice(yearlyPrice));
      } else {
        const priceNumber = planPrice.match(/\d+/)[0] / 10;
        const monthlyPrice = "$" + priceNumber + "/mo";

        dispatch(setPlanType("monthly"));
        dispatch(setPlanPrice(monthlyPrice));
      }
    }
  };

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
          {plans.map((planObj) => (
            <div
              key={planObj.name}
              onClick={() => planHandle(planObj)}
              className={`form-steptwo-content__plan form-card ${
                planObj.name === planName ? "selected" : ""
              }`}>
              <img src={planObj.imageSrc} alt={planObj.altImg} />
              <div className="form-card__text">
                <h2>{planObj.name}</h2>
                <h3>
                  {planType === "monthly" ? planObj.monthlyPrice : planObj.yearlyPrice}
                </h3>
                {planType === "yearly" && <p>2 months free</p>}
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={planTypeHandle}
          className="form-steptwo-content__switch steptwo-switch">
          <span className={`steptwo-switch__type ${planType === "monthly" && "active"}`}>
            Monthly
          </span>
          <div
            className={`steptwo-switch__toggle ${planType === "yearly" ? "active" : ""}`}>
            <span></span>
          </div>
          <span className={`steptwo-switch__type ${planType === "yearly" && "active"}`}>
            Yearly
          </span>
        </div>
      </form>
    </>
  );
};

export { SecondStep };
