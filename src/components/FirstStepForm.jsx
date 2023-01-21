import React from "react";

import { useFirstStepForm } from "../hooks/use-first-step-form";

const FirstStepForm = () => {
  const { inputsArray, inputOnChangeHandler } = useFirstStepForm();

  return (
    <form className="card-content__form form-stepone-content">
      {inputsArray.map((input) => (
        <label
          key={input.nameId}
          className="form-stepone-content__label"
          htmlFor={input.nameId}>
          <div className="form-stepone-content__text">
            <p>{input.name}</p>
            {input.data.requiredAlert && (
              <span className="required-alert">{input.data.requiredAlertMessage}</span>
            )}
          </div>
          <input
            onChange={(e) => inputOnChangeHandler(e, input.data.requiredAlert)}
            value={input.data.value}
            className="form-stepone-content__input"
            placeholder={input.placeholder}
            name={input.name}
            id={input.nameId}
            type={input.type}
          />
        </label>
      ))}
    </form>
  );
};

export { FirstStepForm };
