import React from "react";

import { FirstStepForm } from "../FirstStepForm";

const FirstStep = () => {
  return (
    <>
      <div className="card-content__text">
        <h1 className="card-content__title">Personal info</h1>
        <h2 className="card-content__subtitle">
          Please provide your name, email address, and phone number.
        </h2>
      </div>
      <FirstStepForm />
    </>
  );
};

export { FirstStep };
