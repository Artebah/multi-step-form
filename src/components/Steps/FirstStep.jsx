import React from "react";

import { StepButtons } from "../StepButtons";

const FirstStep = () => {
  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Personal info</h1>
        <h2 className="card-content__subtitle">
          Please provide your name, email address, and phone number.
        </h2>
      </div>
      <form className="card-content__form form-stepone-content">
        <label className="form-stepone-content__label" htmlFor="name">
          <div className="form-stepone-content__label-text">
            <p>Name</p>
            {/*<span className="required-alert">This field is required</span>*/}
          </div>
          <input
            className="form-stepone-content__input"
            placeholder="e.g. Stephen King"
            name="name"
            type="text"
          />
        </label>
        <label className="form-stepone-content__label" htmlFor="email">
          <div className="form-stepone-content__label-text">
            <p>Email Address</p>
            {/*<span className="required-alert">This field is required</span>*/}
          </div>
          <input
            className="form-stepone-content__input"
            placeholder="e.g. stephenking@lorem.com"
            name="email"
            type="email"
          />
        </label>
        <label className="form-stepone-content__label" htmlFor="phone">
          <div className="form-stepone-content__label-text">
            <p>Phone Number</p>
            {/*<span className="required-alert">This field is required</span>*/}
          </div>
          <input
            className="form-stepone-content__input"
            placeholder="e.g. +1 234 567 890"
            name="phone"
            type="text"
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      <StepButtons />
    </>
  );
};

export { FirstStep };
